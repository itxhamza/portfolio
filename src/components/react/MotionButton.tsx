import { motion } from "framer-motion";

type Props = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  full?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-mono text-sm font-semibold";
const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-accent text-accent-foreground",
  ghost: "border border-border-strong bg-card/50 text-foreground",
};

/** Framer Motion CTA with spring hover/tap physics. */
export default function MotionButton({
  href,
  label,
  variant = "primary",
  external = false,
  full = false,
}: Props) {
  return (
    <motion.a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`${base} ${styles[variant]} ${full ? "w-full sm:w-auto" : ""}`}
      initial={false}
      whileHover={{
        y: -3,
        boxShadow:
          variant === "primary"
            ? "0 16px 40px -12px rgba(34,197,94,0.6)"
            : "0 12px 30px -14px rgba(0,0,0,0.7)",
      }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
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
