import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

export async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // Remove deprecated options `useNewUrlParser` and `useUnifiedTopology`
  await mongoose.connect(MONGODB_URI);

  console.log("Connected to MongoDB");
}

