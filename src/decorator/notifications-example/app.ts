import { Notifier } from "./notifications/notifier";

export class App {
    private notifier: Notifier

    public setNotifier(notifier: Notifier): void {
        this.notifier = notifier
    }

    public run(): void {
        console.log("App running!");
        const crashAlert = "Oh, no! Something wrong happened!!!"
        this.notifier.send(crashAlert)
    }
}