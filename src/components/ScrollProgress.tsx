import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 170, damping: 34, mass: 0.25 });

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
