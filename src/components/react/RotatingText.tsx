import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  words: string[];
  interval?: number;
  className?: string;
};

/**
 * Cycles through words with a soft blur/slide transition (Framer Motion).
 * An invisible sizer reserves the widest word's width so the headline never
 * reflows as it rotates. Falls back to a static first word under reduced motion.
 */
export default function RotatingText({ words, interval = 2400, className = "" }: Props) {
  const [i, setI] = useState(0);
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), words[0] ?? "");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || words.length <= 1) return;
    const id = window.setInterval(
      () => setI((p) => (p + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-grid text-left align-bottom ${className}`}>
      {/* width reserver — no reflow between words */}
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <span className="col-start-1 row-start-1 overflow-hidden" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[i]}
            className="block whitespace-nowrap text-accent"
            initial={{ y: "0.5em", opacity: 0, filter: "blur(5px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-0.5em", opacity: 0, filter: "blur(5px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {words[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
