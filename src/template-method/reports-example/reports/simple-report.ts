import { Account } from "../account";
import { ReportTemplate } from "./report-template";

export class SimpleReport extends ReportTemplate{
  protected getHeader(): string {
    return `Amazing Money Bank`;
  }

  protected getBody(accounts: Account[]): string {
    return accounts.reduce(this.formatBody, "");
  }

  private formatBody(acc: string, cur: Account) {
    return `${acc}${cur.holder} - ${cur.getBalance()}\n`;
  }

  protected getFooter(): string {
    return `555-2368`;
  }
}
