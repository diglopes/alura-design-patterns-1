import { Budget } from "../../budget";

export interface Discount {
  next: Discount;
  readonly discountRate: number;
  execute: (budget: Budget) => number;
  setNext: (discount: Discount) => void;
}
