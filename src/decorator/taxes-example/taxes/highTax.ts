import { Budget } from "../budget";
import { Tax } from "./protocols/tax";
import { BaseTax } from "./tax";

export class HighTax extends BaseTax {
    constructor(compositeTax?: Tax) {
        super(compositeTax)
    }

    public compute(value: number): number {
        return 0.2 * value + this.computeCompositeTax(value)
    }
}