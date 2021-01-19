import { Budget } from "../budget";
import { Discount } from "./protocols/discount";

export class ValueBasedDiscount implements Discount {
  next: Discount;
  readonly discountRate = 0.07;
  constructor(private minimumValueToDiscount: number = 300) {}

  public execute(budget: Budget): number {
    
    if (budget.totalPrice > this.minimumValueToDiscount) {
      return budget.totalPrice * this.discountRate;
    } else if (this.next) {
      return this.next.execute(budget);
    } else {
      return 0
    }
  }

  public setNext(next: Discount): void {
    this.next = next;
  }
}
