import { Budget } from "../budget";
import { BudgetState } from "./budget-state";
import { FinishedState } from "./finished";

export class UnapprovedState implements BudgetState {
  public approve(): BudgetState {
    throw new Error("Unapproved budgets cant get approved");
  }

  public unapprove(): BudgetState {
    throw new Error("Already on unapproved state");
  }

  finish(): BudgetState {
    return new FinishedState();
  }

  public applyExtraDiscount(budget: Budget): number {
    throw new Error("Unapproved budgets receive no discounts!");
  }
}
