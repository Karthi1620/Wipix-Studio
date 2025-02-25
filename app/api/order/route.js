export async function POST(req) {
  try {
    const { name, email, description } = await req.json();

    // Basic validation
    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ message: "All fields (name, email, description) are required!" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Please provide a valid email address." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Simulate saving order to the database (Replace with actual DB logic)
    console.log("Order received:", { name, email, description });

    return new Response(
      JSON.stringify({ message: "Order received successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling the request:", error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

