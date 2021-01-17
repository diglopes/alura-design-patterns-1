import { Tax } from "./protocols/tax";

export class ICMS implements Tax {
  public compute(value: number): number {
    return value * 0.1
  }
}
