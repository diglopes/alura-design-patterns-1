import { Account } from "../../account";

export interface Report {
    print: (account:  Account[]) => void
}