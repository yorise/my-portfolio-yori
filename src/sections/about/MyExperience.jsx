"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MyExperience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const invertedY = useTransform(smoothY, [0, 1], [0, 1]);

  const experiences = [
    {
      id: "01",
      role: "Student",
      company: "SMA A. Wahid Hasyim",
      description:
        "Completed high school education with a focus on science and technology. Developed early interest in web development and digital innovation through extracurricular activities and personal projects.",
    },
    {
      id: "02",
      role: "Student",
      company: "CEP CCIT-FTUI",
      description:
        "Studied Information Technology under an international program combining academic learning and industry-based training. Gained foundational skills in programming, databases, and software engineering.",
    },
    {
      id: "03",
      role: "Intern",
      company: "Pojok Satu Indonesia",
      description:
        "Worked as a Web Developer Intern focusing on building Kontenova, a Learning Management System (LMS) for managing courses and modules. Developed the admin dashboard and implemented core features for content and user management using modern web technologies.",
    },
    {
      id: "04",
      role: "Student",
      company: "Trilogi University",
      description:
        "Currently pursuing a degree in Informatics Engineering. Expanding knowledge in software development, system architecture, and UI/UX design while working on personal and collaborative web projects.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-12 text-left w-full "
      >
        My Experience & Education<span className="text-chart-2">.</span>
      </motion.h2>

      <div className="relative pl-0 sm:pl-16">
        {/* Timeline */}
        <motion.div
          className="absolute right-6 sm:left-10 top-0 w-[3px] md:w-2 h-full bg-chart-2 rounded-full origin-top pointer-events-none"
          style={{ scaleY: invertedY }}
        />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col-reverse sm:flex-row items-start gap-6 sm:gap-8"
            >
              {/* Number */}
              <div className="flex-shrink-0 text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground w-16 sm:w-20">
                {exp.id}
              </div>

              {/* Content */}
              <div className="max-w-full sm:max-w-3xl">
                {exp.role && (
                  <p className="text-chart-2 font-semibold mb-2 sm:mb-3 text-lg sm:text-xl">
                    {exp.role}
                  </p>
                )}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                  {exp.company}
                </h3>
                <p className="text-sidebar-ring text-base sm:text-lg md:text-xl leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
