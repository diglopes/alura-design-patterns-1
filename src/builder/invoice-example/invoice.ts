import { Item } from "./item";

export class Invoice {
    constructor(
        private companyName: string,
        private cnpj: string,
        private emissionDate: Date,
        private grossAmount: number,
        private taxes: number,
        private items: Item[] = [],
        private obs: string
    ) {}

    public getTaxes(): number {
        return this.taxes
    }
}