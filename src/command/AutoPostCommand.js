import { AUTO_POST_COMMAND } from "../constants.js";
import ChatCommand from './ChatCommand.js'

export default class AutoPostCommand extends ChatCommand {
  constructor(bot){
    super(bot, AUTO_POST_COMMAND);
  }

  respond(chatId){
    this.bot.sendMessage(chatId, "AutoPostCommand is Responding");
  }

  action(){}
}