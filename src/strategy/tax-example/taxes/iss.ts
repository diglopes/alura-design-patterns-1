import { Tax } from "./protocols/tax";

export class ISS implements Tax {
    readonly taxPercentage = 0.06

    public compute(value: number): number {
        return value * this.taxPercentage
    }
}