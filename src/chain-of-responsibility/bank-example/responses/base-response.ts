import { Request } from "../request";
import { Response } from "./protocols/response";
import { Account } from "../account"

export abstract class BaseResponse implements Response {
  protected next: Response

  public handle(req: Request, account: Account): string {
    return "";
  }

  public setNext(response: Response): void {
    this.next = response;
  }
}
