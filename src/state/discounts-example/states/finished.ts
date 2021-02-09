import { Budget } from "../budget";
import { BudgetState } from "./budget-state";

export class FinishedState implements BudgetState {

    public approve(): BudgetState {
        throw new Error("Finished budgets cant get approved");
      }
    
      public unapprove(): BudgetState {
        throw new Error("Finished budgets cant get unapproved");
      }
    
      finish(): BudgetState {
        throw new Error("Already on finished state");
      }

    public applyExtraDiscount(budget: Budget): number {
        throw new Error('Finished budgets receive no discounts!')
    }
}