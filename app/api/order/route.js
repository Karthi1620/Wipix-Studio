import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Connect to MongoDB
const MONGODB_URI = "your_mongodb_connection_string";
const client = new MongoClient(MONGODB_URI);

export async function POST(req) {
  try {
    const { name, contact, email, service, description } = await req.json();

    if (!name || !contact || !email || !service || !description) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    await client.connect();
    const db = client.db("WipixStudio"); // Database Name
    const collection = db.collection("Orders");

    await collection.insertOne({ name, contact, email, service, description, status: "Pending", createdAt: new Date() });

    return NextResponse.json({ message: "Order placed successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process order." }, { status: 500 });
  }
}

