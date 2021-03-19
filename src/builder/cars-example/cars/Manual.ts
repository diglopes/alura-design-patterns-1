import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";
import { CarType } from "./CarType";

export class Manual {
    constructor(
    private carType: CarType,
    private seats: number,
    private engine: Engine,
    private transmission: Transmission,
    private tripComputer: TripComputer,
    private gpsNavigator: GPSNavigator
    ){}

    public print(): string {
        let info =
        `Type of car: ${this.carType} 
        Count of seats: ${this.seats}
        Engine: volume - ${this.engine.getVolume}; mileage - ${this.engine.getMileage}
        Transmission: ${this.transmission}`;

        if (this.tripComputer != null) {
            info += "Trip Computer: Functional" + "\n";
        } else {
            info += "Trip Computer: N/A" + "\n";
        }
        if (this.gpsNavigator != null) {
            info += "GPS Navigator: Functional" + "\n";
        } else {
            info += "GPS Navigator: N/A" + "\n";
        }
        return info;
    }
}