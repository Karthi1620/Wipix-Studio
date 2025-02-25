// /app/api/contact/route.js

import { connectToDataBase } from "@/lib/mongodb";  // Import MongoDB connection function
import Contact from "@/models/contact";             // Import Contact model

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log("Received contact data:", { name, email, message }); // Log for debugging

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await connectToDataBase();  // Ensure MongoDB is connected

    const newContact = new Contact({ name, email, message });
    await newContact.save(); // Save contact to DB

    console.log("Contact saved successfully:", { name, email, message });

    return new Response(JSON.stringify({ message: "Message received successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing contact message:", error); // Log error
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

