import { Budget } from "../budget";
import { ApprovedState } from "./approved";
import { BudgetState } from "./budget-state";
import { UnapprovedState } from "./unapproved";

export class OnApprovalState implements BudgetState {
  public approve (budget: Budget): void {
    budget.changeState(new ApprovedState())
  }

  public unapprove (budget: Budget): void {
    budget.changeState(new UnapprovedState())
  } 

  finish (budget: Budget): void {
    throw new Error("Can't jump direct to finish")
  }

  public applyExtraDiscount(budget: Budget): number {
    return budget.getValue() - budget.getValue() * 0.05;
  }
}
