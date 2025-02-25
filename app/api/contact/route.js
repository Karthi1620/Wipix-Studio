import { connectToDatabase } from '@/lib/mongodb';
import Contact from '@/models/contact';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Log the incoming request data
    console.log('Contact Form Data:', { name, email, message });

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Connect to database
    const db = await connectToDatabase();

    // Save contact form data to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Log success
    console.log('Contact form submitted successfully!');

    return new Response(JSON.stringify({ message: "Contact form submitted successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log any errors
    console.error('Error in Contact API:', error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

