export async function POST(req) {
  try {
    const { name, email, description } = await req.json();

    if (!name || !email || !description) {
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Simulate saving order to database (Replace with actual DB logic)
    console.log("Order received:", { name, email, description });

    return new Response(JSON.stringify({ message: "Order received successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

