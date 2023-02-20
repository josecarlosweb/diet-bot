import { createOrUpdate } from "../../database/database.js";
import { AUTO_POST_COMMAND } from "../constants.js";
import ChatCommand from './ChatCommand.js'

export default class AutoPostCommand extends ChatCommand {
  constructor({bot, chatId}){
    super({bot, command: AUTO_POST_COMMAND, chatId});
  }

  action(){
    createOrUpdate(this.chatId.toString())
    .then(response => {
      console.log(response);
      this.respond("Ok. I will send you the daly diet and weekly shopping list");
    });
    
  }
}