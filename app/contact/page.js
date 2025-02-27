"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    setLoading(true); // Show loading state
    setErrorMessage(""); // Reset error message

    // Log the form data to ensure it's correct
    console.log("📤 Form submitted with data:", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log response status and check for success
      console.log("📩 Response Status:", response.status);
      const data = await response.json();
      console.log("✅ API Response Data:", data);

      if (response.ok) {
        alert(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "An error occurred.");
        setErrorMessage(data.message || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error("❌ Error submitting contact form:", error);
      setErrorMessage("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 bg-white p-4 shadow-md rounded-md">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded w-full">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

