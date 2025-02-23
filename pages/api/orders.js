import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async (req, res) => {
  try {
    const connection = await client.connect();
    const db = connection.db();
    const orders = await db.collection('orders').find({}).toArray();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from MongoDB' });
  }
};

