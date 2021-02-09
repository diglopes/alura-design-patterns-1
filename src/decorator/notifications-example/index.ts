import { App } from "./app";
import { FacebookNotifier } from "./notifications/facebook-notifier";
import { Notifier } from "./notifications/notifier";
import { SlackNotifier } from "./notifications/slack-notifier";
import { SMSNotifier } from "./notifications/sms-notifier";

const app = new App()
let stack = new Notifier()
stack = new SMSNotifier(stack)
stack = new SlackNotifier(stack)
stack = new FacebookNotifier(stack)
app.setNotifier(stack)
app.run()