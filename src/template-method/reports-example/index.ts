import { Account } from "./account";
import { ComplexReport } from "./reports/complex-report";
import { SimpleReport } from "./reports/simple-report";

{
    const acc1 = new Account("Felipe Carlos Eduardo Caio Barros", "710", "79621-230")
    const acc2 = new Account("Joaquim Kauê Eduardo Moraes", "970", "69920-064")
    const acc3 = new Account("André Kevin Vicente Monteiro", "711", "59612-061")
    const accounts = [acc1, acc2, acc3]
    const simpleReport = new SimpleReport()
    const complexReport = new ComplexReport()
    const r1 = simpleReport.print(accounts)
    const r2 = complexReport.print(accounts)
    console.log(r1);
    console.log("\n\n");
    console.log(r2);    
}