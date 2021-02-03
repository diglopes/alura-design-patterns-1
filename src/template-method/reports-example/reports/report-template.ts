import { Account } from "../account";
import { Report } from "./protocols/report";

export abstract class ReportTemplate implements Report {
  protected abstract getHeader(): string;
  protected abstract getBody(accounts: Account[]): string;
  protected abstract getFooter(): string;

  public print(accounts: Account[]): string {
    return `${this.getHeader()}\n\n${this.getBody(accounts)}\n${this.getFooter()}`;
  }
}
