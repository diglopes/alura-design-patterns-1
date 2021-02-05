import { Account } from "./account";
import { CurrentMonthFilter } from "./filters/current-month";
import { LittleMoneyFilter } from "./filters/little-money";
import { MuchMoneyFilter } from "./filters/much-money";

const acc1 = new Account(80, new Date(2020, 8, 20).toISOString())
const acc2 = new Account(35000, new Date().toISOString())
const acc3 = new Account(28000, new Date(2017, 5, 10).toISOString())
const acc4 = new Account(1000000, new Date(2007, 5, 10).toISOString())
const acc5 = new Account(575000, new Date(2007, 8, 10).toISOString())
const acc6 = new Account(15000, new Date(2019, 1, 20).toISOString())

const accounts = [acc1, acc2, acc3, acc4, acc5, acc6]

const filters = new LittleMoneyFilter(new MuchMoneyFilter(new CurrentMonthFilter()))
console.log(filters.filter(accounts));
