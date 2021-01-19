import { BankAccount } from "../bank-account";
import { Investment } from "./protocols/investment";

export class BoldInvestment implements Investment {
    public getProfit(bankAccount: BankAccount): number {
        const balance = bankAccount.checkBalance()
        const profitRate = this.getRandomProfitRate()
        return balance.value * profitRate
    }

    private getRandomProfitRate (): number {
        const randomValue = Math.random()
        if(randomValue <= 0.2) return 0.05
        if(randomValue > 0.2 && randomValue <= 0.5) return 0.03
        return 0.06
    }
}