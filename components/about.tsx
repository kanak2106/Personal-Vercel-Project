"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Lightbulb } from "lucide-react";
import { SectionHeading } from "./section-heading";

const capabilities = [
  {
    icon: Brain,
    title: "Human-AI Interaction & Research",
    description:
      "Exploring how humans and intelligent systems collaborate, with a focus on designing experiences that feel natural and augment human capabilities.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building robust, scalable applications with modern technologies. From full-stack development to system architecture and performance optimization.",
  },
  {
    icon: Lightbulb,
    title: "Product & Systems Thinking",
    description:
      "Approaching problems holistically, connecting user needs with technical possibilities to craft products that create meaningful impact.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About Me"
          title="Crafting at the Intersection"
          description="I believe the most impactful work happens where disciplines converge. My journey spans research, engineering, and design thinking."
        />

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex-1"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a deep curiosity for how technology shapes human experience, I
              have dedicated my career to building software and researching
              interactions that matter. Whether designing an AI-powered tool or
              architecting a distributed system, I bring the same rigor and
              empathy to every challenge.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My work is driven by the conviction that great technology should
              feel invisible -- seamlessly empowering the people who use it. I
              thrive in ambiguity, turning complex problems into elegant,
              human-centered solutions.
            </p>
          </motion.div>

          {/* Capability cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-1 flex-col gap-5"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="glass-card group cursor-default rounded-2xl p-6 shadow-md shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <cap.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
