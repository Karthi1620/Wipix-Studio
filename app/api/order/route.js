import { connectToDatabase } from '../../../lib/mongodb';

export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    const orders = await db.collection('orders').find().toArray();
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    // If you don't need to use `err`, you can remove it entirely
    console.error(err); // Log the error for debugging purposes
    return new Response('Error fetching orders', { status: 500 });
  }
}

