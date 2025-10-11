import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";

const RegisterSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-nature-dark to-background overflow-hidden">
      {/* Animated leaf particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-nature/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Leaf size={30 + Math.random() * 40} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Leaf-shaped container */}
        <div className="relative bg-gradient-to-br from-nature to-nature-dark rounded-[3rem] p-16 border-4 border-nature-light shadow-leaf">
          {/* Decorative leaves */}
          <motion.div
            className="absolute -top-6 -left-6 text-nature-light"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Leaf size={60} />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -right-6 text-nature-light"
            animate={{ rotate: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            <Leaf size={60} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-foreground">
              Ready to Join?
            </h2>
            <p className="text-xl md:text-2xl font-grotesk text-nature-light mb-10">
              Be part of something extraordinary. Register now for E Summit 2025.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-xl px-12 py-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-orbitron font-bold group transition-all duration-300"
              >
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-muted-foreground font-grotesk"
        >
          Limited spots available • Early bird benefits
        </motion.p>
      </motion.div>
    </section>
  );
};

export default RegisterSection;