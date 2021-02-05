import { Tax } from "./protocols/tax";

export abstract class BaseTax implements Tax {
    private compositeTax: Tax
    constructor(compositeTax?: Tax) {
        this.compositeTax = compositeTax
      }

    protected computeCompositeTax (value: number): number {
        if(this.compositeTax){
            return this.compositeTax.compute(value)
        }
        return 0
    }

    public abstract compute(value: number): number
}