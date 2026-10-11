import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import Section from "./Section";
import { projects, moreProjects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group glass relative overflow-hidden rounded-2xl p-6 ${
              i === 0 ? "md:col-span-2" : ""
            }`}
          >
            <span
              className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition group-hover:opacity-40"
              style={{ background: p.accent }}
            />
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <ArrowUpRight
                className="text-slate-400 transition group-hover:text-accent"
                size={22}
              />
            </div>
            <p className="mb-3 text-slate-600 dark:text-slate-300">{p.blurb}</p>
            {p.role && (
              <p className="mb-3 flex items-start gap-2 text-sm font-medium text-accent">
                <Users size={15} className="mt-0.5 shrink-0" />
                <span>{p.role}</span>
              </p>
            )}
            <ul className="mb-4 space-y-1.5">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm text-slate-500 dark:text-slate-400"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: p.accent }}
                  />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <h3 className="mb-5 mt-14 font-display text-xl font-semibold text-slate-500 dark:text-slate-400">
        More projects
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group glass flex flex-col rounded-xl p-5"
          >
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-display font-semibold">{p.name}</h4>
              <ArrowUpRight
                className="text-slate-400 transition group-hover:text-accent"
                size={18}
              />
            </div>
            <p className="mb-3 flex-1 text-sm text-slate-600 dark:text-slate-300">
              {p.blurb}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
