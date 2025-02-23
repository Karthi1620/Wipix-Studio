import { connectDB } from '@/lib/mongodb';  // Uncomment if using MongoDB

// GET method
export async function GET(req, res) {
  try {
    // If connectDB is required, call it here
    // await connectDB();

    // Your API logic for GET request
    res.status(200).json({ message: 'Order route GET working!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

// POST method
export async function POST(req, res) {
  try {
    // If connectDB is required, call it here
    // await connectDB();

    // Your API logic for POST request
    res.status(200).json({ message: 'Order route POST working!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

