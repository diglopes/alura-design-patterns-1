export type AccountData = {
    holder: string
    balance: number
}

export type AccountDataReturn = {
    account: AccountData
}

export class Account {
    constructor(private data: AccountData) {}

    public getData(): AccountDataReturn {
        return {
            account: this.data
        }
    }
}