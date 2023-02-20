import { AUTO_POST_COMMAND } from "../constants.js";
import ChatCommand from './ChatCommand.js'

export default class AutoPostCommand extends ChatCommand {
  constructor({bot, chatId}){
    super({bot, command: AUTO_POST_COMMAND, chatId});
  }

  respond(){
    this.bot.sendMessage(this.chatId, "AutoPostCommand is Responding");
  }

  action(){

  }
}