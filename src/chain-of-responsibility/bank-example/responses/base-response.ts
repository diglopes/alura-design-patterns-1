import { Request } from "../request";
import { Response } from "./protocols/response";
import { Account } from "../account"

export class BaseResponse implements Response {
  protected next: Response

  public handle(req: Request, account: Account): string {
    return JSON.stringify(account.getData())
  }

  public setNext(response: Response): void {
    this.next = response;
  }
}
