// If connectDB is needed, include it here
// import { connectDB } from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    // If connectDB is required, call it here
    // await connectDB();

    // Your API logic
    res.status(200).json({ message: 'Order route working!' });
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

