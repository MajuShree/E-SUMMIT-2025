import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const EventsSection = () => {
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
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-card to-nature-dark overflow-hidden">
      {/* Floating leaves background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-nature-light opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
            animate={{
              y: ["0vh", "100vh"],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Leaf size={40} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 text-gradient-nature glow-nature">
            Events
          </h2>
          <p className="text-xl font-grotesk text-nature-light">
            Four amazing experiences await you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "var(--shadow-leaf)"
              }}
              className="relative bg-gradient-to-br from-nature to-nature-dark rounded-3xl p-8 border-2 border-nature-light/30 backdrop-blur-sm overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Leaf shape decoration */}
              <div className="absolute -top-10 -right-10 text-nature-light/10 group-hover:text-nature-light/20 transition-colors duration-300">
                <Leaf size={150} />
              </div>

              <div className="relative z-10">
                <div className="text-6xl mb-4">{event.icon}</div>
                <h3 className="text-3xl font-orbitron font-bold mb-3 text-foreground">
                  {event.title}
                </h3>
                <p className="text-lg font-grotesk text-nature-light">
                  {event.description}
                </p>
              </div>

              {/* Animated corner accent */}
              <motion.div
                className="absolute bottom-0 left-0 w-20 h-20 bg-nature-light/20 rounded-tr-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
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