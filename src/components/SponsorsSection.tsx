import { motion } from "framer-motion";
import { useRef } from "react";

const SponsorsSection = () => {
  const sponsors = [
    { name: "Sponsor 1", size: "small" },
    { name: "Sponsor 2", size: "small" },
    { name: "Sponsor 3", size: "small" },
    { name: "Sponsor 4", size: "small" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-background to-card overflow-hidden">
      {/* Twinkling stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 text-gradient-cosmic glow-cosmic">
            Our Sponsors
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Title Sponsor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <p className="text-sm font-grotesk text-muted-foreground uppercase tracking-widest mb-4">
            Title Sponsor
          </p>
          <h3 className="text-6xl md:text-8xl font-orbitron font-black text-gradient-cosmic glow-cosmic">
            Canara
          </h3>
        </motion.div>

        {/* Powered by Unstop - transforms into stars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <motion.p
            className="text-3xl md:text-4xl font-grotesk text-secondary-foreground"
            whileHover={{ scale: 1.05 }}
          >
            powered by <span className="font-bold text-secondary">Unstop</span>
          </motion.p>
        </motion.div>

        {/* Other Sponsors as twinkling stars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-cosmic transition-all duration-300"
            >
              <p className="text-lg font-grotesk text-center text-muted-foreground">
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
