import { Account } from "../account";
import { AccountState } from "./account-state";
import { NegativeState } from "./negative-state";

export class PositiveState implements AccountState {
    
    public withdraw (account: Account, value: number): void {
        account.setBalance(account.getBalance() - value)
    }

    public deposit (account: Account, value: number): void {
        account.setBalance(account.getBalance() + (value * 0.98))
    }

    public positivate(account: Account): void {
        throw new Error("Account already on positive state")
    }

    public negativate(account: Account): void {
        account.changeState(new NegativeState())
    }
}