// /lib/mongodb.js

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI; // Your MongoDB URI from .env.local

export const connectToDataBase = async () => {
  try {
    // Check if already connected to MongoDB
    if (mongoose.connections[0].readyState) {
      console.log("Already connected to MongoDB.");
      return;
    }

    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

