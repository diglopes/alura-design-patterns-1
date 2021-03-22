import { InvoiceDAO } from "./actions/invoice-dao";
import { Mailer } from "./actions/mailer";
import { Multiplier } from "./actions/multiplier";
import { InvoiceBuilder } from "./invoice-builder";
import { Item } from "./item";

const invoiceBuilder = new InvoiceBuilder();
invoiceBuilder.addActionListener(new Mailer())
invoiceBuilder.addActionListener(new InvoiceDAO())
invoiceBuilder.addActionListener(new Multiplier(2))
const invoice = invoiceBuilder
  .withCNPJ("123.456.789/0001-12")
  .withCompanyName("My Company")
  .withItem(new Item("Item 1", 1000))
  .withItem(new Item("Item 2", 500))
  .withItem(new Item("Item 3", 200))
  .withObs("Any observation")
  .withEmissionDate(new Date("03/11/2012"))
  .build()

console.log(invoice.getTaxes());
console.log(invoice);



