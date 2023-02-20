import { DAY_DIET_COMMAND } from "../constants.js";
import ChatCommand from "./ChatCommand.js";

export default class DayDietCommand extends ChatCommand {

  constructor(bot) {
    super(bot, DAY_DIET_COMMAND);
  }

  respond(chatId) {

  }

  action() {

  }

  _getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }
}