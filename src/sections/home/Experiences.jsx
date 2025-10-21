"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const experiences = {
  PojokSatu: {
    label: "Pojok Satu",
    role: "Web Developer as Intern @ Pojok Satu",
    period: "June 2025 - September 2025",
    details: [
      "Developed an admin dashboard for Kontenova, a Learning Management System (LMS) used by internship content creators at Pojok Satu Indonesia.",
      "Built core features for course and module management, enabling admins to create and organize learning content efficiently.",
      "Implemented responsive UI components and backend integration for dynamic content updates using modern web technologies such as next.js.",
    ],
  },
  PersonalProject: {
    label: "Personal Project",
    role: "Fullstack Developer (Independent Project)",
    period: "Present",
    details: [
      "Building a fullstack web application focused on modern design and scalability using Next.js, Prisma, and Tailwind CSS.",
      "Implementing authentication, course management, and content editing features to enhance the learning experience.",
      "Experimenting with deployment workflows using Vercel and optimizing database queries for better performance.",
    ],
  },
};

export default function Experience() {
  const [selected, setSelected] = useState(
    Object.keys(experiences).slice(-1)[0]
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="experience"
      className="
        flex flex-col items-center px-4 py-16
        bg-primary text-primary-foreground
        dark:bg-foreground dark:text-primary-foreground
      "
      data-navbar="invert"
    >
      {/* Title */}
      <div className="w-full max-w-6xl text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-12"
        >
          Experience<span className="text-chart-2">.</span>
        </motion.h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Sidebar / Tabs */}
        <motion.ul
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="flex md:flex-col gap-4 md:gap-6 text-lg font-medium border-l-2 border-border pl-4 overflow-x-auto md:overflow-visible"
        >
          {Object.keys(experiences)
            .reverse()
            .map((company) => (
              <li
                key={company}
                className={`cursor-pointer whitespace-nowrap transition-colors ${
                  selected === company
                    ? "text-chart-2 font-bold relative"
                    : "text-primary-foreground hover:text-chart-2"
                }`}
                onClick={() => setSelected(company)}
              >
                {experiences[company].label}
              </li>
            ))}
        </motion.ul>

        {/* Detail Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
          className="md:col-span-3 relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold">
                {experiences[selected].role}
              </h3>
              <p className="opacity-80">{experiences[selected].period}</p>
              <ul className="list-disc pl-6 space-y-2 text--primary-foreground">
                {experiences[selected].details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
