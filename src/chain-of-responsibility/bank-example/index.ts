import { log } from "console";
import { Account } from "./account";
import { FORMAT, Request } from "./request";
import { ResponseContainer } from "./responses/response-container";
import { CSVResponse } from "./responses/csv-response";
import { PercentageResponse } from "./responses/percentage-response";
import { XMLResponse } from "./responses/xml-response";

const account = new Account({ holder: "John Doe", balance: 10000 });
const xmlResponse = new XMLResponse();
const csvResponse = new CSVResponse();
const percentageResponse = new PercentageResponse();
const responseContainer = new ResponseContainer([
  xmlResponse,
  csvResponse,
  percentageResponse,
]);

// XML
const requestXML = new Request(FORMAT.xml);
const responseXML = responseContainer.send(requestXML, account);
console.log("XML: ", responseXML);

// CSV
const requestCSV = new Request(FORMAT.csv);
const responseCSV = responseContainer.send(requestCSV, account);
console.log("CSV: ", responseCSV);

// Percentage
const requestPercentage = new Request(FORMAT.percentage);
const responsePercentage = responseContainer.send(requestPercentage, account);
console.log("Percentage: ", responsePercentage);
