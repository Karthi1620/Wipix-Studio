// lib/mongodb.js

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  try {
    if (!client.isConnected()) {
      await client.connect();
    }
    const db = client.db(process.env.MONGODB_DB);
    return { db, client };
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

