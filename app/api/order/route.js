import { connectToDatabase } from "@/utils/mongodb";
import Order from "@/models/Order";

export async function POST(req) {
  try {
    const { name, email, description } = await req.json();
    await connectToDatabase();

    const newOrder = new Order({ name, email, description });
    await newOrder.save();

    return Response.json({ message: "Order placed successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Order API error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

