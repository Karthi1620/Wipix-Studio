import { connectToDatabase } from '@/lib/mongodb';
import Order from '@/models/order';

export async function POST(req) {
  try {
    const { name, email, description } = await req.json();

    // Log the incoming order data
    console.log('Order Data:', { name, email, description });

    if (!name || !email || !description) {
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to database
    const db = await connectToDatabase();

    // Simulate saving order to database
    const newOrder = new Order({ name, email, description });
    await newOrder.save();

    // Log success
    console.log('Order received and saved successfully!');

    return new Response(JSON.stringify({ message: "Order received successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log any errors
    console.error('Error in Order API:', error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

