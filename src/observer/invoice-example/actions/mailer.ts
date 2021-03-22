import { Invoice } from "../invoice";
import { Action } from "./protocols/action";

export class Mailer implements Action {
    public exec(invoice: Invoice): void {
        console.log("ACTION::","Email has been sent")
    }
}