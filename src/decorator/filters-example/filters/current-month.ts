import { Account } from "../account"
import { Filter } from "./filter"

export class CurrentMonthFilter extends Filter {
    constructor(filter?: Filter) {
        super(filter)
    }

    public filter (accounts: Account[]): Account[] {
        const accountsLeft = accounts.filter(acc => !(new Date(acc.createdAt).getMonth() === new Date().getMonth() && new Date(acc.createdAt).getFullYear() === new Date().getFullYear()) )
        return this.compose(accountsLeft) 
    }
}