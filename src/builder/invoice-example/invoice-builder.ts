import { Invoice } from "./invoice";
import { Item } from "./item";

export class InvoiceBuilder {
  private companyName: string;
  private cnpj: string;
  private emissionDate: Date = this.currentDate();
  private grossAmount: number = 0;
  private taxes: number = 0;
  private items: Item[] = [];
  private obs: string;
  
  public withCompanyName(companyName: string): InvoiceBuilder {
    this.companyName = companyName;
    return this;
  }

  public withCNPJ(cnpj: string): InvoiceBuilder {
    this.cnpj = cnpj;
    return this;
  }

  public withItem(item: Item): InvoiceBuilder {
    this.items.push(item);
    this.grossAmount += item.getValue();
    this.taxes += item.getValue() * 0.05;
    return this;
  }

  public withObs(obs: string): InvoiceBuilder {
    this.obs = obs;
    return this;
  }

  public withEmissionDate(emissionDate: Date): InvoiceBuilder {
    this.emissionDate = emissionDate;
    return this;
  }

  private currentDate(): Date {
    return new Date();
  }

  public build(): Invoice {
    return new Invoice(
      this.companyName,
      this.cnpj,
      this.emissionDate,
      this.grossAmount,
      this.taxes,
      this.items,
      this.obs
    );
  }
}
