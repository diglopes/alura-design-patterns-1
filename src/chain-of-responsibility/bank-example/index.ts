import { log } from "console";
import { Account } from "./account";
import { FORMAT, Request } from "./request";
import { ResponseContainer } from "./responses/response-container";

const account = new Account({ holder: "John Doe", balance: 10000 });
const responseContainer = new ResponseContainer()

// XML
const requestXML = new Request(FORMAT.xml)
const responseXML = responseContainer.send(requestXML, account)
console.log("XML: ", responseXML);

// CSV
const requestCSV = new Request(FORMAT.csv)
const responseCSV = responseContainer.send(requestCSV, account)
console.log("CSV: ", responseCSV);





