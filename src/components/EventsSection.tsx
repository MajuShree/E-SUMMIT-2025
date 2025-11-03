import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, ArrowRight, ChevronDown } from "lucide-react";
import AnimatedText from "./AnimatedText";

const EventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [showDomains, setShowDomains] = useState(false);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const leafCount = isMobile ? 15 : 40;

  // --- Domains / Themes ---
  const domains = [
    {
      title: "Artificial Intelligence & Data-Driven Innovation",
      icon: "🧠",
      description:
        "Build intelligent systems that learn, predict, and create — from AI note summarizers to generative tools and analytics dashboards.",
    },
    {
      title: "Cybersecurity, Privacy & Digital Trust",
      icon: "🔐",
      description:
        "Develop secure platforms that protect data and promote trust — from fraud detection tools to blockchain-based verification.",
    },
    {
      title: "Health, Wellness & Education Technology",
      icon: "❤️",
      description:
        "Empower individuals through knowledge and well-being — from AI health trackers to personalized learning systems.",
    },
    {
      title: "Sustainability, Smart Systems & IoT Solutions",
      icon: "🌱",
      description:
        "Design sustainable, smart automation for our planet — IoT dashboards, eco habit apps, and green innovation tools.",
    },
    {
      title: "FinTech, SaaS & Developer Tools for Businesses",
      icon: "💼",
      description:
        "Build tools that power businesses — expense trackers, team managers, or developer productivity dashboards.",
    },
  ];

  const guidelines = [
    "Teams must select one domain and innovate within it.",
    "Projects should primarily focus on software (web, mobile, or cloud).",
    "Hardware may be included only as a minor component.",
    "Judging criteria: innovation, usability, scalability, and real-world impact.",
    "Creativity and originality are key — think bold, build practical.",
    "Hardware-based ideas may present working prototypes.",
  ];

  const events = [
    {
      title: "Xcelerate",
      description: "A 24hr Hackathon to build and innovate solutions.",
      icon: "💻",
      registerLink:
        "https://unstop.com/hackathons/xcelerate-nikshatra-e-summit-2025-bangalore-institute-of-technology-bit-bangalore-1576568",
    },
    {
      title: "Ideatattva",
      description: "Ideathon to pitch your groundbreaking ideas.",
      icon: "💡",
      registerLink:
        "https://unstop.com/competitions/ideatattva-nikshatra-e-summit-2025-bangalore-institute-of-technology-bit-bangalore-1576558",
    },
    {
      title: "Workshop",
      description:
        "Learn from industry experts. Details will be shared post registration.",
      icon: "🎓",
    },
    {
      title: "E Summit Fun",
      description:
        "Network and celebrate innovation. Details will be shared in official groups.",
      icon: "🎉",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-card to-nature-dark overflow-hidden text-white"
    >
      {/* Floating leaves background */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        {[...Array(leafCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-nature-light"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${
                isMobile ? 15 + Math.random() * 20 : 20 + Math.random() * 50
              }px`,
              filter: `blur(${isMobile ? Math.random() : Math.random() * 2}px)`,
            }}
            animate={{
              y: isMobile ? ["0vh", "50vh"] : ["0vh", "110vh"],
              x: [0, Math.random() * 80 - 40],
              rotate: [0, Math.random() * 720],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
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
        {/* === TITLE SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <h1 className="text-5xl sm:text-7xl font-orbitron font-black mb-4 text-white drop-shadow-lg">
            <AnimatedText
              text="Xcelerate 2025"
              delay={0.3}
              staggerDelay={0.08}
            />
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 mb-6 font-light">
            5 Themes • 24 Hours • Infinite Innovation
          </p>
          <button
            onClick={() => setShowDomains(!showDomains)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition-all duration-300 shadow-lg"
          >
            THEMES / DOMAINS <ChevronDown size={18} />
          </button>
        </motion.div>

        {/* === EVENTS === */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-12 sm:mb-20 px-2"
          >
            <h2 className="text-4xl sm:text-6xl font-orbitron font-black mb-4 text-gradient-nature glow-nature leading-none">
              <AnimatedText
                text="Events"
                delay={0.3}
                staggerDelay={0.08}
              />
            </h2>
            <motion.p
              className="text-lg sm:text-2xl font-grotesk text-nature-light font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Four amazing experiences await you
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={
                  !isMobile ? { scale: 1.05, rotateY: 5, rotateX: 3 } : {}
                }
                className="relative bg-gradient-to-br from-nature via-nature to-nature-dark rounded-[2rem] p-8 border border-green-300/30 backdrop-blur-md overflow-hidden group text-center sm:text-left"
              >
                <div className="text-5xl sm:text-6xl mb-3">{event.icon}</div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-100 text-base sm:text-lg mb-4 leading-relaxed">
                  {event.description}
                </p>
                {event.registerLink && (
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-400 text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-green-300 transition-all duration-300"
                  >
                    Register <ArrowRight size={18} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* === THEMES / DOMAINS === */}
        {showDomains && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {domains.map((d, i) => (
              <motion.div
                key={i}
                className="bg-white/10 border border-green-400/40 rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-all duration-300 backdrop-blur-md"
              >
                <div className="text-4xl mb-3">{d.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {d.title}
                </h3>
                <p className="text-gray-200 text-sm">{d.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* === PARTICIPATION GUIDELINES === */}
        {showDomains && (
          <motion.div
            className="mt-16 bg-green-800/40 border border-green-500/50 backdrop-blur-md rounded-3xl p-8 text-left max-w-4xl mx-auto shadow-2xl"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white underline underline-offset-8 decoration-green-400">
              📘 Participation Guidelines
            </h3>
            <ul className="list-disc list-inside text-gray-100 space-y-2 text-sm sm:text-base">
              {guidelines.map((g, i) => (
                <li key={i}>{g}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
