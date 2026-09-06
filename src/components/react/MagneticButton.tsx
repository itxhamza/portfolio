import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  full?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-mono text-sm font-semibold";
const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-accent text-accent-foreground",
  ghost: "border border-border-strong bg-card/50 text-foreground",
};

/** CTA with a subtle magnetic pull toward the cursor (Framer Motion springs). */
export default function MagneticButton({
  href,
  label,
  variant = "primary",
  external = false,
  full = false,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 18, mass: 0.4 });

  const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v));

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    x.set(clamp((e.clientX - (r.left + r.width / 2)) * 0.3, 10));
    y.set(clamp((e.clientY - (r.top + r.height / 2)) * 0.3, 8));
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${base} ${styles[variant]} ${full ? "w-full sm:w-auto" : ""}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileHover={{
        boxShadow:
          variant === "primary"
            ? "0 18px 44px -12px rgba(34,197,94,0.6)"
            : "0 12px 30px -14px rgba(0,0,0,0.7)",
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {label}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </motion.a>
  );
}
