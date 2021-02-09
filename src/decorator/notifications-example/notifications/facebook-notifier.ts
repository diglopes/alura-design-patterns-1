import { BaseNotifierDecorator } from "./base-notifier-decorator";
import { Notifier } from "./notifier";

export class FacebookNotifier extends BaseNotifierDecorator {
    constructor(targetChannel: Notifier) {
        super(targetChannel)
    }

    public send(msg: string): void {
        super.send(msg)
        console.log("::Facebook Channel::", msg);
    }
}