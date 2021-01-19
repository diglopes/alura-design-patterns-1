import { BankAccount } from "./bank-account";
import { Investor } from "./investor";
import { ConvervativeInvestment } from "./investments/conservative";
import { ModerateInvestment } from "./investments/moderate";

const myAccount = new BankAccount();
myAccount.deposit(1000);

const conservativeInvestment = new ConvervativeInvestment();
const moderateInvestment = new ModerateInvestment()
const conservativeInvestor = new Investor(conservativeInvestment);
const moderateInvestor = new Investor(moderateInvestment)

conservativeInvestor.invest(myAccount)
console.log(myAccount.checkBalance());

moderateInvestor.invest(myAccount)
console.log(myAccount.checkBalance())