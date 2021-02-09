import { Budget } from "../budget";
import { BudgetState } from "./budget-state";
import { FinishedState } from "./finished";

export class ApprovedState implements BudgetState {
  public approve(budget: Budget): void {
    throw new Error("Already on approved state");
  }

  public unapprove(budget: Budget): void {
    throw new Error("Approved budgets cant get unapproved");
  }

  finish(budget: Budget): void {
   budget.changeState(new FinishedState())
  }

  public applyExtraDiscount(budget: Budget): number {
    return budget.getValue() - budget.getValue() * 0.02;
  }
}
