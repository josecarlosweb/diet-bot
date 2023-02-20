export const getPureCommand = rawMessage => {
  if(!rawMessage){
    return "";
  }
  return rawMessage.replace('@simpledietbot', '').replace('/', '')
}