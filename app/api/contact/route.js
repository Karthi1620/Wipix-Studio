// app/api/contact/route.js
import Contact from '@/models/contact'; // Correct import path
// If you need to connect to the database, make sure the connection function is used properly

export async function POST(req) {
  try {
    const { name, email, message } = await req.json(); // Get data from the request

    // Create a new contact entry
    const newContact = new Contact({ name, email, message });

    // Save to the database
    await newContact.save();

    // Return a success response
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error:', error);  // Log the error for debugging

    // Return an error response
    return new Response(JSON.stringify({ message: 'Error occurred while sending message.' }), { status: 500 });
  }
}

