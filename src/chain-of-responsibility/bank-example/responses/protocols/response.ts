import { Request } from "../../request";
import { Account } from "../../account"

export interface Response {
  handle: (req: Request, account: Account) => string;
  setNext: (response: Response) => void;
}
