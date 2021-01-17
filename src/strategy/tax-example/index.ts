import { Budget } from "./budget";
import { TaxCalculator } from "./tax-calculator";
import { ICMS } from "./taxes/icms";
import { ISS } from "./taxes/iss";

(() => {
  const BUDGET_VALUE = 1000;
  const budget = new Budget(BUDGET_VALUE);
  const icms = new ICMS();
  const iss = new ISS();
  const taxCalculator = new TaxCalculator();
  const icmsTaxValue = taxCalculator.calculate(budget, icms);
  const isssTaxValue = taxCalculator.calculate(budget, iss);

  console.log("Budget = ", budget.value);
  console.log("ICMS = ", icmsTaxValue);
  console.log("ISS = ", isssTaxValue);
})();
