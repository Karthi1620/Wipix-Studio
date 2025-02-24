"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <main className="min-h-screen flex flex-col items-center text-center p-6 bg-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Our Gallery
      </motion.h1>

      {/* Back Button */}
      <Link href="/" passHref>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gray-800 px-6 py-3 mb-6 rounded-full text-white font-semibold shadow-md hover:bg-gray-700"
        >
          Back to Home
        </motion.button>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["project1.jpg", "project2.jpg", "project3.jpg", "project4.jpg"].map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={`/images/${img}`}
              alt={`Project ${index + 1}`}
              width={400}
              height={300}
              className="transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

