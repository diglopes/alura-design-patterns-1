import { Account } from "./account";
import { FORMAT, Request } from "./request";
import { ResponseContainer } from "./responses/response-container";

const account = new Account({ holder: "John Doe", balance: 10000 });
const responseContainer = new ResponseContainer()

// XML
const request = new Request(FORMAT.xml)
const response = responseContainer.send(request, account)

console.log(response);

