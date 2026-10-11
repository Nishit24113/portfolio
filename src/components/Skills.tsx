import Section from "./Section";
import { skills } from "../data";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="Tools I work with">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label} className="glass rounded-2xl p-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-accent">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-white/5 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
