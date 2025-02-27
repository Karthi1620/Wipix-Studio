"use client";
import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "", // Added contact number
    serviceType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("📤 Submitting order form with data:", formData);
    setLoading(true);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("✅ API Response Data:", data);
      alert(data.message || "Something went wrong");

      if (response.ok) {
        setFormData({ name: "", email: "", contact: "", serviceType: "", message: "" });
      }
    } catch (error) {
      console.error("❌ Error submitting order form:", error);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold text-gray-900">Place Your Order</h1>
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
        <input
          type="text"
          placeholder="Your Contact Number"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Service Type"
          value={formData.serviceType}
          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
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
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded w-full" disabled={loading}>
          {loading ? "Submitting..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
}

