import { weeklyDiet } from "../database/weeklyDiet.js";

export const getPureCommand = rawMessage => {
  if (!rawMessage) {
    return "";
  }
  return rawMessage.replace('@simpledietbot', '').replace('/', '')
}

export const getRandomPosition = (arrayList = []) => {
  const position = Math.floor(Math.random() * arrayList.length);
  const item = arrayList[position];

  return { position, item };
}

export const dietPositionAndItem = (weeklyDiet.length > 1) ? getRandomPosition(weeklyDiet) : { position: 0, item: weeklyDiet[0] }