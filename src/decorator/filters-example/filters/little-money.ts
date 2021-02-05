import { Account } from "../account";
import { Filter } from "./filter";

export class LittleMoneyFilter extends Filter{
    constructor(filter?: Filter) {
        super(filter)
    }

    public filter(accounts: Account[]): Account[] {
        const accountsLeft = accounts.filter(acc => acc.getBalance() > 100)
        return this.compose(accountsLeft)
    }
}