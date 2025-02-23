// app/api/order/route.js

import { connectToDatabase } from '../../../lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const orders = await db.collection('orders').find({}).toArray();
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    // Removed error variable as it's not being used
    return new Response('Error fetching orders', { status: 500 });
  }
}

