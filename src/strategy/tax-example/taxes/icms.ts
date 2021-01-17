import { Tax } from "./protocols/tax";

export class ICMS implements Tax {
  readonly taxPercentage = 0.1;

  public compute(value: number): number {
    return value * this.taxPercentage;
  }
}
