"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      img: "/assets/images/logo.png",
      span: "md:row-span-2",
    },
    {
      title: "Project 2",
      img: "/assets/images/logo.png",
      span: "md:col-span-2",
    },
    { title: "Project 3", img: "/assets/images/logo.png", span: "" },
    {
      title: "Project 4",
      img: "/assets/images/logo.png",
      span: "md:row-span-2",
    },
    { title: "Project 5", img: "/assets/images/logo.png", span: "" },
    { title: "Project 6", img: "/assets/images/logo.png", span: "" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="projects"
      className="flex flex-col justify-center items-center py-16 px-4 sm:px-6 md:px-12"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center md:text-left"
      >
        Projects<span className="text-chart-2">.</span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: isInView ? index * 0.2 : 0,
            }}
            className={project.span}
          >
            <Card className="overflow-hidden rounded-xl shadow-md h-full">
              <CardContent className="p-0 h-full relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-lg sm:text-xl font-semibold transition-opacity">
                  {project.title}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-10"
      >
        <Button
          size="lg"
          className="cursor-pointer"
          onClick={() => (window.location.href = "/projects")}
        >
          See More Projects
        </Button>
      </motion.div>
    </section>
  );
}
