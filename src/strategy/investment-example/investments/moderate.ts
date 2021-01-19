import { BankAccount } from "../bank-account";
import { Investment } from "./protocols/investment";

export class ModerateInvestment implements Investment {
    public getProfit(bankAccount: BankAccount): number {
        const balance = bankAccount.checkBalance()
        const profitRate = this.getRandomProfitRate()
        return balance.value * profitRate
    }

    private getRandomProfitRate():number {
        const ratePossibilities = [0.025, 0.07]
        const randomIndex = (Math.floor(Math.random() * 2) + 1) - 1
        return ratePossibilities[randomIndex]
    }
}