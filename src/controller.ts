import { BigInt } from "@graphprotocol/graph-ts"
import {
  Controller,
  Deposited,
  FeeManagerChanged,
  FeesChanged,
  OwnerChanged,
  PoolManagerChanged,
  PoolShutDown,
  SystemShutdown,
  TreasuryChanged,
  VoteDelegateChanged,
  Withdrawn
} from "../generated/Controller/Controller"
import { ExampleEntity } from "../generated/schema"

export function handleDeposited(event: Deposited): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.user = event.params.user
  entity.poolid = event.params.poolid

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.FEE_DENOMINATOR(...)
  // - contract.MAX_FEES(...)
  // - contract.MAX_LOCK_TIME(...)
  // - contract.bal(...)
  // - contract.feeDistro(...)
  // - contract.feeManager(...)
  // - contract.feeToken(...)
  // - contract.gaugeMap(...)
  // - contract.isShutdown(...)
  // - contract.lockFees(...)
  // - contract.lockRewards(...)
  // - contract.owner(...)
  // - contract.platformFees(...)
  // - contract.poolInfo(...)
  // - contract.poolLength(...)
  // - contract.poolManager(...)
  // - contract.profitFees(...)
  // - contract.rewardFactory(...)
  // - contract.staker(...)
  // - contract.stashFactory(...)
  // - contract.tokenFactory(...)
  // - contract.treasury(...)
  // - contract.voteDelegate(...)
  // - contract.voteOwnership(...)
  // - contract.voteParameter(...)
}

export function handleFeeManagerChanged(event: FeeManagerChanged): void {}

export function handleFeesChanged(event: FeesChanged): void {}

export function handleOwnerChanged(event: OwnerChanged): void {}

export function handlePoolManagerChanged(event: PoolManagerChanged): void {}

export function handlePoolShutDown(event: PoolShutDown): void {}

export function handleSystemShutdown(event: SystemShutdown): void {}

export function handleTreasuryChanged(event: TreasuryChanged): void {}

export function handleVoteDelegateChanged(event: VoteDelegateChanged): void {}

export function handleWithdrawn(event: Withdrawn): void {}
