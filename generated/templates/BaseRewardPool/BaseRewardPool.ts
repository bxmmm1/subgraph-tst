// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class RewardAdded extends ethereum.Event {
  get params(): RewardAdded__Params {
    return new RewardAdded__Params(this);
  }
}

export class RewardAdded__Params {
  _event: RewardAdded;

  constructor(event: RewardAdded) {
    this._event = event;
  }

  get reward(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RewardPaid extends ethereum.Event {
  get params(): RewardPaid__Params {
    return new RewardPaid__Params(this);
  }
}

export class RewardPaid__Params {
  _event: RewardPaid;

  constructor(event: RewardPaid) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Staked extends ethereum.Event {
  get params(): Staked__Params {
    return new Staked__Params(this);
  }
}

export class Staked__Params {
  _event: Staked;

  constructor(event: Staked) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class BaseRewardPool extends ethereum.SmartContract {
  static bind(address: Address): BaseRewardPool {
    return new BaseRewardPool("BaseRewardPool", address);
  }

  DURATION(): BigInt {
    let result = super.call("DURATION", "DURATION():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DURATION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DURATION", "DURATION():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  NEW_REWARD_RATIO(): BigInt {
    let result = super.call(
      "NEW_REWARD_RATIO",
      "NEW_REWARD_RATIO():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_NEW_REWARD_RATIO(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "NEW_REWARD_RATIO",
      "NEW_REWARD_RATIO():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentRewards(): BigInt {
    let result = super.call("currentRewards", "currentRewards():(uint256)", []);

    return result[0].toBigInt();
  }

  try_currentRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentRewards",
      "currentRewards():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  earned(account: Address): BigInt {
    let result = super.call("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_earned(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("earned", "earned(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  extraRewards(param0: BigInt): Address {
    let result = super.call("extraRewards", "extraRewards(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_extraRewards(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "extraRewards",
      "extraRewards(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  extraRewardsLength(): BigInt {
    let result = super.call(
      "extraRewardsLength",
      "extraRewardsLength():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_extraRewardsLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "extraRewardsLength",
      "extraRewardsLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  historicalRewards(): BigInt {
    let result = super.call(
      "historicalRewards",
      "historicalRewards():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_historicalRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "historicalRewards",
      "historicalRewards():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastTimeRewardApplicable(): BigInt {
    let result = super.call(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_lastTimeRewardApplicable(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastUpdateTime(): BigInt {
    let result = super.call("lastUpdateTime", "lastUpdateTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastUpdateTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpdateTime",
      "lastUpdateTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  operator(): Address {
    let result = super.call("operator", "operator():(address)", []);

    return result[0].toAddress();
  }

  try_operator(): ethereum.CallResult<Address> {
    let result = super.tryCall("operator", "operator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  periodFinish(): BigInt {
    let result = super.call("periodFinish", "periodFinish():(uint256)", []);

    return result[0].toBigInt();
  }

  try_periodFinish(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("periodFinish", "periodFinish():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pid(): BigInt {
    let result = super.call("pid", "pid():(uint256)", []);

    return result[0].toBigInt();
  }

  try_pid(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pid", "pid():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  queuedRewards(): BigInt {
    let result = super.call("queuedRewards", "queuedRewards():(uint256)", []);

    return result[0].toBigInt();
  }

  try_queuedRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "queuedRewards",
      "queuedRewards():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardManager(): Address {
    let result = super.call("rewardManager", "rewardManager():(address)", []);

    return result[0].toAddress();
  }

  try_rewardManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rewardManager",
      "rewardManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardPerToken(): BigInt {
    let result = super.call("rewardPerToken", "rewardPerToken():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardPerToken(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerToken",
      "rewardPerToken():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerTokenStored(): BigInt {
    let result = super.call(
      "rewardPerTokenStored",
      "rewardPerTokenStored():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_rewardPerTokenStored(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerTokenStored",
      "rewardPerTokenStored():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardRate(): BigInt {
    let result = super.call("rewardRate", "rewardRate():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rewardRate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewardRate", "rewardRate():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardToken(): Address {
    let result = super.call("rewardToken", "rewardToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardToken", "rewardToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewards(param0: Address): BigInt {
    let result = super.call("rewards", "rewards(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_rewards(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rewards", "rewards(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stakingToken(): Address {
    let result = super.call("stakingToken", "stakingToken():(address)", []);

    return result[0].toAddress();
  }

  try_stakingToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("stakingToken", "stakingToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userRewardPerTokenPaid(param0: Address): BigInt {
    let result = super.call(
      "userRewardPerTokenPaid",
      "userRewardPerTokenPaid(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_userRewardPerTokenPaid(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userRewardPerTokenPaid",
      "userRewardPerTokenPaid(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get pid_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get stakingToken_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get rewardToken_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get operator_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get rewardManager_(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddExtraRewardCall extends ethereum.Call {
  get inputs(): AddExtraRewardCall__Inputs {
    return new AddExtraRewardCall__Inputs(this);
  }

  get outputs(): AddExtraRewardCall__Outputs {
    return new AddExtraRewardCall__Outputs(this);
  }
}

export class AddExtraRewardCall__Inputs {
  _call: AddExtraRewardCall;

  constructor(call: AddExtraRewardCall) {
    this._call = call;
  }

  get _reward(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddExtraRewardCall__Outputs {
  _call: AddExtraRewardCall;

  constructor(call: AddExtraRewardCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class GetRewardCall extends ethereum.Call {
  get inputs(): GetRewardCall__Inputs {
    return new GetRewardCall__Inputs(this);
  }

  get outputs(): GetRewardCall__Outputs {
    return new GetRewardCall__Outputs(this);
  }
}

export class GetRewardCall__Inputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }
}

export class GetRewardCall__Outputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }
}

export class GetReward1Call extends ethereum.Call {
  get inputs(): GetReward1Call__Inputs {
    return new GetReward1Call__Inputs(this);
  }

  get outputs(): GetReward1Call__Outputs {
    return new GetReward1Call__Outputs(this);
  }
}

export class GetReward1Call__Inputs {
  _call: GetReward1Call;

  constructor(call: GetReward1Call) {
    this._call = call;
  }

  get _account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _claimExtras(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class GetReward1Call__Outputs {
  _call: GetReward1Call;

  constructor(call: GetReward1Call) {
    this._call = call;
  }
}

export class QueueNewRewardsCall extends ethereum.Call {
  get inputs(): QueueNewRewardsCall__Inputs {
    return new QueueNewRewardsCall__Inputs(this);
  }

  get outputs(): QueueNewRewardsCall__Outputs {
    return new QueueNewRewardsCall__Outputs(this);
  }
}

export class QueueNewRewardsCall__Inputs {
  _call: QueueNewRewardsCall;

  constructor(call: QueueNewRewardsCall) {
    this._call = call;
  }

  get _rewards(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class QueueNewRewardsCall__Outputs {
  _call: QueueNewRewardsCall;

  constructor(call: QueueNewRewardsCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class StakeAllCall extends ethereum.Call {
  get inputs(): StakeAllCall__Inputs {
    return new StakeAllCall__Inputs(this);
  }

  get outputs(): StakeAllCall__Outputs {
    return new StakeAllCall__Outputs(this);
  }
}

export class StakeAllCall__Inputs {
  _call: StakeAllCall;

  constructor(call: StakeAllCall) {
    this._call = call;
  }
}

export class StakeAllCall__Outputs {
  _call: StakeAllCall;

  constructor(call: StakeAllCall) {
    this._call = call;
  }
}

export class StakeForCall extends ethereum.Call {
  get inputs(): StakeForCall__Inputs {
    return new StakeForCall__Inputs(this);
  }

  get outputs(): StakeForCall__Outputs {
    return new StakeForCall__Outputs(this);
  }
}

export class StakeForCall__Inputs {
  _call: StakeForCall;

  constructor(call: StakeForCall) {
    this._call = call;
  }

  get _for(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StakeForCall__Outputs {
  _call: StakeForCall;

  constructor(call: StakeForCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _claim(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawAllCall extends ethereum.Call {
  get inputs(): WithdrawAllCall__Inputs {
    return new WithdrawAllCall__Inputs(this);
  }

  get outputs(): WithdrawAllCall__Outputs {
    return new WithdrawAllCall__Outputs(this);
  }
}

export class WithdrawAllCall__Inputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }

  get _claim(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class WithdrawAllCall__Outputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawAllAndUnwrapCall extends ethereum.Call {
  get inputs(): WithdrawAllAndUnwrapCall__Inputs {
    return new WithdrawAllAndUnwrapCall__Inputs(this);
  }

  get outputs(): WithdrawAllAndUnwrapCall__Outputs {
    return new WithdrawAllAndUnwrapCall__Outputs(this);
  }
}

export class WithdrawAllAndUnwrapCall__Inputs {
  _call: WithdrawAllAndUnwrapCall;

  constructor(call: WithdrawAllAndUnwrapCall) {
    this._call = call;
  }

  get _claim(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class WithdrawAllAndUnwrapCall__Outputs {
  _call: WithdrawAllAndUnwrapCall;

  constructor(call: WithdrawAllAndUnwrapCall) {
    this._call = call;
  }
}

export class WithdrawAndUnwrapCall extends ethereum.Call {
  get inputs(): WithdrawAndUnwrapCall__Inputs {
    return new WithdrawAndUnwrapCall__Inputs(this);
  }

  get outputs(): WithdrawAndUnwrapCall__Outputs {
    return new WithdrawAndUnwrapCall__Outputs(this);
  }
}

export class WithdrawAndUnwrapCall__Inputs {
  _call: WithdrawAndUnwrapCall;

  constructor(call: WithdrawAndUnwrapCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _claim(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class WithdrawAndUnwrapCall__Outputs {
  _call: WithdrawAndUnwrapCall;

  constructor(call: WithdrawAndUnwrapCall) {
    this._call = call;
  }
}
