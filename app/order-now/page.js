"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function OrderNow() {
  const [description, setDescription] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !service || !description) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const orderData = { name, email, service, description };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setMessage("Your order has been submitted successfully!");
      } else {
        setMessage("Something went wrong, please try again later.");
      }
    } catch (error) {
      setMessage("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-extrabold text-yellow-400">Order Now</h1>
        <p className="mt-4 text-lg">
          Please fill in the form below to place your order. We’ll get in touch
          with you as soon as possible.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
              required
            >
              <option value="" disabled>Select Service</option>
              <option value="web-development">Web Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="poster-design">Poster Design</option>
            </select>
          </div>
          <div>
            <textarea
              placeholder="Describe your requirements"
              className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-purple-700"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Order"}
            </motion.button>
          </motion.div>
        </form>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-center text-yellow-400"
          >
            {message}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-12 text-center"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}

