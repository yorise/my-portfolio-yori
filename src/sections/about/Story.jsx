"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      ref={ref}
      className="py-5 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center max-w-6xl mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 sm:mb-10 text-center sm:text-left w-full max-w-6xl"
      >
        My Story<span className="text-chart-2">.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-6 sm:gap-8"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl text-center sm:text-left mb-3 sm:mb-5 md:mb-9"
        >
          Hi, I’m Awwal Yori Fairuzy. My curiosity about technology sparked my
          love for programming when I first tried building a simple website.
          Since then, I’ve continued learning and now focused as a Fullstack
          Developer with a strong interest in Next.js, Prisma, and cloud
          integrations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl text-center sm:text-left mb-3 sm:mb-5 md:mb-9"
        >
          For me, being a developer isn’t just about writing code—it’s about
          creating solutions that people can actually use. I always strive to
          build applications that are clean, scalable, and impactful.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-2xl max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl text-center sm:text-left mb-3 sm:mb-5 md:mb-9"
        >
          Outside of coding, I channel my passion through sports, especially
          weightlifting and martial arts. Through sports, I’ve learned
          discipline, consistency, and focus—values I carry into my programming
          work as well. 🚀
        </motion.p>
      </motion.div>
    </section>
  );
}
