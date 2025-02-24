"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      {/* Logo & Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-8"
      >
        {/* Circular Logo */}
        <div className="relative w-24 h-24 overflow-hidden rounded-full">
          <Image
            src="/images/logo.png"
            alt="Wipix Studio Logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-5xl font-extrabold mt-4 drop-shadow-lg text-white">
          Wipix Studio
        </h1>
      </motion.div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-8 max-w-xl"
      >
        <h2 className="text-2xl font-semibold text-white">Welcome to Wipix Studio</h2>
        <p className="mt-3 text-lg text-white">
          We specialize in <span className="font-bold">Web Development</span>,{" "}
          <span className="font-bold">UI/UX Design</span>, and{" "}
          <span className="font-bold">Poster Design</span>.
        </p>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex gap-4 mb-10"
      >
        <Link href="/order">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-purple-700"
          >
            Order Now
          </motion.button>
        </Link>
        <Link href="/team">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-green-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-green-700"
          >
            Meet Our Team
          </motion.button>
        </Link>
      </motion.div>

      {/* Gallery Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Link href="/gallery">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-yellow-700"
          >
            View Gallery
          </motion.button>
        </Link>
      </motion.div>

      {/* Vision Section */}
      <section className="w-full max-w-3xl text-center p-6 bg-gray-800 rounded-xl shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-yellow-300">Our Vision</h2>
        <p className="mt-3 text-gray-300">
          At Wipix Studio, we aim to innovate and create digital solutions that
          transform businesses. Our passion for technology and design drives us
          to deliver excellence in web development, UI/UX, and creative
          branding.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="w-full max-w-3xl text-center p-6 bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-300">Contact Us</h2>
        <p className="mt-2 text-gray-300">
          We’d love to hear from you! Reach out via email, WhatsApp, or social media.
        </p>

        <form className="mt-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded bg-gray-700 text-white"
            required
          />
          <button className="w-full bg-blue-600 p-3 rounded-lg text-white font-semibold hover:bg-blue-700">
            Send Message
          </button>
        </form>

        <div className="mt-4 space-y-1">
          <p className="text-gray-300">
            📞 <strong>+971 0563134549</strong>
          </p>
          <p className="text-gray-300">
            📧 <strong>contactMail: wipixdesitech@gmail.com</strong>
          </p>
          <p className="text-gray-300">
            💬 <strong>WhatsApp: +91 9487362484</strong>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.facebook.com/share/18fiP5RvFs/"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/wipixdesitech"
            target="_blank"
            className="text-pink-400 hover:text-pink-500 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/wipix-desitechcompany-7b2899352"
            target="_blank"
            className="text-blue-600 hover:text-blue-700 text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-6 text-sm text-gray-400">
        ©️ 2025 Wipix Studio. All rights reserved.
      </footer>
    </main>
  );
}

