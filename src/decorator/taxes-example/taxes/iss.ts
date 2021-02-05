import { Tax } from "./protocols/tax";
import { BaseTax } from "./tax";

export class ISS extends BaseTax {
    constructor(compositeTax?: Tax) {
        super(compositeTax)
      }

    public compute(value: number): number {
        return value * 0.06 + this.computeCompositeTax(value)
    }
}