// app/api/order/route.js

import { NextResponse } from "next/server";

// This will handle POST requests to create an order
export async function POST(req) {
  try {
    const { name, contact, email, service, description } = await req.json();

    // You can save this data to your database (e.g., MongoDB) here
    // Example (pseudo code):
    // await db.collection('orders').insertOne({ name, contact, email, service, description });

    console.log('New Order:', {
      name,
      contact,
      email,
      service,
      description
    });

    // Return success response
    return NextResponse.json({ message: "Order placed successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to place the order" }, { status: 500 });
  }
}

