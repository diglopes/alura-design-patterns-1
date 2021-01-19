import { Budget } from "./budget";
import { ItemsBasedDiscount } from "./discounts/items-based-discount";
import { ValueBasedDiscount } from "./discounts/value-based-discount";


export class DiscountAppliance {
    public applyDiscount(budget: Budget): number {

        // 10% OFF
        const firstDiscount = new ItemsBasedDiscount()

        // 7% OFF
        const secondDiscount = new ValueBasedDiscount()

        firstDiscount.setNext(secondDiscount)
        
        return firstDiscount.execute(budget)
    }
}