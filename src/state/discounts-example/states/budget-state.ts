import { Budget } from "../budget";

export interface BudgetState {
  applyExtraDiscount: (budget: Budget) => number;
  approve: () => BudgetState;
  unapprove: () => BudgetState;
  finish: () => BudgetState
}
