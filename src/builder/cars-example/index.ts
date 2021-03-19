import { CarBuilder } from "./builders/CarBuilder";
import { CarManualBuilder } from "./builders/ManualBuilder";
import { Director } from "./director/Director";

const director = new Director()
const builder = new CarBuilder()

const manualBuilder = new CarManualBuilder()

director.constructSportCar(builder)
director.constructSportCar(manualBuilder)
const sportCar = builder.build()
const sportCarManual = manualBuilder.build()
console.log(sportCar);
console.log(sportCarManual);


