import { Address, BigInt, log, store } from "@graphprotocol/graph-ts"
import { Investment } from "../generated/schema"
import { Withdrawn } from "../generated/templates/BaseRewardPool/BaseRewardPool"
import { getInvestmentId } from "./helpers"

export function handleWithdrawn(event: Withdrawn): void {
    // We can safely assume that investment already exists for that user   
    const investmentId = getInvestmentId(<Address>event.transaction.to, event.params.user)

    let investment = Investment.load(investmentId)
    if (!investment) {
        log.error("INVESTMENT DOESNT EXIST {}", [investmentId])
        return 
    }

    // Decrease amount by how much is withdrawn
    investment.amount = investment.amount.minus(event.params.amount)
    if (investment.amount.equals(BigInt.fromString('0'))) {
        store.remove('Investment', investmentId)
        return
    }
    investment.lastUpdated = event.block.timestamp
    investment.save()
}