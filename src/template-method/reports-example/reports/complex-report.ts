import { Account } from "../account";
import { ReportTemplate } from "./report-template";

export class ComplexReport extends ReportTemplate{
  protected getHeader(): string {
    return `Amazing Money Bank\n2130  Johnny Lane, New Berlin\n555-2368`;
  }

  protected getBody(accounts: Account[]): string {
    return accounts.reduce(this.formatBody, "");
  }

  private formatBody(acc: string, cur: Account) {
    return `${acc}${cur.holder} - ${cur.bankAgency} - ${cur.accountNumber} -${cur.getBalance()}\n`;
  }

  protected getFooter(): string {
    return `contact@amazingmoneybank.com - ${this.getCurrentDate()}`;
  }

  private getCurrentDate() {
    return new Date().toLocaleDateString()
  }
}
