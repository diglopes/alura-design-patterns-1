import { Budget } from "./budget";
import { ICPPTax } from "./taxes/icpp-tax";
import { IKCVTax } from "./taxes/ikcv-tax";
import { CurrencyUtil } from "./utils/currency";

const icppTax = new ICPPTax();
const ikcvTax = new IKCVTax();

{
  console.log("========= ICPP =========");
  const budget = new Budget();
  budget.addItem({ name: "Mouse Gamer", price: 100 });
  const minTax = icppTax.compute(budget);
  budget.addItem({ name: "Keyboard Gamer", price: 500 });
  const maxTax = icppTax.compute(budget);
  console.log("Min tax:", CurrencyUtil.toBRLFormat(minTax));
  console.log("Max tax:", CurrencyUtil.toBRLFormat(maxTax));
}

{
  console.log("========= IKCV =========");
  const budget = new Budget();
  budget.addItem({ name: "Mousepad", price: 100 });
  const minTax = ikcvTax.compute(budget);
  budget.addItem({ name: "Monitor", price: 800 });
  const maxTax = ikcvTax.compute(budget);
  console.log("Min tax IKCV:", CurrencyUtil.toBRLFormat(minTax));
  console.log("Max tax IKCV:", CurrencyUtil.toBRLFormat(maxTax));
}
