import { Budget } from "./budget";
import { ItemsBasedDiscount } from "./discounts/items-based-discount";
import { TieInSaleDiscount } from "./discounts/tie-in-sale-discount";
import { ValueBasedDiscount } from "./discounts/value-based-discount";


export class DiscountAppliance {
    public applyDiscount(budget: Budget): number {

        // 10% OFF
        const firstDiscount = new ItemsBasedDiscount()

        // 7% OFF
        const secondDiscount = new ValueBasedDiscount()

        // 5% OFF
        const thirdDiscount = new TieInSaleDiscount(['pen', 'pencil'])

        firstDiscount.setNext(secondDiscount)
        secondDiscount.setNext(thirdDiscount)
        
        return firstDiscount.execute(budget)
    }
}