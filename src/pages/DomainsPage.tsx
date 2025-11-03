"use client";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { useRef } from "react";

const DomainsPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const domains = [
    {
      title: "Artificial Intelligence & Data-Driven Innovation",
      icon: "🤖",
      description:
        "AI is redefining the boundaries of what software can do. This domain invites participants to build intelligent systems that learn, predict, and create. You can develop AI-powered productivity tools, generative AI applications, or data analytics platforms that uncover insights and automate decisions. Whether it’s an assistant that writes code, summarizes meetings, or detects patterns in data — this is your space to harness intelligence for impact."
"Example ideas:"
"•	AI-powered note summarizer or chatbot"
"•	Predictive analytics dashboard for business insights"
"•	Generative AI tools for text, image, or code creation"
"•	AI recommendation systems or data-driven automation"
,
    },
    {
      title: "Cybersecurity, Privacy & Digital Trust",
      icon: "🛡️",
      description:
        "In a connected world, security is no longer optional — it’s essential. This domain challenges participants to build software that protects data, ensures privacy, and promotes trust in digital interactions. You can explore identity management through blockchain (Web3), create safer authentication systems, or design awareness platforms that educate users about online threats."
"Example ideas:"
"•	Phishing or fraud detection tools"
"•	Blockchain-based certificate or identity verification"
"•	Privacy dashboards and secure file-sharing systems"
"•	Awareness-based gamified cybersecurity education"
,
    },
    {
      title: "Health, Wellness & Education Technology",
      icon: "💊",
      description:
        "This domain brings together HealthTech and EdTech — both focused on empowering individuals through knowledge and well-being. Participants can build platforms that track health metrics, enable teleconsultation, or support mental wellness. Alternatively, focus on education by personalizing learning, creating AI tutors, or building tools for teachers and students to interact effectively."
"Example ideas:"
"•	AI-based symptom tracker or virtual doctor app"
"•	Personalized learning platforms and adaptive quizzes"
"•	Mental wellness and stress tracking applications"
"•	Fitness, nutrition, or mindfulness platforms"
,
    },
    {
      title: "Sustainability, Smart Systems & IoT",
      icon: "🌱",
      description:
        "Innovation should serve the planet as much as people. This domain encourages projects that make our surroundings smarter and more sustainable through automation, IoT, and eco-friendly technology. Participants can create dashboards for smart homes, city automation systems, or apps that track environmental impact. The goal is to design systems that conserve energy, improve efficiency, and contribute to a sustainable future."
"Example ideas:"
"•	Smart irrigation or waste management systems"
"•	IoT dashboards for energy or device control"
"•	Carbon footprint tracking or eco habit apps"
"•	Real-time data visualization for resource management"
,
    },
    {
      title: "FinTech, SaaS & Developer Tools",
      icon: "💼",
      description:
        "Software powers business growth, and this domain focuses on building scalable tools that help startups, enterprises, and developers thrive. From financial management apps to developer utilities or team collaboration tools — think about software that simplifies operations, enhances productivity, or empowers entrepreneurs."
"Example ideas:"
"•	UPI-based budgeting or expense tracking app"
"•	Lightweight CRM or team task manager"
"•	Developer productivity or API testing tools"
"•	Analytics dashboard for small business operations",
    },
  ];

  const guidelines = [
    "Teams must select one domain to innovate in.",
    "Projects should primarily focus on software (web, mobile, or cloud).",
    "Hardware can be included but only as a supporting component.",
    "Judging will be based on innovation, usability, scalability, and impact.",
    "Creativity and originality are key — think bold, build practical.",
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-card to-nature-dark overflow-hidden text-white"
    >
      {/* Floating leaves */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          y: [0, 40, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-nature-light opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`,
            }}
            animate={{
              y: ["0vh", "100vh"],
              rotate: [0, 360],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <Leaf />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl font-orbitron font-black mb-12 text-gradient-nature"
        >
          Domains & Guidelines
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/10 border border-nature-light/30 rounded-3xl p-6 backdrop-blur-md shadow-xl hover:scale-[1.03] transition-all duration-300 text-left"
            >
              <div className="text-4xl mb-3">{d.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-nature-light">
                {d.title}
              </h3>
              <p className="text-gray-200 text-sm">{d.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-16 bg-nature/20 border border-nature-light/40 backdrop-blur-md rounded-3xl p-8 text-left max-w-4xl mx-auto shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4 text-nature-light underline underline-offset-8 decoration-nature-light">
            📘 Participation Guidelines
          </h3>
          <ul className="list-disc list-inside text-gray-100 space-y-2 text-sm sm:text-base">
            {guidelines.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default DomainsPage;
