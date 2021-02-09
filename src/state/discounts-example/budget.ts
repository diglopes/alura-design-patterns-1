import { BudgetState } from "./states/budget-state";
import { OnApprovalState } from "./states/on-approval";

export class Budget {
  private state: BudgetState = new OnApprovalState();
  private discountApplied: boolean = false;
  constructor(private value: number) {}

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value
  }

  public changeState(state: BudgetState): void {
    this.discountApplied = false;
    this.state = state;
  }

  public applyExtraDiscount() {
    if (!this.discountApplied) {
      this.discountApplied = true;
      return this.state.applyExtraDiscount(this);
    } else {
      throw new Error("Extra discount can only be applied once per state");
    }
  }

  public approve(): void {
    this.state.approve(this);
  }

  public unapprove(): void {
    this.state.unapprove(this);
  }

  public finish(): void {
    this.state.finish(this);
  }
}
