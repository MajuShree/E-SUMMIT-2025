import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const heroParts: string[] = [
  "Canara Bank Present's",
  "BIT's E Summit 2025",
  "powered by Unstop ",
  "presented by idec",
];

// Generate nebula particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));
};

export default function HeroSection() {
  const [displayed, setDisplayed] = useState<string[]>(["", "", "", ""]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [charIdx, setCharIdx] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(false);
  
  const particles = useMemo(() => generateParticles(50), []);
  const stars = useMemo(() => generateParticles(100), []);

  useEffect(() => {
    if (currentLine < heroParts.length) {
      if (charIdx <= heroParts[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayed((old) =>
            old.map((val, idx) =>
              idx === currentLine ? heroParts[currentLine].slice(0, charIdx) : val
            )
          );
          setCharIdx((idx) => idx + 1);
        }, 1);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setCurrentLine((l) => l + 1);
          setCharIdx(0);
        }, 100);
      }
    } else {
      setDone(true);
    }
  }, [currentLine, charIdx]);

  useEffect(() => {
    if (done) {
      const interval = setInterval(() => setShowCursor((c) => !c), 100);
      return () => clearInterval(interval);
    }
  }, [done]);

  function highlightUnstop(line: string) {
    const idx = line.indexOf("Unstop");
    if (idx === -1) return line;
    return (
      <>
        {line.slice(0, idx)}
        <span className="text-cyan-400">{line.slice(idx, idx + 6)}</span>
        {line.slice(idx + 6)}
      </>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/30 via-cosmic-blue/20 to-cosmic-pink/30 animate-pulse-glow" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cosmic-cyan/20 via-transparent to-cosmic-orange/20" />
      </div>

      {/* Nebula particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-pink blur-xl"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating sparkles */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-12 h-12 text-cosmic-cyan" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-16 h-16 text-cosmic-pink" />
      </motion.div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="text-center leading-tight perspective-1000">
          <motion.span 
            className="block font-orbitron font-bold mb-4 text-gradient-cosmic glow-cosmic text-5xl md:text-7xl lg:text-8xl preserve-3d"
            animate={{
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {displayed[0]}
            {currentLine === 0 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.span>
          <motion.span 
            className="block font-orbitron font-bold text-gradient-cosmic glow-cosmic text-4xl md:text-6xl lg:text-7xl preserve-3d"
            animate={{
              rotateY: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {displayed[1]}
            {currentLine === 1 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.span>
        </h1>
        
        <div className="w-full flex justify-center mt-8">
          <motion.div
            className="text-2xl md:text-3xl font-grotesk font-semibold text-cosmic-cyan glow-cyan"
            style={{ minWidth: "18ch", textAlign: "center" }}
            animate={{
              textShadow: [
                "0 0 30px rgba(59, 130, 246, 0.8)",
                "0 0 60px rgba(59, 130, 246, 1)",
                "0 0 30px rgba(59, 130, 246, 0.8)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {(currentLine > 1 || currentLine === 2) && (
              <>
                {currentLine === 2 ? highlightUnstop(displayed[2]) : highlightUnstop(heroParts[2])}
                {(currentLine === 2 || (currentLine === 3 && displayed[3] === "")) && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
              </>
            )}
          </motion.div>
        </div>
        
        <div className="w-full flex justify-center mt-4">
          <motion.div
            className="text-xl md:text-2xl font-grotesk font-semibold text-muted-foreground"
            style={{ minWidth: "13ch", textAlign: "center" }}
          >
            {(currentLine > 2 || currentLine === 3) && (
              <>
                {displayed[3]}
                {currentLine === 3 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                )}
                {done && (
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ..
                  </motion.span>
                )}
              </>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
