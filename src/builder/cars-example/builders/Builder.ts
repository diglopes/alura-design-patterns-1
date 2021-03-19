import { CarType } from "../cars/CarType";
import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";

export interface Builder {
    setCarType(type: CarType): void
    setSeats(seats: number): void
    setEngine(engine: Engine): void
    setTransmission(transmission: Transmission): void
    setTripComputer(tripComputer: TripComputer): void
    setGPSNavigator(gpsNavigator: GPSNavigator): void
}