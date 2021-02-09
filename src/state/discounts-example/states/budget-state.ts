import { Budget } from "../budget";

export interface BudgetState {
  applyExtraDiscount: (budget: Budget) => number;
  approve: (budget: Budget) => void;
  unapprove: (budget: Budget) => void;
  finish: (budget: Budget) => void
}
