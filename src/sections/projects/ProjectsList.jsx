"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { useRef } from "react";
import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { projects } from "@/lib/projects";

export default function ProjectsList() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-6xl mx-auto">
      {/* Landing animation for title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-8"
      >
        My <span className="text-chart-2">Best</span> Creations
      </motion.h1>

      <div className="relative">
        {projects.map((project, index) => {
          const yOffset = useTransform(
            scrollYProgress,
            [0, 1],
            [index * 60, index * 20]
          );
          const scale = useTransform(
            scrollYProgress,
            [0, 1],
            [1 - index * 0.05, 1 - index * 0.02]
          );

          return (
            // Landing animation for each card
            <motion.div
              key={index}
              style={{ y: yOffset, scale }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="sticky top-24 mb-32"
            >
              <Link href={`/projects/${slugify(project.title)}`}>
                <motion.div
                  whileHover={{
                    borderColor: "#009689ff",
                    borderWidth: 1,
                    scale: 1.01,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-6 p-6">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-700 text-xl md:text-2xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
        {/* Spacer agar bisa scroll penuh */}
        <div style={{ height: projects.length * 400 }} />
      </div>
    </section>
  );
}
