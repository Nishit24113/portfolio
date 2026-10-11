import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  dark,
  onToggle,
}: {
  dark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="glass flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-105"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
