import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";
import { CarType } from "./CarType";

export class Car {
    constructor(
        private carType: CarType,
        private seats: number,
        private engine: Engine,
        private transmission: Transmission,
        private tripComputer: TripComputer,
        private gpsNavigator: GPSNavigator,
        private fuel = 0
    ){
        if (this.tripComputer != null) {
            this.tripComputer.setCar(this);
        }
    }

    public getCarType(): CarType {
        return this.carType;
    }

    public getFuel(): number {
        return this.fuel;
    }

    public setFuel(fuel: number): void {
        this.fuel = fuel;
    }

    public getSeats(): number {
        return this.seats;
    }

    public getEngine(): Engine {
        return this.engine;
    }

    public getTransmission(): Transmission {
        return this.transmission;
    }

    public getTripComputer(): TripComputer {
        return this.tripComputer;
    }

    public getGpsNavigator(): GPSNavigator {
        return this.gpsNavigator;
    }
}