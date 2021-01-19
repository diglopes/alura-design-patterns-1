import { Budget } from "../budget";
import { BaseDiscount } from "./base-discount";

export class ItemsBasedDiscount extends BaseDiscount {
  readonly discountRate = 0.05;
  
  constructor(private itemsRequiredToDiscount: number = 5) {
    super()
  }

  public execute(budget: Budget): number {    
    const testResult = budget.itemsAmount > this.itemsRequiredToDiscount
    const callback = () => budget.totalPrice * this.discountRate;
    return this.runConditionalTest(testResult, budget, callback)
  }
}
