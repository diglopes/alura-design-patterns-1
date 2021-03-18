import { InvoiceBuilder } from "./invoice-builder";
import { Item } from "./item";

const invoiceBuilder = new InvoiceBuilder();

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



