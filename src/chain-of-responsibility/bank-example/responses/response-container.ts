import { Account } from "../account";
import { Request } from "../request";
import { XMLResponse } from "./xml-response";

export class ResponseContainer {
  public send(req: Request, account: Account): string {
    const xmlResponse = new XMLResponse();
    return xmlResponse.handle(req, account)
  }
}
