import { BaseRewardPoolCreated } from "../generated/RewardFactory/RewardFactory"
import { BaseRewardPool } from "../generated/templates"

export function handlePoolCreated(event: BaseRewardPoolCreated): void {
    const poolAddress = event.params.poolAddress
    BaseRewardPool.create(poolAddress)
}