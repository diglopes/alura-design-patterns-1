import { BankAccount } from "./bank-account";
import { Investment } from "./investments/protocols/investment";

export class Investor {
    private taxRate: number = 0.25
    constructor(private investment: Investment){}

    public invest(bankAccount: BankAccount): number {
        const grossProfit = this.investment.getProfit(bankAccount)
        const taxValue = grossProfit * this.taxRate
        const netIncome = grossProfit - taxValue
        bankAccount.deposit(netIncome)
        return netIncome
    }
}