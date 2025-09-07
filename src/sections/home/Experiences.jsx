"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const experiences = {
  PojokSatu: {
    label: "Pojok Satu",
    role: "Intern @ Pojok Satu",
    period: "June 2025 - Present",
    details: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
      "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
    ],
  },
  Soon: {
    label: "Soon",
    role: "Software Engineer @",
    period: "June 2025 - June 2025",
    details: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam animi possimus, necessitatibus saepe beatae autem, nisi reiciendis amet maiores optio vitae. Id enim voluptatem tenetur consequatur eveniet voluptate aliquam eos!",
    ],
  },
  Past: {
    label: "Past",
    role: "Frontend Developer @",
    period: "June 2024 - June 2024",
    details: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore, impedit ab sequi dolores consequatur laboriosam, quasi, commodi quas nostrum expedita? Porro maxime modi odio officia iure aliquam similique ex.",
    ],
  },
};

export default function Experience() {
  const [selected, setSelected] = useState("PojokSatu");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="experience"
      className="flex flex-col items-center px-4 py-16"
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
          className="flex md:flex-col gap-4 md:gap-6 text-lg font-medium border-l-2 border-gray-200 pl-4 overflow-x-auto md:overflow-visible"
        >
          {Object.keys(experiences).map((company) => (
            <li
              key={company}
              className={`cursor-pointer whitespace-nowrap transition-colors ${
                selected === company
                  ? "text-chart-2 font-bold relative"
                  : "text-gray-600 hover:text-gray-900"
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
              <p className="text-gray-500">{experiences[selected].period}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
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
