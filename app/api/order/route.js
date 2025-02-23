import { connectDB } from "@/app/lib/mongodb";
import Order from "@/app/models/order";


export async function POST(req) {
    try {
        await connectToDatabase();
        const { name, email, items } = await req.json();

        const order = new Order({ name, email, items });
        await order.save();

        return Response.json({ message: "Order saved successfully!" }, { status: 201 });
    } catch (error) {
        return Response.json({ error: "Failed to save order" }, { status: 500 });
    }
}

