import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddPoolCall,
  Controller,
  Controller__poolInfoResult,
  Deposited,
  PoolShutDown,
} from "../generated/Controller/Controller"
import { BalancerPool } from "../generated/Controller/BalancerPool";
import { Investment, Pool, User } from "../generated/schema"

export function handlePoolShutdown(event: PoolShutDown): void {
  const pool = new Pool(event.params._pid.toHexString());
  pool.shutdown = true;
  pool.save()
}

export function handleDeposited(event: Deposited): void {
  const poolId = event.params.poolid
  const userId = event.transaction.from.toHexString()

  const investmentId = `${event.params.poolid.toHexString()}_${event.params.amount.toHexString()}_${userId}`

  // if no user, create user
  let user = User.load(userId)
  if (!user) {
    user = new User(userId)
    user.save()
  }

  const poolInfo = getPoolInfo(poolId, <Address> event.transaction.to)
  const balancerPool = BalancerPool.bind(poolInfo.getLptoken())
  const balancerPoolId = balancerPool.getPoolId()

  const investment = new Investment(investmentId)
  investment.user = userId
  investment.pool = balancerPoolId.toHexString()
  investment.amount = event.params.amount
  investment.timestamp = event.block.timestamp
  investment.blockNumber = event.block.number
  investment.txHash = event.transaction.hash
  investment.save()
}

export function handleAddPool(call: AddPoolCall): void {
  // Query blockchain to getPool length, so that we can parse last added pool by calling poolInfo
  const controller = Controller.bind(call.to)
  const poolLength = controller.poolLength()
  const pid = BigInt.fromI32(poolLength.toI32() - 1)
  const poolInfo = controller.poolInfo(pid)
  
  // query blockchain to get poolId, and use that as our own id
  const balancer = BalancerPool.bind(poolInfo.getLptoken())
  const balancerPoolId = balancer.getPoolId()

  // save pool entity 
  const pool = new Pool(balancerPoolId.toHexString());
  pool.pid = pid;
  pool.lpToken = poolInfo.getLptoken()
  pool.token = poolInfo.getToken()
  pool.gauge = poolInfo.getGauge()
  pool.balRewards = poolInfo.getBalRewards()
  pool.stash = poolInfo.getStash()
  pool.shutdown = poolInfo.getShutdown()
  pool.save()
}

function getPoolInfo(pid: BigInt, controllerAddress: Address): Controller__poolInfoResult {
  const controller = Controller.bind(controllerAddress)
  const poolInfo = controller.poolInfo(pid)
  return poolInfo
}