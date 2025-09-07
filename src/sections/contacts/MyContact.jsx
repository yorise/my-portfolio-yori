"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";

export default function MyContact() {
  return (
    <section className="min-h-screen pt-32 md:pt-40 flex flex-col items-center justify-center md:justify-start md:flex-col lg:flex-row-reverse lg:justify-evenly px-4 py-16 gap-12">
      {/* Hero Image */}
      <div className="relative flex-shrink-0">
        {/* Lingkaran tipis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
           w-70 h-70 sm:w-72 sm:h-72 md:w-86 md:h-86 lg:w-104 lg:h-104 rounded-full border-2 border-sidebar-ring-400"
        />
        {/* Foto */}
        <motion.img
          src="/assets/images/profile.png"
          alt="Yori Photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left gap-6 max-w-lg">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          Get In Touch<span className="text-chart-2">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-lg md:text-xl text-gray-700"
        >
          Looking to partner or work together? Reach out through the form and
          I'll get back to you in the next 48 hours.
        </motion.p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 mt-4 w-full">
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, type: "spring" }}
            href="mailto:awwalyori@gmail.com"
            className="flex items-center gap-3 justify-center border-2 border-gray-300 rounded-lg px-4 py-2 hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            <Mail className="w-6 h-6" />
            <span>awwalyori@gmail.com</span>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
            href="https://wa.me/6281918238908"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 justify-center border-2 border-gray-300 rounded-lg px-4 py-2 hover:border-green-600 hover:text-green-600 transition"
          >
            <Phone className="w-6 h-6" />
            <span>+62 819 182 389 08</span>
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col items-center lg:items-start gap-4 mt-6"
        >
          <p className="text-sm sm:text-lg md:text-xl text-gray-700">
            Follow me for more.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
