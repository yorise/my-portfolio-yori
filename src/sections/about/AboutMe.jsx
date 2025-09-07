"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SkillsCarousel } from "@/components/Carousel";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];
  const Backend = [
    "Next.js",
    "Tailwind",
    "Framer Motion",
    "Prisma",
    "Next.js",
    "Tailwind",
    "Framer Motion",
    "Prisma",
  ];
  const Softskills = [
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center max-w-6xl mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 text-left w-full"
      >
        About <span className="text-chart-2">me.</span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-12 pl-4 border-l-4 border-chart-2"
      >
        Exploring design trends sparks new ideas for meaningful interfaces.
        Learning new tools drives better solutions. Sharing knowledge with the
        community fosters growth and collaboration.
      </motion.p>

      {/* Content grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* My Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">My Stack.</h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-6 bg-gray-300 rounded-2xl p-4 sm:p-6 shadow-sm overflow-hidden"
          >
            <SkillsCarousel items={Frontend} direction="ltr" speed={15} />
            <SkillsCarousel items={Backend} direction="rtl" speed={30} />
            <SkillsCarousel items={Softskills} direction="ltr" speed={25} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
