import { Car } from "../cars/Car";
import { CarType } from "../cars/CarType";
import { Engine } from "../components/Engine";
import { GPSNavigator } from "../components/GPSNavigator";
import { Transmission } from "../components/Transmission";
import { TripComputer } from "../components/TripComputer";
import { Builder } from "./Builder";

export class CarBuilder implements Builder {
  private carType: CarType;
  private seats: number;
  private engine: Engine;
  private transmission: Transmission;
  private tripComputer: TripComputer;
  private gpsNavigator: GPSNavigator;

  public setCarType(catType: CarType): void {
    this.carType = catType;
  }

  public setSeats(seats: number): void {
    this.seats = seats;
  }
  public setEngine(engine: Engine): void {
    this.engine = engine;
  }

  public setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }

  public setTripComputer(tripComputer: TripComputer): void {
    this.tripComputer = tripComputer;
  }

  public setGPSNavigator(gpsNavigator: GPSNavigator): void {
    this.gpsNavigator = gpsNavigator;
  }

  public build(): Car {
    return new Car(
      this.carType,
      this.seats,
      this.engine,
      this.transmission,
      this.tripComputer,
      this.gpsNavigator
    );
  }
}
