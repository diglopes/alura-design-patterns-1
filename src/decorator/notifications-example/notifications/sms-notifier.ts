import { BaseNotifierDecorator } from "./base-notifier-decorator";

export class SMSNotifier extends BaseNotifierDecorator {
    constructor(targetChannel?: BaseNotifierDecorator) {
        super(targetChannel)
    }

    public send(msg: string): void {
        super.send(msg)
        console.log("::SMS Channel::", msg);
    }
}