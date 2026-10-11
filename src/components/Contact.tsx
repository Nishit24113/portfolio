import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Section from "./Section";
import { profile } from "../data";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let's build something">
      <div className="glass rounded-2xl p-8 md:p-12 text-center">
        <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-300">
          I'm open to Software Engineering, AI/ML, and Data roles. Have a problem
          worth solving or a team to join? I'd love to hear from you.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-full bg-accent px-8 py-4 font-medium text-white transition hover:bg-accent-soft"
        >
          Say hello
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 transition hover:text-accent"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {profile.location}
          </span>
        </div>
      </div>
    </Section>
  );
}
