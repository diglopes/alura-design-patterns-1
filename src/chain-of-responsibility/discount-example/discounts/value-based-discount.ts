import { Budget } from "../budget";
import { BaseDiscount } from "./base-discount";

export class ValueBasedDiscount extends BaseDiscount {
  readonly discountRate = 0.07;
  constructor(private minimumValueToDiscount: number = 300) {
    super()
  }

  public execute(budget: Budget): number {
    const testResult = budget.totalPrice > this.minimumValueToDiscount
    const callback = () => budget.totalPrice * this.discountRate;
    return this.runConditionalTest(testResult, budget, callback)
  }
}
