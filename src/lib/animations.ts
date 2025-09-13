// Animation configurations based on TypeFive analysis and research
import { Variants } from 'framer-motion'

// Base animation timing from TypeFive
export const timing = {
  duration: 2,
  delay: 0.4,
  staggerDelay: 0.03,
  bounce: 0.1,
}

// Fade up animation (primary animation pattern from TypeFive)
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Stagger animation for text and list items
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: timing.staggerDelay,
      delayChildren: timing.delay,
    },
  },
}

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Scale animation for interactive elements
export const scaleOnHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

// Construction-specific animations
export const constructionBadge: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.2,
    },
  },
}

// Image reveal animation
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Smooth scroll-triggered animations
export const scrollFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Text animation variants
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.02,
    },
  },
}

export const characterReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

// Professional construction industry easing curves
export const easings = {
  smooth: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  professional: [0.25, 0.1, 0.25, 1],
  construction: [0.215, 0.61, 0.355, 1],
} as const

// Viewport animation settings for scroll-triggered animations
export const viewportSettings = {
  once: true,
  margin: "0px 0px -100px 0px",
  amount: 0.3,
} as const