import { Tax } from "./protocols/tax";
import { BaseTax } from "./tax";

export class ICMS extends BaseTax {
  constructor(compositeTax?: Tax) {
    super(compositeTax)
  }
  
  public compute(value: number): number {
    return value * 0.1 + this.computeCompositeTax(value)
  }
}
