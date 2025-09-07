"use client";

import { motion } from "framer-motion";
import { useTyping } from "@/utils/typing";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const words = [
    "Fullstack Developer",
    "Body Builder",
    "Capture & Build Moments",
  ];
  const text = useTyping(words, 60, 40, 1500);

  return (
    <section className="h-screen flex flex-col md:flex-row-reverse justify-evenly items-center px-4 md:px-12 gap-8 md:gap-16">
      {/* Hero Image Section */}
      <div className="relative flex-shrink-0">
        {/* Lingkaran tipis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-64 h-64 sm:w-80 sm:h-80 md:w-104 md:h-104 rounded-full border-2 border-sidebar-ring-400"
        />

        {/* Foto */}
        <motion.img
          src="/assets/images/profile.png"
          alt="Yori Photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-88 md:h-88 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 text-center md:text-left max-w-2xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Hi there, I’m Yori 👋🏻
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold flex items-center gap-1 break-words"
        >
          <span>
            {text}
            <span className="blinking-cursor">l</span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-md sm:text-lg md:text-xl lg:text-2xl text-gray-700"
        >
          Bringing ideas to life through code, creativity, and a touch of visual
          storytelling.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex gap-3 flex-wrap justify-center md:justify-start mt-2"
        >
          <Button
            variant="default"
            size="lg"
            className="cursor-pointer"
            onClick={() => (window.location.href = "/contacts")}
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer"
            onClick={() =>
              (window.location.href = "https://github.com/username")
            }
          >
            See Code
          </Button>
        </motion.div>
      </div>

      {/* Blinking cursor style */}
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          background-color: currentColor;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
