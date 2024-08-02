export const routeVariants = {
  initial: {
    x: "-50%",
    opacity: 0,
  },
  final: {
    x: "0",
    opacity: 1,
  },
  exit: {
    opacity: 0,
    x: "50%",
  },
  transition: {
    type: "spring",
    mass: 0.6,
    stiffness: 85,
    velocity: 1,
  },
}

export const circleVariants = {
  show: {
    scale: 1,
  },
  hide: {
    scale: 0,
    transition: {
      type: "spring",
      mass: 0.8,
      velocity: 1,
    },
  },
}
