import { BankAccount } from "../../bank-account";

export interface Investment {
    getProfit: (bankAccount: BankAccount) => number
}