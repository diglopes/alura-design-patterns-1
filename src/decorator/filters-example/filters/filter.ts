import { Account } from "../account";

export abstract class Filter {
  private compositeFilter: Filter;

  constructor(filter?: Filter) {
    this.compositeFilter = filter;
  }

  public abstract filter(accounts: Account[]): Account[];

  protected compose(accounts: Account[]): Account[] {
    return this.compositeFilter
      ? this.compositeFilter.filter(accounts)
      : accounts;
  }
}
