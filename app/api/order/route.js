/* eslint-disable @typescript-eslint/no-unused-vars */

// import { connectDB } from '@/lib/mongodb'; // Keep the import if you're planning to use it later

// GET method
export async function GET(req, res) {
  try {
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
    // Your API logic for POST request
    res.status(200).json({ message: 'Order route POST working!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}

