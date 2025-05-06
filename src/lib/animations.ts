import type { Variants } from "framer-motion";

// Fade in animation (for sections, content, etc.)
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" | "none" = "up",
  delay = 0
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration: 0.4,
      },
    },
  };
};

// Stagger for grouped items (like skills, projects, etc.)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Slide in animation
export const slideIn = (
  direction: "up" | "down" | "left" | "right",
  delay = 0
): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration: 0.5,
      },
    },
  };
};

// Text character reveal animation
export const textVariant = (delay = 0): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
      },
    },
  };
};

// Card hover animation
export const cardHoverVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0px 0px 0px rgba(128, 0, 128, 0)"
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 5px 15px rgba(128, 0, 128, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
};

// Skill bar animation variants
export const skillBarVariants: Variants = {
  hidden: {
    width: 0
  },
  visible: (width: number) => ({
    width: `${width}%`,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  })
};
