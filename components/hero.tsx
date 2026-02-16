"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16 lg:px-16"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-blob absolute top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
        <div className="animate-blob animation-delay-2000 absolute top-40 right-10 h-72 w-72 rounded-full bg-secondary/20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
        <div className="animate-blob animation-delay-4000 absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-accent/20 mix-blend-multiply blur-3xl filter lg:h-96 lg:w-96" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4 text-sm font-medium tracking-widest text-primary uppercase"
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="font-serif text-5xl leading-tight font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            <span className="text-balance">
              Kanak{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Saxena
              </span>
            </span>
          </h1>

          <p className="mt-4 text-lg font-medium text-muted-foreground md:text-xl">
            Bridging Human-AI Interaction, Software Engineering{" "}
            <br className="hidden sm:block" />
            {"& Product Thinking"}
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:max-w-md">
            I craft thoughtful digital experiences at the intersection of
            technology and human understanding. Passionate about building
            systems that are both intelligent and intuitive.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Right avatar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative flex-shrink-0"
        >
          {/* Gradient glow behind avatar */}
          <div
            className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
            <Image
              src="/images/avatar.jpg"
              alt="Portrait of Kanak Saxena"
              width={380}
              height={460}
              className="relative h-[360px] w-[300px] object-cover lg:h-[460px] lg:w-[380px]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
