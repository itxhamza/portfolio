import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  value: string; // e.g. "6+", "40+", "20+", "∞"
  label: string;
};

/** Count-up stat driven by Framer Motion, triggered when scrolled into view. */
export default function StatCounter({ value, label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState<string>(target === null ? value : `0${suffix}`);

  useEffect(() => {
    if (target === null) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Reduced motion: show the final value immediately, regardless of scroll.
    if (reduce) {
      setDisplay(`${target}${suffix}`);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, suffix]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl font-extrabold text-foreground sm:text-4xl">
        {display}
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
