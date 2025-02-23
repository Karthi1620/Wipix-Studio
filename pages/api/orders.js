import { MongoClient } from 'mongodb';

// MongoDB connection URI (you'll use the URI from MongoDB Atlas)
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Helper function to connect to MongoDB
const connectToDatabase = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db();
};

// Create a function to handle API requests and export it
const handleOrders = async (req, res) => {
  const db = await connectToDatabase();
  const ordersCollection = db.collection('orders');

  if (req.method === 'GET') {
    // Get all orders
    const orders = await ordersCollection.find({}).toArray();
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    // Create a new order
    const newOrder = req.body;

    // Insert the new order into MongoDB
    const result = await ordersCollection.insertOne(newOrder);

    res.status(201).json({ message: 'Order created successfully', order: result.ops[0] });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handleOrders;

