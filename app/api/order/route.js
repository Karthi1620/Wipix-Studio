import { connectToDatabase } from '../../../lib/mongodb';

export async function GET() {  // Removed 'request' from the parameter as it's not used
  try {
    const { db } = await connectToDatabase();
    const orders = await db.collection('orders').find().toArray();
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    return new Response('Error fetching orders', { status: 500 });
  }
}

