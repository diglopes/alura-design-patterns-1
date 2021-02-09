import { BudgetState } from "./states/budget-state";
import { OnApprovalState } from "./states/on-approval";

export class Budget {
  private state: BudgetState = new OnApprovalState();
  constructor(private value: number) {}

  public getValue(): number {
    return this.value;
  }

  public changeState(state: BudgetState): void {
    this.state = state
  }

  public applyExtraDiscount() {
    return this.state.applyExtraDiscount(this);
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
