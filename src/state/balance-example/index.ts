import { Account } from "./account";

const account = new Account(1000)
account.withdraw(100)
console.log(account.getBalance());
account.deposit(200)
console.log(account.getBalance());
