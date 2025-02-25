// app/api/order/route.js

export async function POST(req) {
  try {
    // Log the request arrival to track when the API is hit
    console.log("Received a POST request to place an order");

    // Parse the incoming request JSON body
    const { name, email, description } = await req.json();

    // Check if all required fields are present and log them for debugging
    if (!name || !email || !description) {
      console.log("Missing required fields in order form:", { name, email, description });
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Log the received order data for debugging purposes
    console.log("Order received:", { name, email, description });

    // Return a success message if everything is correct
    return new Response(JSON.stringify({ message: "Order received successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log any error that occurs to help with debugging
    console.log("Error in Order route:", error);

    // Return an error response if something goes wrong
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

