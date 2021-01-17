import { Tax } from "./protocols/tax";

export class ISS implements Tax {
    public compute(value: number): number {
        return value * 0.06
    }
}