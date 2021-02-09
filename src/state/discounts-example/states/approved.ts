import { Budget } from "../budget";
import { BudgetState } from "./budget-state";
import { FinishedState } from "./finished";

export class ApprovedState implements BudgetState {
  public approve(): BudgetState {
    throw new Error("Already on approved state");
  }

  public unapprove(): BudgetState {
    throw new Error("Approved budgets cant get unapproved");
  }

  finish(): BudgetState {
    return new FinishedState();
  }

  public applyExtraDiscount(budget: Budget): number {
    return budget.getValue() - budget.getValue() * 0.02;
  }
}
