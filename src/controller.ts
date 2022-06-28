import { BigInt } from "@graphprotocol/graph-ts"
import {
  AddPoolCall,
  Controller,
  Deposited,
  PoolShutDown,
} from "../generated/Controller/Controller"
import { BalancerPool } from "../generated/Controller/BalancerPool";
import { Pool, User } from "../generated/schema"

export function handlePoolShutdown(event: PoolShutDown): void {
  const pool = new Pool(event.params._pid.toHexString());
  pool.shutdown = true;
  pool.save()
}

export function handleDeposited(event: Deposited): void {
  const poolId = event.params.poolid.toHexString()
  const userId = event.transaction.from.toHexString()

  let userPools = <string[]> []
  // User might not exist (first deposit)
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
  } else {
    userPools = <string[]> user.pools
  }
  
  userPools.push(poolId)
  user.pools = userPools
  user.save()
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