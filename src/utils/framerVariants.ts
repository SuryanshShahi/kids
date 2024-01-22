import { Variants } from 'framer-motion';
import useWindowDimensions from './useWindowDimension';
export const footerVariants: { [x: string]: Variants } = {
  TREE: {
    hidden: { opacity: 0, rotate: 180, top: 100, position: 'absolute' },
    show: {
      rotate: 0,
      opacity: 1,
      position: 'absolute',
      top: -35,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  },
  CAT: {
    hidden: { opacity: 0, top: -800, position: 'absolute' },
    show: {
      top: -110,
      opacity: 1,
      position: 'absolute',
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
  },

  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

export const ComeOverVariants: { [x: string]: Variants } = {
  PEOPLE: {
    hidden: { left: 0, position: 'relative' },
    show: {
      left: 50,
      position: 'relative',
      transition: { duration: 4, staggerChildren: 0.5 },
    },
  },
  BEE: {
    hidden: { left: 150, position: 'relative' },
    show: {
      left: 0,
      position: 'relative',
      transition: { duration: 4, staggerChildren: 0.5 },
    },
  },
  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  NO_ANIMATION: {},
};

export const AgesVariants: { [x: string]: Variants } = {
  RIGHT: {
    hidden: { right: -150, position: 'relative' },
    show: {
      right: 0,
      position: 'relative',
      transition: { duration: 4, staggerChildren: 0.5 },
    },
  },
  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  NO_ANIMATION: {},
};
export const WeVariants: { [x: string]: Variants } = {
  RIGHT: {
    hidden: { right: -80, position: 'relative' },
    show: {
      right: 0,
      position: 'relative',
      transition: { duration: 2, staggerChildren: 0.5 },
    },
  },
  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};
export const HeroVariants: { [x: string]: Variants } = {
  BIRD: {
    hidden: {
      height: 0,
      width: 0,
      opacity: 0,
      top: -350,

      position: 'relative',
    },
    show: {
      opacity: 1,
      height: 69,
      width: 90,
      top: 0,
      position: 'relative',
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  },
  IMAGE: {
    hidden: {
      height: 0,
      width: 0,
      opacity: 0,
      top: -350,
      position: 'relative',
    },
    show: {
      opacity: 1,
      height: 192,
      width: 373,
      top: 0,
      position: 'relative',
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
  },
  BUTTON: {
    hidden: {
      height: 0,
      width: 0,
      opacity: 0,
      left: -60,
      position: 'relative',
    },
    show: {
      opacity: 1,
      left: '120px',
      position: 'relative',
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
  },
  TEXT: {
    hidden: {
      height: 0,
      opacity: 0,
      top: -250,
      position: 'relative',
    },
    show: {
      top: 0,
      opacity: 1,
      height: '100%',
      width: 'fit-content',
      position: 'relative',
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
  },
  DOTS: {
    hidden: {
      height: 0,
      width: 0,
      opacity: 0,
      top: -1000,
      position: 'relative',
    },
    show: {
      opacity: 1,
      height: 445,
      width: 771,
      top: -1000,
      position: 'relative',
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
  },
  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

// const { width } = useWindowDimensions();
export const HeadingVariants: { [x: string]: Variants } = {
  TEXT: {
    hidden: {
      fontSize:
        typeof window !== 'undefined' && window?.innerWidth > 1024
          ? '240px'
          : '120px',
    },
    show: {
      fontSize:
        typeof window !== 'undefined' && window?.innerWidth > 1024
          ? '201px'
          : '80px',
      transition: { duration: 3, staggerChildren: 0.5 },
    },
  },
  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  NO_ANIMATION: {},
};
