import { DAY_DIET_COMMAND, SHOPPING_LIST_COMMAND, AUTO_POST_COMMAND } from "./constants.js";
import ChatCommand from './command/ChatCommand.js';
import ShoppingListCommand from './command/ShoppingListCommand.js';
import DayDietCommand from './command/DayDietCommand.js';
import AutoPostCommand from './command/AutoPostCommand.js';

export const getCommand = (bot, message) => {
  
  let command = new ChatCommand(bot, message);

  switch(message){

    case SHOPPING_LIST_COMMAND:
      command = new ShoppingListCommand(bot);
      break;
    case DAY_DIET_COMMAND:
      command = new DayDietCommand(bot);
      break;
    case AUTO_POST_COMMAND:
      command = new AutoPostCommand(bot);
      break;
  }

  return command;
}