import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
      {(title || eyebrow) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {eyebrow && (
            <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
          )}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
