import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * A wrapper component that animates its children when they come into view.
 */
export function AnimatedElement({
  children,
  variants,
  className = "",
  delay = 0,
  duration = 0.5,
  triggerOnce = true,
  threshold = 0.1,
}: {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  threshold?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={variants}
      className={className}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A component that applies staggered animations to its children when scrolled into view.
 */
export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
  delayChildren = 0.2,
  triggerOnce = true,
  threshold = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  delayChildren?: number;
  triggerOnce?: boolean;
  threshold?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * A component that applies hover animation to its children.
 */
export function HoverElement({
  children,
  variants,
  className = "",
}: {
  children: ReactNode;
  variants: Variants;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
