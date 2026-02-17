"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {"Let's Work Together"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {"I'm always open to discussing new projects, research collaborations, or just having a conversation about technology and design. Feel free to reach out."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8"
        >
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Say Hello
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
