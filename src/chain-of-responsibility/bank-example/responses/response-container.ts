import { Account } from "../account";
import { Request } from "../request";
import { BaseResponse } from "./base-response";
import { CSVResponse } from "./csv-response";
import { XMLResponse } from "./xml-response";

export class ResponseContainer {
  public send(req: Request, account: Account): string {
    const xmlResponse = new XMLResponse();
    const csvResponse = new CSVResponse()
    const baseResponse = new BaseResponse()

    xmlResponse.setNext(csvResponse)
    csvResponse.setNext(baseResponse)
    
    return xmlResponse.handle(req, account)
  }
}
