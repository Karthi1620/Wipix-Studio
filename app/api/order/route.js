export async function POST(req) {
  try {
    console.log("📩 Received a POST request for Order");

    const { name, email, contact, serviceType, message } = await req.json();

    if (!name || !email || !contact || !serviceType || !message) {
      console.log("❌ Missing required fields:", { name, email, contact, serviceType, message });
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("✅ Order received:", { name, email, contact, serviceType, message });

    return new Response(JSON.stringify({ message: "Order logged successfully!" }), {
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

