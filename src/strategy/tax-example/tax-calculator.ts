import { Budget } from "./budget";
import { Tax } from "./taxes/protocols/tax";

/**
 * This class is responsible for calculate the tax for a given budget
 */
export class TaxCalculator {
  public calculate(budget: Budget, tax: Tax) {
    return tax.compute(budget.value);
  }
}
