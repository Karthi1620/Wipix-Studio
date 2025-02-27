import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("Received a POST request to Contact Us");

    // Parse request body
    const { name, email, message } = await req.json();
    console.log("Form data received:", { name, email, message });

    // Validate fields
    if (!name || !email || !message) {
      console.log("Missing required fields");
      return new Response(JSON.stringify({ message: "All fields are required!" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Create a transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "wipixdesistudio@gmail.com", // Replace with your Gmail
        pass: "jiao dwhu uxxn fuqq", // Use an App Password, not your Gmail password
      },
    });

    // Email content
    const mailOptions = {
      from: email, // User's email
      to: "wipixdesistudio@gmail.com", // Your email
      subject: "New Contact Form Submission",
      text: `You received a new message from:
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");

    return new Response(JSON.stringify({ message: "Message sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error in Contact Us route:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

