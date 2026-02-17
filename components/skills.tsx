"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

interface SkillCategory {
  name: string;
  color: string;
  hoverColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Engineering",
    color: "bg-primary/10 text-primary",
    hoverColor: "hover:bg-primary/20",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Git",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    name: "AI / ML",
    color: "bg-secondary/10 text-secondary",
    hoverColor: "hover:bg-secondary/20",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "NLP",
      "Computer Vision",
      "RAG Systems",
      "Prompt Engineering",
      "Hugging Face",
    ],
  },
  {
    name: "Research & Design",
    color: "bg-accent/80 text-foreground",
    hoverColor: "hover:bg-accent",
    skills: [
      "User Research",
      "UX Design",
      "Figma",
      "A/B Testing",
      "Qualitative Analysis",
      "Academic Writing",
      "Data Visualization",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Skills"
          title="Tools & Technologies"
          description="The technologies and methodologies I work with regularly across engineering, AI, and research."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-10"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={groupVariants}>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${category.color} ${category.hoverColor} cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
