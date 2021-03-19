import { Car } from "../cars/Car";

export class TripComputer {
    private car: Car;

    public setCar(car: Car): void {
        this.car = car;
    }
    
    public showFuelLevel(): void {
        console.log("Fuel level: " + this.car.getFuel());
    }

    public showStatus(): void {
        if (this.car.getEngine().isStarted()) {
            console.log("Car is started");
        } else {
            console.log("Car isn't started");
        }
    }
}