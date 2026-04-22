import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedListProps {
  children: ReactNode[];
}

export default function AnimatedList({ children }: AnimatedListProps) {
  return (
    <>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
