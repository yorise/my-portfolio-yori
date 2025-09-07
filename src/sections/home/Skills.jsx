"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skills = {
    "Web Design": ["UI/UX", "User Research", "Wireframing", "Prototyping"],
    Frontend: ["Next.js", "React.js", "Tailwind CSS", "Java Script"],
    Backend: ["Node.js", "Prisma ORM", "MySQL", "REST API"],
    Tools: ["Git", "Figma", "Postman", "Vercel"],
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Title */}
      <div className="w-full max-w-6xl text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-12"
        >
          Skills<span className="text-chart-2">.</span>
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {Object.keys(skills).map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">
                  {category}
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-700 flex-1">
                  {skills[category].map((skill) => (
                    <li
                      key={skill}
                      className="bg-gray-100 rounded-lg px-3 py-2 text-xs md:text-sm text-center hover:bg-chart-2 hover:text-white transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
