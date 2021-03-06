import { Tax } from "./protocols/tax";
import { BaseTax } from "./tax";

export class ICCC extends BaseTax {
  readonly taxPercentage = 0.05;
  readonly baseValue = 50;
  constructor(compositeTax?: Tax) {
    super(compositeTax)
  }

  public compute (value: number): number {
    let tax = this.taxPercentage;
    let baseValue = this.baseValue;
    
    if (value > 3000) {
      tax = 0.08;
      baseValue = 30;
    }
    if (value >= 1000 && value <= 3000) {
      tax = 0.07;
    }
    return value * tax + baseValue + this.computeCompositeTax(value);
  }
}
