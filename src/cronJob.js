import { CronJob } from "cron";
import { getAll } from "../database/database.js";
import DayDietCommand from "./command/DayDietCommand.js";

export const dailyJob = (bot) => {
  //00 00 12 * * *
  return new CronJob('10 * * * * *', () => {
    const now = new Date();
    console.log(now, "Starting job execution");
    getAll()
    .then(response => {
      sendDailyDiet(bot, response.rows);
    })
    .finally(() => {
      console.log("End of job execution");
    });
  });
}

const sendDailyDiet = (bot, chatIds = []) => {
  chatIds.forEach(chat => {
    console.log(`Sending message to ${chat.id}`);
    const dailyDietCommand = new DayDietCommand({ bot, chatId: chat.id });
    dailyDietCommand.action();
  });
}