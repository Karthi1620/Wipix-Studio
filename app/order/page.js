"use client";
import { useState } from "react";

export default function OrderPage() {
  const [formData, setFormData] = useState({ name: "", email: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    const confirmOrder = window.confirm("Are you sure you want to place this order?");
    if (!confirmOrder) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order placed successfully! We will contact you soon.");
        setFormData({ name: "", email: "", description: "" });
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Order page error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Place an Order</h1>
      <form onSubmit={handleOrderSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Order Details"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className={`px-4 py-2 bg-blue-500 text-white rounded ${isSubmitting ? "opacity-50" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

