export type Item = {
  name: string;
  price: number;
};

export class Budget {
  private items: Item[] = [];

  public addItem(item: Item): boolean {
    this.items.push(item);
    return true;
  }

  public get totalPrice() {
    const sumPrices = (price, cur) => price + cur.price;
    return this.items.reduce(sumPrices, 0);
  }

  public get itemsAmount() {
    return this.items.length;
  }

  public getItems(): Item[] {
    return this.items
  }
}
