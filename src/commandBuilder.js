import { DAY_DIET_COMMAND, SHOPPING_LIST_COMMAND, AUTO_POST_COMMAND } from "./constants.js";
import ChatCommand from './command/ChatCommand.js';
import ShoppingListCommand from './command/ShoppingListCommand.js';
import DayDietCommand from './command/DayDietCommand.js';
import AutoPostCommand from './command/AutoPostCommand.js';

export const getCommand = ({bot, chatId, command}) => {
  
  let commandClass = new ChatCommand({bot, command, chatId});

  const defaultArgs = {bot, chatId};

  switch(command){

    case SHOPPING_LIST_COMMAND:
      commandClass = new ShoppingListCommand(defaultArgs);
      break;
    case DAY_DIET_COMMAND:
      commandClass = new DayDietCommand(defaultArgs);
      break;
    case AUTO_POST_COMMAND:
      commandClass = new AutoPostCommand(defaultArgs);
      break;
  }

  return commandClass;
}