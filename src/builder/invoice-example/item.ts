export class Item {
    constructor(private name: string, private value: number) {}

    public getName(): string {
        return this.name
    }

    public getValue(): number {
        return this.value
    }
}