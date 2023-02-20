import { deleteChat } from "../../database/database.js";

export default class ChatCommand {
  constructor(bot, command) {
    this.bot = bot;
    this.command = command;
  }

  respond(chatId) {
    return null;
  }

  action() {
    return null;
  }

  onErrorSendMessage(chatId){
    deleteChat(chatId)
    .then(response => console.log("Chat deleted", response));
  }
}
