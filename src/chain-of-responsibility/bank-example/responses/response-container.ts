import { Account } from "../account";
import { Request } from "../request";
import { Response } from "./protocols/response";
import { BaseResponse } from "./base-response";

export class ResponseContainer {
  private firstChainLink: Response;

  constructor(private responses: Response[] = []) {
    this.setResponseChain();
  }

  public send(req: Request, account: Account): string {
    return this.firstChainLink.handle(req, account);
  }

  private setResponseChain(): void {
    const { responses, setNextResponse } = this;
    const baseResponse = new BaseResponse();
    responses.push(baseResponse);
    responses.forEach(setNextResponse.bind(this));
    const firstChainLinkIndex = 0;
    this.firstChainLink = responses[firstChainLinkIndex];
  }

  private setNextResponse(response: Response, index: number) {
    if (index < this.responses.length) {
      const nextResponseIndex = index + 1;
      response.setNext(this.responses[nextResponseIndex]);
    }
  }
}
