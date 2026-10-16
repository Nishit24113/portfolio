import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "../data";
import headshot from "../assets/headshot.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6"
    >
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        {/* Text */}
        <div className="w-full md:flex-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm uppercase tracking-widest text-accent"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight md:text-6xl"
          >
            Hi, I'm <span className="gradient-text">{profile.name}</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-soft"
            >
              View my work
            </a>
            <div className="flex items-center gap-3">
              <IconLink href={profile.github} label="GitHub">
                <Github size={20} />
              </IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn">
                <Linkedin size={20} />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Email">
                <Mail size={20} />
              </IconLink>
            </div>
          </motion.div>
        </div>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent/40 to-cyan-400/30 blur-2xl" />
          <img
            src={headshot}
            alt="Nishit Patel"
            className="relative h-48 w-48 rounded-full object-cover object-top shadow-2xl ring-4 ring-white/10 md:h-64 md:w-64"
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:scale-105 hover:text-accent"
    >
      {children}
    </a>
  );
}
