import { MongoClient } from 'mongodb'
const URL = "mongodb://root:admin123@local-mongo.jp:27017/chatapp?authSource=admin";
export default class Database {
  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        return err ? reject(err) : resolve(db);
      });
    });
  }
}
