import { Invoice } from "../invoice";
import { Action } from "./protocols/action";

export class Multiplier implements Action {
    constructor(private factor: number = 1) {}

    public exec(invoice: Invoice) {
        console.log("ACTION::", `The value multiplied is ${invoice.getTaxes() * this.factor}`)
    }
}