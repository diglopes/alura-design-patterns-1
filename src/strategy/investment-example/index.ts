import { BankAccount } from "./bank-account";
import { Investor } from "./investor";
import { ConvervativeInvestment } from "./investments/conservative";
import { ModerateInvestment } from "./investments/moderate";
import { BoldInvestment } from "./investments/bold";

const myAccount = new BankAccount();
myAccount.deposit(1000);

const conservativeInvestment = new ConvervativeInvestment();
const moderateInvestment = new ModerateInvestment()
const boldInvestment = new BoldInvestment()
const conservativeInvestor = new Investor(conservativeInvestment);
const moderateInvestor = new Investor(moderateInvestment)
const boldInvestor = new Investor(boldInvestment)

conservativeInvestor.invest(myAccount)
console.log(myAccount.checkBalance());

moderateInvestor.invest(myAccount)
console.log(myAccount.checkBalance())

boldInvestor.invest(myAccount)
console.log(myAccount.checkBalance())