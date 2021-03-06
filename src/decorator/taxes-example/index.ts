import { Budget } from "./budget";
import { HighTax } from "./taxes/highTax";
import { ICCC } from "./taxes/iccc";
import { ICMS } from "./taxes/icms";
import { ISS } from "./taxes/iss";

const budget = new Budget(1000)
const icmsAndIccc = new ICCC(new ICMS())
console.log(icmsAndIccc.compute(budget.value));

const allTaxes = new ISS(new ICCC(new ICMS()))
console.log(allTaxes.compute(budget.value));

const highTax = new HighTax(new ICCC())
console.log(highTax.compute(budget.value));

