const { MongoClient } = require("mongodb");
const username = encodeURIComponent("<leve0311>");
const password = encodeURIComponent("<Tossedsalad1!>");
const cluster = "<cluster0>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";
let uri = `mongodb+srv://${username}:${password}@${cluster}/?authSource=${authSource}&authMechanism=${authMechanism}`;
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("<dbName>");
    const ratings = database.collection("<collName>");
    const cursor = ratings.find();
    await cursor.forEach((doc) => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
