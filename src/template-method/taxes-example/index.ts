import { Budget } from "./budget";
import { ICPPTax } from "./taxes/icpp-tax";

const budget = new Budget()
const icppTax = new ICPPTax()

// Minimum tax
budget.addItem({ name: "Mouse Gamer",  price: 300 })
const minTax = icppTax.compute(budget)
console.log("Min tax: $", minTax.toFixed(2));

// Maximum tax
budget.addItem({ name: "Keyboard Gamer", price: 300 })
const maxTax = icppTax.compute(budget)
console.log("Max tax: $", maxTax.toFixed(2));