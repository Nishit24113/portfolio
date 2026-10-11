import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({
  dark,
  onToggle,
}: {
  dark: boolean;
  onToggle: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="glass mx-auto mt-4 flex w-[92%] max-w-5xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#home" className="font-display text-lg font-bold">
          NP<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 transition hover:text-accent dark:text-slate-300"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggle} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 flex w-[92%] max-w-5xl flex-col gap-3 rounded-2xl px-5 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-600 transition hover:text-accent dark:text-slate-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
