import { Budget } from "../budget";
import { Discount } from "./protocols/discount";

export class ItemsBasedDiscount implements Discount {
  next: Discount;
  readonly discountRate = 0.1;
  constructor(private itemsRequiredToDiscount: number = 5) {}

  public execute(budget: Budget): number {
    if (budget.itemsAmount > this.itemsRequiredToDiscount) {
      return budget.totalPrice * this.discountRate;
    } else if (this.next) {
      return this.next.execute(budget);
    } else {
      return 0;
    }
  }

  public setNext(next: Discount): void {
    this.next = next;
  }
}
