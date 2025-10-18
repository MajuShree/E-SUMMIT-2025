import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Sparkles from "./Sparkles.tsx";

const heroParts: string[] = [
  "Nikshtara",
  "X",
  "BIT'S E Summit 25",
  "powered by Unstop",
  "presented by iedc",
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
  const [displayed, setDisplayed] = useState<string[]>(["", "", "", "", ""]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [charIdx, setCharIdx] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const particles = useMemo(() => generateParticles(isMobile ? 20 : 50), [isMobile]);
  const stars = useMemo(() => generateParticles(isMobile ? 50 : 100), [isMobile]);

  useEffect(() => {
    if (currentLine < heroParts.length) {
      if (charIdx <= heroParts[currentLine].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => {
            const updated = [...prev];
            updated[currentLine] = heroParts[currentLine].slice(0, charIdx);
            return updated;
          });
          setCharIdx((idx) => idx + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setCurrentLine((line) => line + 1);
          setCharIdx(0);
        }, 400);
      }
    } else {
      setDone(true);
    }
  }, [currentLine, charIdx]);

  useEffect(() => {
    if (done) {
      const interval = setInterval(() => setShowCursor((c) => !c), 500);
      return () => clearInterval(interval);
    }
  }, [done]);

  function highlightUnstop(line: string) {
    const idx = line.indexOf("Unstop");
    if (idx === -1) return line;
    return (
      <>
        {line.slice(0, idx)}
        <span className="text-cosmic-cyan font-bold">{line.slice(idx, idx + 6)}</span>
        {line.slice(idx + 6)}
      </>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-8 bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/30 via-cosmic-blue/20 to-cosmic-pink/30 animate-pulse-glow" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cosmic-cyan/20 via-transparent to-cosmic-orange/20" />
      </div>

      {/* Nebula particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className={`absolute rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-pink ${
            isMobile ? "blur-sm" : "blur-xl"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: isMobile ? [0, -10, 0] : [0, -30, 0],
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

      {/* Sparkles */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-6 left-6 md:top-20 md:left-20"
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-cosmic-cyan" />
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6 md:bottom-20 md:right-20"
            animate={{ y: [0, 20, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-10 h-10 md:w-16 md:h-16 text-cosmic-pink" />
          </motion.div>
        </>
      )}

      {/* Main text */}
      <div className="z-10 w-full px-4 sm:px-8">
        <h1 className="text-center leading-tight perspective-1000">
          {displayed.map((line, idx) => {
            const sizeClasses = [
              "text-xl sm:text-2xl md:text-5xl lg:text-6xl",
              "text-lg sm:text-3xl md:text-6xl lg:text-7xl",
              "text-base sm:text-2xl md:text-5xl lg:text-6xl",
              "text-sm sm:text-xl md:text-3xl lg:text-4xl",
              "text-xs sm:text-lg md:text-2xl lg:text-3xl",
            ];

            const isWhiteGlowLine = idx <= 2; // First 3 lines: Nikshtara, X, BIT'S E Summit 25
            const content = idx === 3 ? highlightUnstop(line) : line;

            return (
              <motion.span
                key={idx}
                className={`block font-orbitron font-bold preserve-3d mb-2 ${
                  sizeClasses[idx]
                } ${
                  isWhiteGlowLine
                    ? "text-white drop-shadow-[0_0_15px_#ffffffb3]"
                    : "text-gradient-cosmic glow-cosmic"
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.2 }}
              >
                {content}
                {currentLine === idx && showCursor && (
                  <span className="animate-blink">|</span>
                )}
              </motion.span>
            );
          })}
        </h1>
      </div>

      {/* Bottom gradient */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${
          isMobile ? "h-16" : "h-32"
        } bg-gradient-to-t from-background to-transparent`}
      />
    </div>
  );
}
