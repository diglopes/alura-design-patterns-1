export class Engine {
    private started = false
    constructor(private mileage: number, private volume: number) {}

    public on(): void {
        this.started = true
    }

    public off(): void {
        this.started = false
    }

    public isStarted(): boolean {
        return this.started
    }

    public go(mileage: number):void {
        if(this.started){
            this.mileage += mileage
        } else {
            throw new Error("Cannot go(), you must start the engine first!")
        }
    }

    public get getVolume (): number {
        return this.volume
    }

    public get getMileage (): number {
        return this.mileage
    }
}