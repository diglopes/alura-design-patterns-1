import { Account } from "../account";

export interface AccountState {
    withdraw: (account: Account, value: number) => void
    deposit: (account: Account, value: number) => void
    positivate: (account: Account) => void
    negativate:  (account: Account) => void
}