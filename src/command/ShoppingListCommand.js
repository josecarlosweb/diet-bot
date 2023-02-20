import { SHOPPING_LIST_COMMAND } from "../constants.js";
import ChatCommand from "./ChatCommand.js";
import { dietPositionAndItem } from "../utils.js";

export default class ShoppingListCommand extends ChatCommand {
  constructor({ bot, chatId }) {
    super({ bot, command: SHOPPING_LIST_COMMAND, chatId });
  }

  action() {
    const weeklyShoppingList = dietPositionAndItem.item.shoppingList;
    const message = weeklyShoppingList.map((item, index) => {
      return `${index + 1} - ${item}\n`
    }).join("");
    this.respond(message);
  }

}
