import { Account, AccountDataReturn } from "../account";
import { FORMAT, Request } from "../request";
import { BaseResponse } from "./base-response";
import { Parser } from "json2csv";

export class PercentageResponse extends BaseResponse {
  public handle(req: Request, account: Account): string {
    if (req.getFormat() === FORMAT.percentage) {
      return this.serialize(account.getData());
    } else {
      return this.next.handle(req, account);
    }
  }

  private serialize({ account }: AccountDataReturn): string {
    const options = {
      fields: Object.keys(account),
      delimiter: "%",
      quote: "'",
    };
    const serializer = new Parser(options);
    return serializer.parse(account);
  }
}
