import { deleteChat } from "../../database/database.js";

export default class ChatCommand {

  constructor({bot, command, chatId}) {
    this.bot = bot;
    this.command = command;
    this.chatId = chatId;
  }

  respond(message = '') {
    this.bot.sendMessage(this.chatId, message);
  }

  action() {
    return null;
  }

  onErrorSendMessage(){
    deleteChat(this.chatId)
    .then(response => console.log("Chat deleted", response));
  }
}
