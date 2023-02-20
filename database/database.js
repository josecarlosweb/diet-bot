import PouchDb from "pouchdb";

const database = new PouchDb('chats_db');

export function createOrUpdate(chatId = "") {
  
  if (!chatId || chatId === "") {
    return Promise.reject();
  }

  const document = {
    _id: chatId,
    created_at: new Date()
  }

  return database.put(document);

}

export function deleteChat(chatId){
  return database.remove(chatId);
}

export function getAll(){
  return database.allDocs({include_docs: true})
}