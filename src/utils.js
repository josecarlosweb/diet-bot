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