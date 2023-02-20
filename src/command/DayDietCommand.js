import { DAY_DIET_COMMAND } from "../constants.js";
import ChatCommand from "./ChatCommand.js";
import { weeklyDiet, meals } from "../../database/weeklyDiet.js";
import { getRandomPosition } from "../utils.js";

export default class DayDietCommand extends ChatCommand {

  constructor({ bot, chatId }) {
    super({ bot, command: DAY_DIET_COMMAND, chatId });
  }

  respond(message = '') {
    this.bot.sendMessage(this.chatId, message);
  }

  action() {
    const dietPositionAndItem = (weeklyDiet.length > 1) ? getRandomPosition(weeklyDiet) : { position: 0, item: weeklyDiet[0] }
    console.log(dietPositionAndItem);
    const dailyDiet = Object.keys(meals).map((value) => {

      const keyName = meals[value];
      const itemOfMeal = getRandomPosition(dietPositionAndItem.item[value]).item;
      return `${keyName}: ${itemOfMeal}\n\n`;

    }).join("");
    this.respond(dailyDiet);
  }

  _getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }
}