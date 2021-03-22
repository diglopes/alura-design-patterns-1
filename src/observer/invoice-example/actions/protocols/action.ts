import { Invoice } from "../../invoice";

export interface Action {
    exec: (invoice: Invoice) => void
}