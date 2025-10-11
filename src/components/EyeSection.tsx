import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cosmicEye from "@/assets/cosmic-eye.jpg";

const EyeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full max-w-4xl aspect-video"
      >
        <img
          src={cosmicEye}
          alt="Cosmic Eye"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-3xl" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-20 left-0 right-0 text-center"
      >
        <p className="text-2xl font-grotesk text-muted-foreground">
          Vision meets innovation
        </p>
      </motion.div>
    </section>
  );
};

export default EyeSection;