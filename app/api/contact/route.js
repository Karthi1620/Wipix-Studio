// app/api/contact/route.js

export async function POST(req) {
  const { email, message } = await req.json();

  // Log the message to Vercel logs
  console.log(`New message from ${email}: ${message}`);

  // Respond back to the client
  return new Response(
    JSON.stringify({ message: 'Message received successfully!' }),
    { status: 200 }
  );
}

