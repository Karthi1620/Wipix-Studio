// lib/mongodb.js
import { MongoClient } from 'mongodb';

const MONGODB_URI = "mongodb+srv://sivakarthikeyan978:9I9HqAxDwEOPbauL@cluster0.n9k1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";  // Replace with your MongoDB URI
const DB_NAME = 'wipix-studio';

let cachedClient = null;
let cachedDb = null;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI');
}

export async function connectToDatabase() {
  // If the client and database are already cached, return them
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Otherwise, create a new client and connect
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(DB_NAME);

  // Cache the client and db to avoid new connections on every request
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

