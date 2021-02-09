import { Budget } from "../budget";
import { BudgetState } from "./budget-state";

export class FinishedState implements BudgetState {

    public approve(budget: Budget): void {
        throw new Error("Finished budgets cant get approved");
      }
    
      public unapprove(budget: Budget): void {
        throw new Error("Finished budgets cant get unapproved");
      }
    
      finish(budget: Budget): void {
        throw new Error("Already on finished state");
      }

    public applyExtraDiscount(budget: Budget): number {
        throw new Error('Finished budgets receive no discounts!')
    }
}