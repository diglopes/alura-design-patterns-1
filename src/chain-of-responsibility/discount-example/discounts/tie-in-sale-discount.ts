import { Budget, Item } from "../budget";
import { BaseDiscount } from "./base-discount";

export class TieInSaleDiscount extends BaseDiscount {
  readonly discountRate = 0.05;
  constructor(private itemsNeeded: string[] = []) {
    super();
  }

  public execute(budget: Budget): number {
    const testResult = this.checkDiscountApplicability(budget.getItems());
    const callback = () => budget.totalPrice * this.discountRate;
    return this.runConditionalTest(testResult, budget, callback);
  }

  private checkDiscountApplicability(items: Item[]): boolean {
    return this.itemsNeeded.every((itemNeeded) => {
      return items.some(
        (item) =>
          item.name.toLocaleLowerCase() === itemNeeded.toLocaleLowerCase()
      );
    });
  }
}
