import { Notifier } from "./notifier";

export abstract class BaseNotifierDecorator extends Notifier {
    constructor(private targetChannel?: Notifier) {
        super()
    }

    public send(msg: string): void {
        this.targetChannel.send(msg)
    }
}