import { SHOPPING_LIST_COMMAND, DAY_DIET_COMMAND, AUTO_POST_COMMAND } from "./src/constants.js";
import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv';
import { getCommand } from "./src/CommandBuilder.js";
import { getPureCommand } from "./src/utils.js";

//load .env file
dotenv.config();

const commandsRegex = new RegExp(`/(${SHOPPING_LIST_COMMAND}|${DAY_DIET_COMMAND}|${AUTO_POST_COMMAND})@simpledietbot`);

const token = process.env.BOT_TOKEN || "";
const bot = new TelegramBot(token, {polling: true});

bot.onText(commandsRegex, (msg, match) => {

  const chatId = msg.chat.id;
  const message = match[0];

  console.log(chatId, getPureCommand(message));
  
  const command = getCommand(bot, getPureCommand(message));
  command.action();
  command.respond(chatId);

});

bot.on('polling_error', (error) => {
  console.log(error);  // => 'EFATAL'
});