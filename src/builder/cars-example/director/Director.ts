import { Builder } from "../builders/Builder";
import { CarType } from "../cars/CarType";
import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";

export class  Director {
    
    constructSportCar(builder: Builder) {
        builder.setCarType(CarType.SPORT_CAR)
        builder.setEngine(new Engine(0, 3.0))
        builder.setSeats(2)
        builder.setTransmission(Transmission.SEMI_AUTOMATIC)
        builder.setTripComputer(new TripComputer())
        builder.setGPSNavigator(new GPSNavigator())
    }
}