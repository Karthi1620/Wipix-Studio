"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      {/* Gallery Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-extrabold text-yellow-400">Our Gallery</h1>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {["project1.jpg", "project2.jpg", "project3.jpg", "project4.jpg"].map(
          (img, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={`/images/${img}`}
                alt={`Project ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-300"
              />
            </motion.div>
          )
        )}
      </motion.div>

      {/* Back Button */}
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

