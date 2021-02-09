import { Budget } from "../budget";
import { ApprovedState } from "./approved";
import { BudgetState } from "./budget-state";
import { UnapprovedState } from "./unapproved";

export class OnApprovalState implements BudgetState {
  public approve (): BudgetState {
    return new ApprovedState()
  }

  public unapprove (): BudgetState {
    return new UnapprovedState()
  } 

  finish (): BudgetState {
    throw new Error("Can't jump direct to finish")
  }

  public applyExtraDiscount(budget: Budget): number {
    return budget.getValue() - budget.getValue() * 0.05;
  }
}
