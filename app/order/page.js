"use client";
import { useState } from "react";

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("📤 Submitting order with data:", formData);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("📩 Response status:", response.status);

      const data = await response.json();
      console.log("✅ API Response Data:", data);

      alert(data.message || data.error);

      if (response.ok) {
        setFormData({ name: "", email: "", serviceType: "", description: "" });
      }
    } catch (error) {
      console.error("❌ Error submitting order:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 text-black"> {/* Changed text color for visibility */}
      <h1 className="text-3xl font-bold text-gray-900">Place an Order</h1>
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
        {/* New Service Type Dropdown */}
        <select
          value={formData.serviceType}
          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
          className="w-full p-2 border rounded text-black bg-white"
          required
        >
          <option value="" disabled>Select Service Type</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Graphic Design">Graphic Design</option>
        </select>
        <textarea
          placeholder="Order Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-2 border rounded text-black"
          required
        />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded w-full">
          Place Order
        </button>
      </form>
    </div>
  );
}

