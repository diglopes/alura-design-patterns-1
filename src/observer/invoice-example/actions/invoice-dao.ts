import { Invoice } from "../invoice";
import { Action } from "./protocols/action";

export class InvoiceDAO implements Action {
    public exec(invoice: Invoice): void {
        console.log("ACTION::","Persisted on database")
    }
}