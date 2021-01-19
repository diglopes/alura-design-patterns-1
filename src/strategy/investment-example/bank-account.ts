export type DepositReceipt = {
  balanceBeforeDeposit: number;
  depositValue: number;
  currentBalance: number;
};

export type Balance = {
    value: number
    formatedValue: string
}

export class BankAccount {
  constructor(private balance: number = 0) {}

  public deposit(value: number): DepositReceipt {
    if (!this.validateDepositValue(value)) {
      throw new Error("Deposit value is invalid");
    }
    const balanceBeforeDeposit = this.balance;
    this.balance += value;

    return {
      balanceBeforeDeposit,
      depositValue: value,
      currentBalance: this.balance,
    };
  }

  public checkBalance(): Balance {
    return {
      value: this.balance,
      formatedValue: `R$ ${this.balance.toFixed(2)}`,
    };
  }

  private validateDepositValue(value: number): boolean {
    if (!value || typeof value !== "number") return false;
    return true;
  }
}
