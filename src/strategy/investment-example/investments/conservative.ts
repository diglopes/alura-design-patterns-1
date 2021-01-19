import { BankAccount } from "../bank-account";
import { Investment } from "./protocols/investment";

export class ConvervativeInvestment implements Investment {
    public getProfit(bankAccount: BankAccount): number {
        const balance = bankAccount.checkBalance()
        return  balance.value * 0.08
    }
}