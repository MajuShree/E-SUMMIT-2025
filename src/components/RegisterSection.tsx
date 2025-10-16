import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, Sparkles } from "lucide-react";
import AnimatedText from "./AnimatedText";

const RegisterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-nature-dark via-background to-background overflow-hidden perspective-1000">
      {/* Enhanced animated leaf particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <Leaf 
              size={30 + Math.random() * 60} 
              className="text-nature/40 drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2,
          type: "spring",
          stiffness: 80,
        }}
        style={{ scale }}
        className="relative z-10 text-center max-w-5xl mx-auto preserve-3d"
      >
        {/* Enhanced leaf-shaped container */}
        <motion.div 
          className="relative bg-gradient-to-br from-nature via-nature to-nature-dark rounded-[4rem] p-20 border-4 border-nature-light/60 overflow-hidden"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 30px 80px -20px rgba(74, 222, 128, 0.6)",
          }}
          style={{
            boxShadow: "0 20px 60px -10px rgba(74, 222, 128, 0.4)",
          }}
        >
          {/* Animated background overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-nature-light/20 to-transparent rounded-[4rem]"
            style={{ rotate }}
          />

          {/* Enhanced decorative leaves */}
          <motion.div
            className="absolute -top-10 -left-10 text-nature-light drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]"
            animate={{ 
              rotate: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Leaf size={80} strokeWidth={2} />
          </motion.div>
          <motion.div
            className="absolute -bottom-10 -right-10 text-nature-light drop-shadow-[0_0_20px_rgba(74,222,128,0.6)]"
            animate={{ 
              rotate: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeInOut" }}
          >
            <Leaf size={80} strokeWidth={2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="text-nature-light" size={32} />
              <Sparkles className="text-nature-light" size={24} />
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-orbitron font-black mb-8 text-foreground leading-tight drop-shadow-2xl">
  <span className="inline-block whitespace-nowrap md:whitespace-normal">
    <AnimatedText text="Ready to Join?" delay={0.5} staggerDelay={0.05} />
  </span>
</h2>
            <p className="text-2xl md:text-3xl font-grotesk font-light text-nature-light mb-12 max-w-2xl mx-auto">
              Be part of something extraordinary. Register now for E Summit 2025.
            </p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="text-2xl px-16 py-10 rounded-full bg-foreground text-background hover:bg-foreground/90 font-orbitron font-black group transition-all duration-300 relative overflow-hidden"
                style={{
                  boxShadow: "0 10px 40px -10px rgba(255, 255, 255, 0.5)",
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Register Now
                  <ArrowRight className="group-hover:translate-x-3 transition-transform duration-300" size={28} />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced floating text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16"
        >
          <motion.p
            className="text-lg font-grotesk text-muted-foreground"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ⚡ Limited spots available • 🎁 Early bird benefits • 🚀 Exclusive perks
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RegisterSection;