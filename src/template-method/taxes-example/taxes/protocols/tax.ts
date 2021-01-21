import { Budget } from "../../budget";

export interface Tax {
  compute: (budget: Budget) => number;
}
