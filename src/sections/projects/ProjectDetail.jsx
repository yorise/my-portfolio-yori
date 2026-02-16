"use client";

import Gallery from "@/components/Gallery";
import { motion } from "framer-motion";

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <div className="text-center py-20 text-2xl text-red-500">
        Project not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 md:px-12">
      {/* Back Link */}
      <div className="mb-6 hidden lg:block">
        <a
          href="/projects"
          className="text-chart-2 hover:underline text-lg sm:text-xl font-semibold"
        >
          ← Back to Projects
        </a>
      </div>

      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          {project.title}
          <span className="text-chart-2">.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl border border-gray-300 overflow-hidden mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Detail + Content Sections */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Sticky Info Card */}
        <motion.div
          className="border border-chart-2 rounded-xl w-full lg:w-[30%] self-start p-6 mb-6 lg:mb-0 lg:sticky lg:top-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex justify-between text-sidebar-ring text-sm">
            <span>Tools</span>
            <span>Year</span>
          </div>
          <div className="flex justify-between mt-1 mb-3">
            <span className="font-semibold text-lg">{project.tools}</span>
            <span className="font-semibold text-lg">{project.year}</span>
          </div>
          <div>
            <span className="text-sidebar-ring text-sm">Type</span>
            <p className="font-semibold text-lg mt-1">{project.type}</p>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="w-full lg:w-[70%] flex flex-col gap-10">
          {[
            { title: "About Project", delay: 0.4, content: project.about },
            { title: "Challenges", delay: 0.5, content: project.challenges },
            { title: "Results", delay: 0.6, content: project.results },
          ]
            .filter((section) => section.content && section.content.length > 0)
            .map((section, idx) => (
              <motion.div
                key={idx}
                className="pb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: section.delay }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  {section.title}
                </h2>
                {section.content.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg md:text-xl leading-relaxed mb-4"
                  >
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}
        </div>
      </div>

      {/* Gallery */}
      {project.photos && project.photos.length > 0 && (
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Highlight
          </h1>
          <Gallery items={project.photos} />
        </motion.div>
      )}
    </div>
  );
}
