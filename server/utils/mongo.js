import { MongoClient } from 'mongodb'
let client, db

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(useRuntimeConfig().mongoUri)
    await client.connect()
    db = client.db()
  }
  return { db }
}
