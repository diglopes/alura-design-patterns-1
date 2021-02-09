import { Account } from "../account";
import { AccountState } from "./account-state";
import { PositiveState } from "./positive-state";

export class NegativeState implements AccountState {
    
    public withdraw (account: Account, value: number): void {
        throw new Error("Negative accounts cannot withdraw")
    }

    public deposit (account: Account, value: number): void {
        account.setBalance(account.getBalance() + (value * 0.95))
    }

    public positivate(account: Account): void {
        account.changeState(new PositiveState())
    }
    
    public negativate(account: Account): void {
        throw new Error("Account already on negative state")
    }
}