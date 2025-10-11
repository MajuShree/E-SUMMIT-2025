import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf } from "lucide-react";
import AnimatedText from "./AnimatedText";

const EventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const events = [
    {
      title: "24hr Hackathon",
      description: "Build innovative solutions in 24 hours",
      icon: "💻",
    },
    {
      title: "Ideathon",
      description: "Pitch your groundbreaking ideas",
      icon: "💡",
    },
    {
      title: "Workshop",
      description: "Learn from industry experts",
      icon: "🎓",
    },
    {
      title: "E Summit Fun",
      description: "Network and celebrate innovation",
      icon: "🎉",
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-card to-nature-dark overflow-hidden">
      {/* Enhanced floating leaves background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-nature-light"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 50}px`,
              filter: `blur(${Math.random() * 2}px)`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, Math.random() * 80 - 40],
              rotate: [0, Math.random() * 720],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 12 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          >
            <Leaf />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-9xl font-orbitron font-black mb-6 text-gradient-nature glow-nature leading-none">
            <AnimatedText text="Events" delay={0.3} staggerDelay={0.08} />
          </h2>
          <motion.p 
            className="text-2xl md:text-3xl font-grotesk text-nature-light font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Four amazing experiences await you
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -30, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 10,
                rotateX: 5,
                z: 50,
              }}
              className="relative bg-gradient-to-br from-nature via-nature to-nature-dark rounded-[2.5rem] p-10 border-4 border-nature-light/40 backdrop-blur-md overflow-hidden group perspective-1000 preserve-3d cursor-pointer"
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-nature-light/30 to-transparent rounded-[2.5rem]"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Enhanced leaf decoration */}
              <motion.div 
                className="absolute -top-12 -right-12 text-nature-light/20 group-hover:text-nature-light/40 transition-all duration-500"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Leaf size={180} strokeWidth={1.5} />
              </motion.div>

              <div className="relative z-10">
                <motion.div 
                  className="text-7xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {event.icon}
                </motion.div>
                <h3 className="text-4xl font-orbitron font-black mb-4 text-foreground drop-shadow-lg">
                  <AnimatedText text={event.title} delay={0.5 + index * 0.2} staggerDelay={0.03} />
                </h3>
                <p className="text-xl font-grotesk text-nature-light font-light">
                  {event.description}
                </p>
              </div>

              {/* Enhanced animated accent */}
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-nature-light/40 to-transparent rounded-tr-[2rem]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "0 0 60px rgba(74, 222, 128, 0.4), inset 0 0 60px rgba(74, 222, 128, 0.1)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;