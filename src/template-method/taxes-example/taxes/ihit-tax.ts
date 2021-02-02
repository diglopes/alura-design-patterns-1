import { Budget, Item } from "../budget";
import { ConditionalTaxTemplate } from "./conditional-tax-template";

export class IHITTAX extends ConditionalTaxTemplate {
  protected itemsAmount: number;

  protected canChargeMaxTax(budget: Budget): boolean {
    const items = budget.getItems();
    this.itemsAmount = items.length;
    return this.hasTwoOfSameItem(items)
  }

  private hasTwoOfSameItem(items: Item[]) {
    return items.some((itemA, indexA) =>
      items.some(
        (itemB, indexB) =>
          itemB.name === itemA.name && indexA !== indexB
      )
    );
  }

  protected maxTaxing(value: number): number {
    return value * 0.13 + 100;
  }

  protected minTaxing(value: number): number {
    return 0.01 * this.itemsAmount * value;
  }
}
