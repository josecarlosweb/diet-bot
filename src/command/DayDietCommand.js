import { DAY_DIET_COMMAND } from "../constants.js";
import ChatCommand from "./ChatCommand.js";
import { meals } from "../../database/weeklyDiet.js";
import { getRandomPosition, dietPositionAndItem } from "../utils.js";

export default class DayDietCommand extends ChatCommand {

  constructor({ bot, chatId }) {
    super({ bot, command: DAY_DIET_COMMAND, chatId });
  }

  action() {
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