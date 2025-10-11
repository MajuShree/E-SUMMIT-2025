import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText, { AnimatedWord } from "./AnimatedText";

const SponsorsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const sponsors = [
    { name: "Sponsor 1", size: "small" },
    { name: "Sponsor 2", size: "small" },
    { name: "Sponsor 3", size: "small" },
    { name: "Sponsor 4", size: "small" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-background to-card overflow-hidden">
      {/* Enhanced twinkling stars background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        {[...Array(150)].map((_, i) => {
          const colors = ['bg-cosmic-purple', 'bg-cosmic-cyan', 'bg-cosmic-pink', 'bg-cosmic-orange'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${randomColor}`}
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 2, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>

      <div className="relative z-10 text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 perspective-1000"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="preserve-3d"
          >
            <h2 className="text-6xl md:text-9xl font-orbitron font-black mb-6 text-gradient-cosmic glow-cosmic leading-tight">
              <AnimatedText text="Our Sponsors" delay={0.3} />
            </h2>
          </motion.div>
          <motion.div 
            className="h-2 w-48 bg-gradient-to-r from-cosmic-purple via-cosmic-cyan to-cosmic-pink mx-auto rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Title Sponsor with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 perspective-1000"
        >
          <motion.p 
            className="text-sm font-grotesk text-cosmic-cyan uppercase tracking-[0.3em] mb-6 glow-cyan"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Title Sponsor
          </motion.p>
          <motion.h3 
            className="text-7xl md:text-[10rem] font-orbitron font-black text-gradient-cosmic glow-cosmic leading-none preserve-3d"
            whileHover={{ 
              scale: 1.1, 
              rotateY: 10,
              textShadow: "0 0 80px rgba(139, 92, 246, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <AnimatedText text="Canara" delay={0.7} staggerDelay={0.05} />
          </motion.h3>
        </motion.div>

        {/* Powered by Unstop with intense glow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-24"
        >
          <motion.p className="text-4xl md:text-5xl font-grotesk font-light">
            powered by{" "}
            <motion.span 
              className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cosmic-cyan to-cosmic-blue inline-block glow-cyan"
              whileHover={{ 
                scale: 1.15, 
                rotate: -3,
                textShadow: "0 0 60px rgba(59, 130, 246, 1)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <AnimatedWord delay={0.8}>Unstop</AnimatedWord>
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Other Sponsors with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 1 + index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                scale: 1.15, 
                rotateY: 15,
                z: 50,
                boxShadow: "0 20px 60px -10px rgba(139, 92, 246, 0.6)",
              }}
              className="bg-card/30 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-8 flex items-center justify-center aspect-square perspective-1000 preserve-3d group relative overflow-hidden"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 via-cosmic-cyan/20 to-cosmic-pink/20 rounded-3xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <p className="text-xl font-grotesk font-bold text-center relative z-10 text-foreground group-hover:text-cosmic-cyan transition-colors">
                {sponsor.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
