// app/api/contact/route.js

export async function POST(req) {
  try {
    // Log the request arrival to track when the API is hit
    console.log("Received a POST request to Contact Us");

    // Parse the incoming request JSON body
    const { name, email, message } = await req.json();

    // Check if all required fields are present and log the fields for debugging
    if (!name || !email || !message) {
      console.log("Missing required fields in contact form:", { name, email, message });
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Log the received contact data for debugging purposes
    console.log("Contact form submitted:", { name, email, message });

    // Return a success message if everything is correct
    return new Response(JSON.stringify({ message: "Message received successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log any error that occurs to help with debugging
    console.log("Error in Contact Us route:", error);

    // Return an error response if something goes wrong
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

