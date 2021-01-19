import { Budget } from "./budget";

const budget = new Budget()
budget.addItem({ name: "Playstation 5", price: 400 })
budget.addItem({ name: "Spider-Man - Miles Morales", price: 40 })
console.log(budget.totalPrice);
console.log(budget.itemsAmount);

