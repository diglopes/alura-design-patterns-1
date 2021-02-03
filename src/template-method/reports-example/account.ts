export class Account {
  constructor(
    public holder: string,
    public bankAgency: string,
    public accountNumber: string,
    private balance: number = 0
  ) {}

  public getBalance(): number {
    return this.balance;
  }

  public setBalance(value: number): boolean {
    if (value > 0) {
      this.balance = value;
      return true;
    }
    return false;
  }
}
