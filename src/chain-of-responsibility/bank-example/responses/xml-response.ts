import X2JS from "x2js";
import { Account } from "../account";
import { FORMAT, Request } from "../request";
import { BaseResponse } from "./base-response";

export class XMLResponse extends BaseResponse {
    constructor() {
        super()
    }

    public handle(req: Request, account: Account): string {
        if(req.getFormat() === FORMAT.xml) {            
            return this.serialize(account.getData())
        } else {
            return this.next.handle(req, account)
        }
    }

    private serialize(data: any): string {
        const serializer = new X2JS()
        const xml = serializer.js2xml(data)
        return xml
    }
}