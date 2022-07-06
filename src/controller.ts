import { Address, BigInt } from "@graphprotocol/graph-ts"
import { BalancerPool } from "../generated/Controller/BalancerPool";
import { Investment, Pool, User } from "../generated/schema"
import { getInvestmentId } from "./helpers";
import { AddedPool, Deposited, PoolShutDown, Controller, Controller__poolInfoResult } from "../generated/Controller/Controller"

export function handlePoolShutdown(event: PoolShutDown): void {
  const pool = new Pool(event.params._pid.toHexString());
  pool.shutdown = true;
  pool.save()
}

export function handleDeposited(event: Deposited): void {
  // If the user deposited, but did not stake his d2d tokens
  // do nothing
  if (! event.params._stake) return;
  const poolId = event.params._pid
  const userId = event.transaction.from.toHexString()

  const poolInfo = getPoolInfo(poolId, <Address> event.transaction.to)
  const balancerPool = BalancerPool.bind(poolInfo.getLptoken())
  const balancerPoolId = balancerPool.getPoolId()
  
  // if no user, create user
  let user = User.load(userId)
  if (!user) {
    user = new User(userId)
    user.save()
  }

  // When somebody does first time deposit we create a new investment
  // If he stakes his tokens, we update this investment to keep track of everything
  const investmentId = getInvestmentId(poolInfo.getBalRewards(), event.transaction.from)

  let investment = Investment.load(investmentId)
  if (!investment) {
    // If we don't have investment, create investment
    investment = new Investment(investmentId)
    investment.user = userId
    investment.amount = event.params._amount
    investment.pool = balancerPoolId.toHexString()
  } else {
    // he is depositing more, update the amount
    investment.amount = investment.amount.plus(event.params._amount)
  }
  
  investment.lastUpdated = event.block.timestamp
  investment.save()
}

export function handleAddPool(event: AddedPool): void {  
  // query blockchain to get poolId, and use that as our own id
  const balancer = BalancerPool.bind(event.params._lpToken)
  const balancerPoolId = balancer.getPoolId()

  // save pool entity 
  const pool = new Pool(balancerPoolId.toHexString());
  pool.pid = event.params._pid;
  pool.lpToken = event.params._lpToken
  pool.token = event.params._token
  pool.gauge = event.params._gauge
  pool.balRewards = event.params._baseRewardsPool
  pool.stash = event.params._stash
  pool.shutdown = false
  pool.save()
}

function getPoolInfo(pid: BigInt, controllerAddress: Address): Controller__poolInfoResult {
  const controller = Controller.bind(controllerAddress)
  const poolInfo = controller.poolInfo(pid)
  return poolInfo
}