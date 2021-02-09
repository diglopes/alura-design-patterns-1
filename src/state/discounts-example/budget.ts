import { BudgetState } from "./states/budget-state";
import { OnApprovalState } from "./states/on-approval";

export class Budget {
  private state: BudgetState = new OnApprovalState();
  constructor(private value: number) {}

  public getValue(): number {
    return this.value;
  }

  public applyExtraDiscount() {
    return this.state.applyExtraDiscount(this);
  }

  public approve(): void {
    this.state = this.state.approve();
  }

  public unapprove(): void {
    this.state = this.state.unapprove();
  }

  public finish(): void {
    this.state = this.state.finish();
  }
}
