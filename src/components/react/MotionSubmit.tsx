import { motion } from "framer-motion";

/** Framer Motion submit button — real <button type="submit"> so the form's
 *  own submit handler still fires. */
export default function MotionSubmit({ label }: { label: string }) {
  return (
    <motion.button
      type="submit"
      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-mono text-sm font-semibold text-accent-foreground"
      initial={false}
      whileHover={{ y: -3, boxShadow: "0 16px 40px -12px rgba(34,197,94,0.6)" }}
      whileTap={{ scale: 0.97 }}
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
    </motion.button>
  );
}
