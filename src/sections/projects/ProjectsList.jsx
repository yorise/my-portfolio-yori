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
    <section ref={containerRef} className="pt-24 px-6 max-w-6xl mx-auto">
      {/* Landing animation for title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-8"
      >
        My <span className="text-chart-2">Best</span> Creations.
      </motion.h1>

      <div className="relative">
        {[...projects].reverse().map((project, index) => {
          return (
            // Landing animation for each card
            <motion.div
              key={index}
              style={{ y: 0 }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="sticky top-27 mb-32  h-full"
            >
              <Link href={`/projects/${slugify(project.title)}`}>
                <motion.div
                  whileHover={{
                    borderColor: "#009689ff",
                    borderWidth: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  className="bg-card rounded-xl border border-sidebar-ring overflow-hidden cursor-pointer group"
                >
                  <CardContent className="p-0 ">
                    <div className="w-full h-[400px] md:h-[500px] border-b border-sidebar-ring overflow-hidden">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      />
                      <div className="absolute rounded-xl inset-0 bg-black/40 flex items-center justify-center opacity-0 group hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xl md:text-2xl font-semibold">
                          See More
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 p-6 min-h-[15rem] flex flex-col">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        {project.title}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl leading-relaxed flex-grow">
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
        <div style={{ height: projects.length * 350 }} />
      </div>
    </section>
  );
}
