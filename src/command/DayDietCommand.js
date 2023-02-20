import { DAY_DIET_COMMAND } from "../constants.js";
import ChatCommand from "./ChatCommand.js";

export default class DayDietCommand extends ChatCommand {

  constructor({bot, chatId}) {
    super({bot, command: DAY_DIET_COMMAND, chatId});
  }

  respond() {

  }

  action() {

  }

  _getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }
}