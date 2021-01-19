import { Budget } from "../budget";
import { Discount } from "./protocols/discount";

export type DiscountCallback = () => number

export class BaseDiscount implements Discount {
  next: Discount;

  public execute(budget: Budget): number { return 0 }

  public setNext(next: Discount): void {
    this.next = next;
  }

  protected runConditionalTest(test: boolean, budget: Budget, cb: DiscountCallback): number {
    if(test) {
      return cb()
    } else if (this.next) {
      return this.next.execute(budget);
    } else {
      return 0
    }
  }
}
