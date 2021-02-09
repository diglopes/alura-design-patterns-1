import { BaseNotifierDecorator } from "./base-notifier-decorator";

export class SlackNotifier extends BaseNotifierDecorator {
    constructor(targetChannel?: BaseNotifierDecorator) {
        super(targetChannel)
    }

    public send(msg: string): void {
        super.send(msg)
        console.log("::Slack Channel::", msg);
    }
}