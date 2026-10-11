import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { projects } from "../data";

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
            <p className="mb-4 text-slate-600 dark:text-slate-300">{p.blurb}</p>
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
    </Section>
  );
}
