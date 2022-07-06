import { Address } from "@graphprotocol/graph-ts";

export function getInvestmentId(stashAddress: Address, userId: Address): string {
    return `${stashAddress.toHexString()}_${userId.toHexString()}`
}