import { Budget } from "./budget";
import { TaxCalculator } from "./tax-calculator";
import { ICMS } from "./taxes/icms";
import { ISS } from "./taxes/iss";
import { ICCC } from "./taxes/iccc";


(() => {
  const BUDGET_VALUE = 1000;
  const HIGH_BUDGET_VALUE = 4000
  const MEDIUM_BUDGET_VALUE = 2500
  const LOW_BUDGET_VALUE = 500

  const icms = new ICMS();
  const iss = new ISS();
  const iccc = new ICCC()
  const budget = new Budget(BUDGET_VALUE);
  const taxCalculator = new TaxCalculator();
  const icmsTaxValue = taxCalculator.calculate(budget, icms);
  const isssTaxValue = taxCalculator.calculate(budget, iss);

  // ICCC calculations
  const highBudget = new Budget(HIGH_BUDGET_VALUE)
  const midBudget = new Budget(MEDIUM_BUDGET_VALUE)
  const lowBudget = new Budget(LOW_BUDGET_VALUE)
  const icccHighTax = taxCalculator.calculate(highBudget, iccc) 
  const icccMidTax = taxCalculator.calculate(midBudget, iccc) 
  const icccLowTax = taxCalculator.calculate(lowBudget, iccc) 

  console.log("Budget = ", budget.value);
  console.log("ICMS = ", icmsTaxValue);
  console.log("ISS = ", isssTaxValue);
  console.log("ICCC (8% + 30) = ", icccHighTax)
  console.log("ICCC (7% + 50) = ", icccMidTax)
  console.log("ICCC (5% + 50) = ", icccLowTax)
})();
