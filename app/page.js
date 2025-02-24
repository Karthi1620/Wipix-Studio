// app/page.js

"use client"; // Ensure this is marked for client-side functionality

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, message };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert('Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send the message.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-6 flex flex-col items-center justify-center">
      {/* Logo & Title Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-24 h-24 overflow-hidden rounded-full">
          <img
            src="/images/logo.png"
            alt="Wipix Studio Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-5xl font-extrabold mt-4 drop-shadow-lg">Wipix Studio</h1>
      </div>

      {/* Intro Text */}
      <div className="mb-8 max-w-xl text-center">
        <h2 className="text-2xl font-semibold">Welcome to Wipix Studio</h2>
        <p className="mt-3 text-lg">
          We specialize in <span className="font-bold">Web Development</span>,{" "}
          <span className="font-bold">UI/UX Design</span>, and{" "}
          <span className="font-bold">Poster Design</span>.
        </p>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex gap-4 mb-10 justify-center">
        <button className="bg-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-purple-700">
          Order Now
        </button>
        <button className="bg-green-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-green-700">
          Meet Our Team
        </button>
      </div>

      {/* Contact Us Section */}
      <section className="w-full max-w-3xl text-center p-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-300">Contact Us</h2>
        <p className="mt-2 text-gray-300">
          We’d love to hear from you! Reach out via email, WhatsApp, or social media.
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
            required
          />
          <button type="submit" className="w-full bg-blue-600 p-3 rounded-lg text-white font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-6 text-sm text-gray-400 text-center">
        ©️ 2025 Wipix Studio. All rights reserved.
      </footer>
    </main>
  );
}

