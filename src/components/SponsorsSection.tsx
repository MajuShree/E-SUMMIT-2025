import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedWord } from "./AnimatedText";
import { Building2, Sparkles, Zap, Target } from "lucide-react";
import { useRef, useMemo } from "react";

const sponsors = [

  { name: "Unstop", tier: "Powered By", logo: "⚡", Icon: Zap, color: "from-cosmic-cyan to-cosmic-blue" },
  { name: "IEDC", tier: "Presented By", logo: "🎯", Icon: Target, color: "from-cosmic-purple to-cosmic-pink" },

];

const generateFloatingStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));
};

const SponsorsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const floatingStars = useMemo(() => generateFloatingStars(40), []);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity }}
      className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-background via-card to-background overflow-hidden perspective-1000"
    >
      {/* Dynamic gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: "linear-gradient(135deg, hsl(var(--cosmic-purple)), hsl(var(--cosmic-blue)))" }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: "linear-gradient(135deg, hsl(var(--cosmic-pink)), hsl(var(--cosmic-cyan)))" }}
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {floatingStars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.id % 4 === 0 ? "hsl(var(--cosmic-cyan))" : star.id % 4 === 1 ? "hsl(var(--cosmic-purple))" : star.id % 4 === 2 ? "hsl(var(--cosmic-pink))" : "hsl(var(--cosmic-orange))",
            boxShadow: `0 0 20px currentColor`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.8, 1], y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
        />
      ))}

      <motion.div style={{ scale }} className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-bold text-center mb-24 text-gradient-cosmic glow-cosmic preserve-3d"
        >
          <AnimatedWord delay={0.2}>Our Sponsors</AnimatedWord>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sponsors.map((sponsor, index) => {
            const Icon = sponsor.Icon;
            return (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 100, rotateX: -30, z: -100 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -20, rotateY: 10, rotateX: 5, scale: 1.08, z: 50 }}
                className="relative group preserve-3d cursor-pointer"
              >
                <div className="relative bg-card/70 backdrop-blur-xl rounded-3xl p-10 border-2 border-cosmic-purple/40 overflow-hidden shadow-cosmic">
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-20`}
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div className="flex items-center justify-center mb-6" whileHover={{ rotate: 360 }} transition={{ duration: 0.8 }}>
                      <div className="text-7xl animate-float">{sponsor.logo}</div>
                      <Icon className="absolute w-8 h-8 text-cosmic-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    
                    <h3 className="text-3xl font-orbitron font-bold mb-3 text-gradient-cosmic glow-cosmic text-center">
                      {sponsor.name}
                    </h3>
                    
                    <motion.p 
                      className="text-cosmic-cyan font-grotesk font-semibold text-center text-lg"
                      animate={{ textShadow: ["0 0 10px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(59, 130, 246, 1)", "0 0 10px rgba(59, 130, 246, 0.5)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {sponsor.tier}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SponsorsSection;
