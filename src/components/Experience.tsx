import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've worked">
      <div className="relative border-l border-slate-200 pl-6 dark:border-white/10">
        {experience.map((job) => (
          <div key={job.company} className="mb-10 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">
                {job.role}{" "}
                <span className="text-accent">· {job.company}</span>
              </h3>
              <span className="font-mono text-sm text-slate-500 dark:text-slate-400">
                {job.period}
              </span>
            </div>
            <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
              {job.location}
            </p>
            <ul className="space-y-2">
              {job.points.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
