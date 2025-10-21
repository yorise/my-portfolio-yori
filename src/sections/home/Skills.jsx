"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Palette, Rocket } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-chart-2 mb-4" />,
      title: "Frontend Development",
      items: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      icon: <Database className="w-8 h-8 text-chart-2 mb-4" />,
      title: "Backend Development",
      items: ["Node.js", "REST APIs", "MySQL, Prisma"],
    },
    {
      icon: <Palette className="w-8 h-8 text-chart-2 mb-4" />,
      title: "UI/UX Design",
      items: ["Figma", "Responsive Design", "User Experience"],
    },
    {
      icon: <Rocket className="w-8 h-8 text-chart-2 mb-4" />,
      title: "Deployment & DevOps",
      items: ["Netlify", "Cloud Services", "Vercel"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col items-center justify-center py-16 px-4"
    >
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all h-full border border-neutral-800">
              <CardContent className="p-6 flex flex-col h-full text-center">
                <div className="flex justify-center">{skill.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 ">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {skill.items.join(", ")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
