import { BankAccount } from "./bank-account";
import { Investor } from "./investor";
import { ConvervativeInvestment } from "./investments/conservative";

const myAccount = new BankAccount();
myAccount.deposit(1000);

const conservativeInvestment = new ConvervativeInvestment();
const conservativeInvestor = new Investor(conservativeInvestment);

conservativeInvestor.invest(myAccount)
console.log(myAccount.checkBalance());

