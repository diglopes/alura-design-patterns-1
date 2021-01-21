import { Budget } from "../budget";
import { ConditionalTaxTemplate } from "./conditional-tax-template";

export class ICPPTax extends ConditionalTaxTemplate {

    protected canChargeMaxTax(budget: Budget): boolean {
        return budget.totalPrice > 500
    }

    protected maxTaxing(value: number): number {
        return value * 0.07
    }

    protected minTaxing(value: number): number {
        return value * 0.05
    }
}