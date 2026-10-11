import Section from "./Section";
import { profile, education } from "../data";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-5">
        <p className="md:col-span-3 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.summary}
        </p>
        <div className="md:col-span-2 space-y-5">
          {education.map((e) => (
            <div key={e.school} className="glass rounded-xl p-5">
              <p className="font-display font-semibold">{e.degree}</p>
              <p className="text-sm text-accent">{e.school}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {e.period}
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {e.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
