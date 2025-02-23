// app/api/orders/route.js
import { connectToDatabase } from '../../../lib/mongodb';

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();
    
    const orders = await db.collection('orders').find({}).toArray();
    return new Response(JSON.stringify({ orders }), { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return new Response(JSON.stringify({ message: 'Failed to fetch orders' }), { status: 500 });
  }
}

