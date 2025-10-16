import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cosmicEye from "@/assets/cosmic-eye.jpg";
import AnimatedText from "./AnimatedText";

const EyeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Responsive scale for mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.6, 1, isMobile ? 1.1 : 1.3]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [isMobile ? 10 : 20, 0, isMobile ? -10 : -20]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);

  // Box shadow adjustments for mobile
  const boxShadow = isMobile
    ? "0 20px 40px -10px rgba(139, 92, 246, 0.5), 0 15px 30px -15px rgba(59, 130, 246, 0.3)"
    : "0 50px 100px -20px rgba(139, 92, 246, 0.5), 0 30px 60px -30px rgba(59, 130, 246, 0.3)";

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background perspective-1000 px-2 sm:px-4 md:px-8"
    >
      <motion.div
        style={{ scale, opacity, rotateY, z }}
        className="relative w-full max-w-xs sm:max-w-md md:max-w-5xl aspect-square sm:aspect-video preserve-3d"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-full h-full"
        >
          <img
            src={cosmicEye}
            alt="Cosmic Eye - Vision of Innovation"
            className="w-full h-full object-cover rounded-3xl"
            style={{ boxShadow }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-3xl" />

          {/* Animated glow ring */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-cosmic-cyan"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.6)" }}
          />
        </motion.div>
      </motion.div>

      {/* Text overlay */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`absolute left-0 right-0 text-center px-2 sm:px-4 ${
          isMobile ? "bottom-4" : "bottom-8 md:bottom-20"
        }`}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold text-gradient-cosmic glow-cosmic mb-2">
          <AnimatedText text="Vision meets innovation" delay={0.5} staggerDelay={0.02} />
        </h3>
        <p className="text-sm sm:text-base md:text-lg font-grotesk text-muted-foreground">
          See the future through our lens
        </p>
      </motion.div>
    </section>
  );
};

export default EyeSection;
