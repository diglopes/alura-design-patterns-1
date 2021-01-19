import { Budget, Item } from "../budget";
import { Discount } from "./protocols/discount";

export class TieInSaleDiscount implements Discount {
  next: Discount;
  readonly discountRate = 0.05;
  constructor(private itemsNeeded: string[] = []) {}

  public execute(budget: Budget): number {
    if (this.checkDiscountApplicability(budget.getItems())) {
      return budget.totalPrice * this.discountRate;
    } else if (this.next) {
      return this.next.execute(budget);
    } else {
      return 0;
    }
  }

  public setNext(discount: Discount) {
    this.next = discount;
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
