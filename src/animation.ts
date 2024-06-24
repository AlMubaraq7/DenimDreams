export const routeVariants = {
  initial: {
    x: "-50%",
    opacity: 0,
  },
  final: {
    x: "0",
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.6,
      stiffness: 85,
      velocity: 1,
    },
  },
  exit: {
    opacity: 0,
  },
}
