import { AccountState } from "./states/account-state";
import { NegativeState } from "./states/negative-state";
import { PositiveState } from "./states/positive-state";

export class Account {
  private state: AccountState
  constructor(private balance: number = 0) {
    this.balance >= 0 ? this.state = new PositiveState() : new NegativeState()
  }

  public setBalance(value: number): void {
    this.balance = value;
  }

  public getBalance(): number {
    return this.balance;
  }

  public withdraw(value: number): void {
    this.state.withdraw(this, value);
    if(this.balance < 0) this.negativate()
  }

  public deposit(value: number): void {
    this.state.deposit(this, value);
    if(this.balance >= 0 && this.state instanceof NegativeState) this.positivate()
  }

  public negativate() {
    this.state.negativate(this);
  }

  public positivate() {
    this.state.positivate(this);
  }

  public changeState(state: AccountState): void {
    this.state = state;
  }
}
