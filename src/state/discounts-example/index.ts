import { Budget } from "./budget";

const budget = new Budget(1000)
budget.approve()
budget.applyExtraDiscount()
budget.applyExtraDiscount()
console.log(budget.getValue());
budget.finish()
