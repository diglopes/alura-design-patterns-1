import { Budget } from "../budget";
import { ConditionalTaxTemplate } from "./conditional-tax-template";

export class IKCVTax extends ConditionalTaxTemplate {
  protected canChargeMaxTax(budget: Budget): boolean {
    return (
      budget.totalPrice > 500 &&
      budget.getItems().some((item) => item.price > 100)
    );
  }

  protected maxTaxing(value: number): number {
    return value * 0.1;
  }

  protected minTaxing(value: number): number {
    return value * 0.06;
  }
}
