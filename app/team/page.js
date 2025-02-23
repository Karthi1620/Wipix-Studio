"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Team() {
  const teamMembers = [
    { name: "Karthikeyan", role: "Lead Web Developer", img: "/images/karthikeyan.jpg", linkedin: "#", instagram: "#", facebook: "#" },
    { name: "Priya", role: "Senior UI/UX Designer", img: "/images/priya.jpg", linkedin: "#", instagram: "#", facebook: "#" },
    { name: "Naveen", role: "Senior Security Analyst", img: "/images/naveen.jpg", linkedin: "#", instagram: "#", facebook: "#" },
    { name: "Shree", role: "Senior Business Analyst", img: "/images/shree.jpg", linkedin: "#", instagram: "#", facebook: "#" },
    { name: "Sushmita", role: "Senior Systems & QA Analyst", img: "/images/sushmita.jpg", linkedin: "#", instagram: "#", facebook: "#" },
    { name: "Gokul", role: "Senior QA Tester & Maintenance Engineer", img: "/images/gokul.jpg", linkedin: "#", instagram: "#", facebook: "#" }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-blue-700"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>

      {/* Team Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        Meet Our Team
      </motion.h1>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-lg bg-gray-800 p-4 text-center"
          >
            <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden mx-auto">
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-300">{member.role}</p>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mt-4">
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" className="text-blue-600 hover:text-blue-700 text-xl">
                  <FaLinkedin />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram} target="_blank" className="text-pink-500 hover:text-pink-600 text-xl">
                  <FaInstagram />
                </a>
              )}
              {member.facebook && (
                <a href={member.facebook} target="_blank" className="text-blue-400 hover:text-blue-500 text-xl">
                  <FaFacebook />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

