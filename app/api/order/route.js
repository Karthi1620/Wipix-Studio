export async function POST(req) {
  try {
    console.log("🛒 Received a POST request to /api/order");

    const body = await req.text();
    console.log("📜 Raw request body:", body);

    const { name, email, description } = JSON.parse(body);

    if (!name || !email || !description) {
      console.log("⚠️ Missing required fields:", { name, email, description });
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("✅ Order submitted successfully:", { name, email, description });

    return new Response(JSON.stringify({ message: "Order received successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Error in Order API:", error);

    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

