export const variantAnimation1 = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const variantAnimation2 = {
  hidden: { x: 500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const variantContainer = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const popupContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.2,
      duration: 0.25,
    },
  },
};

export const popupAnimation = {
  hidden: {
    scale: 0,
    y: 50,
    opacity: 0,
  },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

export const circleAnimation = {
  hidden: {
    rotate: 0,
    scale: 0,
    opacity: 0,
  },
  visible: {
    rotate: 360,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

export const titleAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
  exit:{
    opacity: 0,
    scale:0,
  }
};
