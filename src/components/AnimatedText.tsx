import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

const AnimatedText = ({ text, className = "", delay = 0, staggerDelay = 0.03 }: AnimatedTextProps) => {
  const characters = text.split("");

  return (
    <span className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: delay + index * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

interface AnimatedWordProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedWord = ({ children, className = "", delay = 0 }: AnimatedWordProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 100, rotateX: -90 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default AnimatedText;