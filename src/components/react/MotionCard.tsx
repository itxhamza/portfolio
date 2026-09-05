import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
  lift?: number;
};

/**
 * Framer Motion hover wrapper — springy lift on hover, subtle press on tap.
 * Wrap Astro-rendered card markup; entrance/scroll reveal is handled by GSAP
 * on an outer element, so this only owns the interaction transform.
 */
export default function MotionCard({ children, className = "", lift = 6 }: Props) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileHover={{ y: -lift }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
