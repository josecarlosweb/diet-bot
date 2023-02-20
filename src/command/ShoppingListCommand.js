import { SHOPPING_LIST_COMMAND } from "../constants.js";
import ChatCommand from "./ChatCommand.js";

export default class ShoppingListCommand extends ChatCommand {
  constructor(bot){
    super(bot, SHOPPING_LIST_COMMAND);
  }

  respond(chatId){

  }

  action(){

  }

}
