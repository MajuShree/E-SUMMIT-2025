import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import nebulaBackground from "@/assets/nebula-bg.jpg";
import AnimatedText from "./AnimatedText";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula Background with parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${nebulaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
          scale,
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/10 via-background/30 to-background" />
      
      {/* Enhanced animated stars with colors */}
      <div className="absolute inset-0 z-[2]">
        {[...Array(100)].map((_, i) => {
          const colors = ['bg-cosmic-purple', 'bg-cosmic-cyan', 'bg-cosmic-pink', 'bg-foreground'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${randomColor}`}
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(0.5px)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-6xl mx-auto perspective-1000"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="preserve-3d"
        >
          <h1 className="text-7xl md:text-9xl font-orbitron font-black mb-8 leading-tight">
            <span className="block text-gradient-cosmic glow-cosmic">
              <AnimatedText text="Canara BIT's" delay={0.5} />
            </span>
            <span className="block text-gradient-cosmic glow-cosmic mt-2">
              <AnimatedText text="E Summit 2025" delay={0.8} />
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-4xl font-grotesk font-light">
            powered by{" "}
            <motion.span 
              className="font-bold text-secondary glow-cyan inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Unstop
            </motion.span>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-10 h-10 text-cosmic-cyan"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;