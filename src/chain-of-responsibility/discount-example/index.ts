import { Budget } from "./budget";
import { DiscountAppliance } from './discount-appliance'

const budget1 = new Budget()
const budget2 = new Budget()
const budget3 = new Budget()
const discountAppliance = new DiscountAppliance()

// Discount by price ($ 500 +)
budget1.addItem({ name: "Playstation 5", price: 600 })
budget1.addItem({ name: "Spider-Man - Miles Morales", price: 40 })
const discountValue1 = discountAppliance.applyDiscount(budget1)
const finalValue1 = budget1.totalPrice - discountValue1

console.log('Items: ', budget1.itemsAmount);
console.log('Total: $', budget1.totalPrice.toFixed(2));
console.log('Discount: $', discountValue1.toFixed(2))
console.log('Final value: $', finalValue1.toFixed(2));
console.log('');

// Discount by items amount (6 items +)
budget2.addItem({ name: "Blue Pen", price: 5 })
budget2.addItem({ name: "Pencil", price: 3 })
budget2.addItem({ name: "Eraser", price: 1 })
budget2.addItem({ name: "Red Pen", price: 5 })
budget2.addItem({ name: "Notebook", price: 8 })
budget2.addItem({ name: "Clips", price: 1 })
const discountValue2 = discountAppliance.applyDiscount(budget2)
const finalValue2 = budget2.totalPrice - discountValue2

console.log('Items: ', budget2.itemsAmount);
console.log('Total: $', budget2.totalPrice.toFixed(2));
console.log('Discount: $', discountValue2.toFixed(2))
console.log('Final value: $', finalValue2.toFixed(2));
console.log('');

// No discount
budget3.addItem({ name: "Flash disk 16Gb", price: 20 })
const discountValue3 = discountAppliance.applyDiscount(budget3)
const finalValue3 = budget3.totalPrice - discountValue3
console.log('Items: ', budget3.itemsAmount);
console.log('Total: $', budget3.totalPrice.toFixed(2));
console.log('Discount: $', discountValue3.toFixed(2))
console.log('Final value: $', finalValue3.toFixed(2));
