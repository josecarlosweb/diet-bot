import PouchDb from "pouchdb";

const database = new PouchDb('chats_db');

export function createOrUpdate(chatId = "") {

  if (!chatId || chatId === "") {
    return Promise.reject(new Error("Id must be informed"));
  }

  let document = {
    _id: chatId,
    created_at: new Date()
  }

  return new Promise((resolve, reject) => {

    database.get(chatId).then((response) => {

      document._rev = response._rev;
      resolve(database.put(document));

    }).catch(function (err) {

      if (err.reason === 'missing') {
        resolve(database.put(document));
      } else {
        reject(err);
      }
      
    });

  });

}

export function deleteChat(chatId) {
  return database.remove(chatId);
}

export function getAll() {
  return database.allDocs({ include_docs: true })
}