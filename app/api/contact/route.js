import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return Response.json({ message: "Message sent successfully" }, { status: 201 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

