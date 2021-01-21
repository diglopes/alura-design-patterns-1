import { Budget } from "../budget";
import { Tax } from "./protocols/tax";

export abstract class ConditionalTaxTemplate implements Tax {
  protected abstract canChargeMaxTax(budget: Budget): boolean;
  protected abstract maxTaxing(value: number): number;
  protected abstract minTaxing(value: number): number;

  public compute(budget: Budget): number {
    if (this.canChargeMaxTax(budget)) {
      return this.maxTaxing(budget.totalPrice);
    } else {
      return this.minTaxing(budget.totalPrice);
    }
  }
}
