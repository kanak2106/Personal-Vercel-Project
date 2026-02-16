"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const experiences = [
  {
    period: "2024 -- Present",
    role: "Research Assistant -- Human-AI Interaction",
    company: "University Research Lab",
    description:
      "Conducting research on human-AI collaboration, designing user studies, and building prototypes that explore novel interaction paradigms for intelligent systems.",
    tags: ["User Research", "Prototyping", "Python", "AI/ML"],
  },
  {
    period: "2023 -- 2024",
    role: "Software Engineer Intern",
    company: "Tech Company",
    description:
      "Built and maintained full-stack features for a large-scale SaaS platform, improving performance by 35% and contributing to the design system.",
    tags: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    period: "2022 -- 2023",
    role: "Teaching Assistant -- Computer Science",
    company: "University",
    description:
      "Led discussion sections and labs for 200+ students, developed course materials, and mentored students in algorithms and data structures.",
    tags: ["Education", "Algorithms", "Mentoring"],
  },
  {
    period: "2021 -- 2022",
    role: "Freelance Developer",
    company: "Independent",
    description:
      "Designed and developed responsive web applications for small businesses, from initial concept through deployment and maintenance.",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Vercel"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="Experience"
          title="My Journey So Far"
          description="A timeline of the roles and experiences that have shaped my perspective and skills."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-accent/20 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex flex-col gap-4 pl-12 md:pl-0 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />

                {/* Period label */}
                <div
                  className={`flex items-start md:w-1/2 ${
                    index % 2 === 0
                      ? "md:justify-end md:pr-12"
                      : "md:justify-start md:pl-12"
                  }`}
                >
                  <span className="text-sm font-medium tracking-wide text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                {/* Content card */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="glass-card group rounded-2xl p-6 shadow-md shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                    <h3 className="text-base font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {exp.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
