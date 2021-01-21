import { Budget } from "./budget";
import { ICPPTax } from "./taxes/icpp-tax";
import { IKCVTax } from "./taxes/ikcv-tax";

const budget = new Budget()
const icppTax = new ICPPTax()
const ikcvTax = new IKCVTax()

// Minimum tax
budget.addItem({ name: "Mouse Gamer",  price: 100 })
const minTaxICPP = icppTax.compute(budget)
const mintaxIKCV = ikcvTax.compute(budget)
console.log("Min tax ICPP: $", minTaxICPP.toFixed(2));
console.log("Min tax IKCV: $", mintaxIKCV.toFixed(2))

// Maximum tax
budget.addItem({ name: "Keyboard Gamer", price: 500 })
const maxTaxICPP = icppTax.compute(budget)
const maxTaxIKCV = ikcvTax.compute(budget)
console.log("Max tax ICPP: $", maxTaxICPP.toFixed(2));
console.log("Max tax IKCV: $", maxTaxIKCV.toFixed(2));
