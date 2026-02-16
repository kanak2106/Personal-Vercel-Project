"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { SectionHeading } from "./section-heading";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "AI Conversation Analyzer",
    description:
      "A tool that analyzes human-AI conversations to identify patterns in collaboration and communication breakdowns.",
    longDescription:
      "Built as part of my research in Human-AI Interaction, this tool processes conversation logs between users and LLMs to surface insights about communication patterns, prompt engineering effectiveness, and areas where AI responses could be improved. Features a React dashboard with real-time analytics and a Python backend for NLP processing.",
    tags: ["Python", "React", "NLP", "D3.js"],
    github: "#",
  },
  {
    title: "Smart Campus Navigator",
    description:
      "An accessible, AI-powered navigation app for university campuses with real-time indoor positioning.",
    longDescription:
      "Designed to help students, especially those with mobility challenges, navigate complex university buildings. Uses BLE beacons for indoor positioning and an AI model to predict congestion and suggest optimal routes. Includes voice navigation and screen reader support for full accessibility.",
    tags: ["Next.js", "TensorFlow.js", "BLE", "Accessibility"],
    link: "#",
    github: "#",
  },
  {
    title: "Collaborative Whiteboard",
    description:
      "A real-time collaborative whiteboard with AI-assisted drawing suggestions and shape recognition.",
    longDescription:
      "A full-stack web application enabling teams to brainstorm together in real time. Integrates WebSocket-based collaboration with AI features that recognize hand-drawn shapes, suggest layout improvements, and auto-organize sticky notes. Built for teams of up to 50 concurrent users.",
    tags: ["TypeScript", "WebSocket", "Canvas API", "Redis"],
    link: "#",
    github: "#",
  },
  {
    title: "Research Paper Summarizer",
    description:
      "An LLM-powered tool that generates structured summaries and key takeaways from academic papers.",
    longDescription:
      "Developed to streamline literature review workflows for researchers. Users can upload PDFs or paste arXiv links to get structured summaries including methodology, findings, limitations, and relevance scores. Uses retrieval-augmented generation to provide context-aware summaries.",
    tags: ["Python", "LangChain", "FastAPI", "React"],
    github: "#",
  },
  {
    title: "Micro-Interaction Library",
    description:
      "An open-source library of delightful UI micro-interactions built with Framer Motion and CSS.",
    longDescription:
      "A curated collection of 50+ reusable micro-interaction components for React. Each component is documented with live examples, accessibility notes, and performance benchmarks. The library focuses on subtle, purposeful animations that enhance UX without being distracting.",
    tags: ["Framer Motion", "React", "Storybook", "npm"],
    link: "#",
    github: "#",
  },
  {
    title: "Personal Knowledge Graph",
    description:
      "A visual tool for mapping and connecting personal notes, ideas, and research into an interactive knowledge graph.",
    longDescription:
      "Built as a personal productivity tool that transforms markdown notes into a navigable 3D knowledge graph. Uses NLP to auto-detect relationships between notes and suggests connections you might have missed. Features include full-text search, automatic tagging, and export to popular note-taking apps.",
    tags: ["Three.js", "Neo4j", "Next.js", "NLP"],
    github: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="px-6 py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            label="Projects"
            title="Selected Work"
            description="A selection of projects that showcase my skills across research, engineering, and design."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.button
                key={project.title}
                variants={cardVariants}
                onClick={() => setSelectedProject(project)}
                className="glass-card group cursor-pointer rounded-2xl p-6 text-left shadow-md shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative z-10 w-full max-w-lg rounded-2xl p-8 shadow-2xl shadow-primary/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>

              <h3 className="font-serif text-2xl font-bold text-foreground">
                {selectedProject.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {selectedProject.longDescription}
              </p>

              <div className="mt-6 flex gap-3">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:shadow-md"
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
