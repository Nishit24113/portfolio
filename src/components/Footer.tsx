import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-center text-sm text-slate-400 dark:text-slate-500">
      <p>
        Designed & built by {profile.name} — React, Tailwind, and a hand-written
        generative canvas.
      </p>
    </footer>
  );
}
