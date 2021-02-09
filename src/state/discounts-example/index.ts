import { Budget } from "./budget";

const budget = new Budget(1000)
console.log(budget.applyExtraDiscount());
budget.approve()
console.log(budget.applyExtraDiscount());
budget.finish()
console.log(budget.applyExtraDiscount());
