// app/api/contact/route.js

export async function POST(req) {
  try {
    // Log the request arrival
    console.log("Received a POST request to Contact Us");

    // Parse the incoming request JSON body
    const { name, email, message } = await req.json();

    // Check if all required fields are present
    if (!name || !email || !message) {
      console.log("Missing required fields in contact form:", { name, email, message });
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Log the received contact data for debugging
    console.log("Contact form submitted:", { name, email, message });

    // Return a success message if everything is correct
    return new Response(JSON.stringify({ message: "Message received successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log any error that occurs
    console.log("Error in Contact Us route:", error);

    // Return an error response
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

