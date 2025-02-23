import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not constantly re-initialized
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's safe to not use a global variable
  clientPromise = client.connect();
}

export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db();
  return { client, db };
};

