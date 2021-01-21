import { Account, AccountDataReturn } from "../account";
import { BaseResponse } from "./base-response";
import { Parser } from 'json2csv'
import { FORMAT, Request } from "../request";

export class CSVResponse extends BaseResponse {
    constructor() {
        super()
    }

    public handle(req: Request, account: Account): string {        
        if(req.getFormat() === FORMAT.csv) {            
            return this.serialize(account.getData())
        } else {
            return this.next.handle(req, account)
        }
    }

    private serialize({ account }: AccountDataReturn) {
        const options = { fields: Object.keys(account) }
        const serializer = new Parser(options)
        return serializer.parse(account)
    }
}