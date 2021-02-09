import { Budget } from "../budget";
import { BudgetState } from "./budget-state";
import { FinishedState } from "./finished";

export class UnapprovedState implements BudgetState {
  public approve(budget: Budget): void {
    throw new Error("Unapproved budgets cant get approved");
  }

  public unapprove(budget: Budget): void {
    throw new Error("Already on unapproved state");
  }

  finish(budget: Budget): void {
    budget.changeState(new FinishedState());
  }

  public applyExtraDiscount(budget: Budget): void {
    throw new Error("Unapproved budgets receive no discounts!");
  }
}
