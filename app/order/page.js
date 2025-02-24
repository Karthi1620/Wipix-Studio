"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function OrderNow() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  const handleOrder = async () => {
    if (!name || !contact || !email || !service || !description) {
      alert("Please fill in all fields before placing an order.");
      return;
    }

    const confirmOrder = window.confirm("Are you sure you want to place this order?");
    if (!confirmOrder) return; // If user cancels, stop here

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, email, service, description }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Order placed successfully! We will contact you soon.");
        setName("");
        setContact("");
        setEmail("");
        setService("");
        setDescription("");
      } else {
        alert(data.error || "Error placing order.");
      }
    } catch (error) {
      alert("Failed to place order. Try again later.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-800 to-purple-600 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold mb-6"
      >
        Order Now
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <label className="block text-lg font-semibold mb-2">Name:</label>
        <input
          type="text"
          className="w-full p-3 border rounded-lg bg-gray-100 text-black font-semibold shadow-sm focus:outline-none"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-lg font-semibold mt-4 mb-2">Contact Number:</label>
        <input
          type="tel"
          className="w-full p-3 border rounded-lg bg-gray-100 text-black font-semibold shadow-sm focus:outline-none"
          placeholder="Enter your phone number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <label className="block text-lg font-semibold mt-4 mb-2">Email:</label>
        <input
          type="email"
          className="w-full p-3 border rounded-lg bg-gray-100 text-black font-semibold shadow-sm focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-lg font-semibold mt-4 mb-2">Select a Service:</label>
        <select
          className="w-full p-3 border rounded-lg bg-gray-100 text-black font-semibold shadow-sm focus:outline-none"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">-- Choose a Service --</option>
          <option value="Web Development">Web Development</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Poster Design">Poster Design</option>
        </select>

        <label className="block text-lg font-semibold mt-4 mb-2">Project Description:</label>
        <textarea
          className="w-full p-3 border rounded-lg bg-gray-100 text-black font-semibold shadow-sm focus:outline-none"
          placeholder="Briefly describe your project"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-purple-700 transition duration-300"
          onClick={handleOrder}
        >
          Place Order
        </motion.button>
      </motion.div>
    </main>
  );
}

