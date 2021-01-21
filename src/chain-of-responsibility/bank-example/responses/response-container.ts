import { Account } from "../account";
import { Request } from "../request";
import { CSVResponse } from "./csv-response";
import { XMLResponse } from "./xml-response";

export class ResponseContainer {
  public send(req: Request, account: Account): string {
    const xmlResponse = new XMLResponse();
    const csvResponse = new CSVResponse()
    xmlResponse.setNext(csvResponse)
    return xmlResponse.handle(req, account)
  }
}
