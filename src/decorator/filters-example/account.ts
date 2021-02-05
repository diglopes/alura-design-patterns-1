export class Account {
    constructor(
        private balance: number = 0,
        public createdAt: string = new Date().toISOString()
    ) {}

    public getBalance(): number {
        return this.balance
    }
}