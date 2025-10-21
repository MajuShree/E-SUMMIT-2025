import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, User, Sparkles } from "lucide-react";
import AnimatedText from "./AnimatedText";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const contacts = [
    {
      name: "Nishanth Uppalapati",
      role: "President",
      phone: "9182163635",
      icon: User,
    },
    {
      name: "Sagar L",
      role: "Coordinator",
      phone: "7760556168",
      icon: User,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-t from-background via-card/50 to-background overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-cyan"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.6, 1.3, 0.6],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-cosmic-cyan w-5 h-5 sm:w-6 sm:h-6" />
            <Sparkles className="text-cosmic-pink w-4 h-4 sm:w-6 sm:h-6" />
            <Sparkles className="text-cosmic-purple w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black mb-6 sm:mb-8 text-gradient-cosmic glow-cosmic leading-tight">
            <AnimatedText text="Get in Touch" delay={0.3} staggerDelay={0.05} />
          </h2>
          <motion.p
            className="text-lg sm:text-2xl font-grotesk font-light text-muted-foreground px-2 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Wanna sponsor us? Here are the contact details
          </motion.p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            className="bg-gradient-to-br from-card/70 to-card/40 backdrop-blur-md border border-cosmic-cyan/40 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden group"
            whileHover={{
              scale: 1.03,
              borderColor: "hsl(var(--cosmic-cyan))",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cosmic-cyan/10 to-cosmic-purple/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 text-cosmic-cyan drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
            <p className="text-xs sm:text-sm font-grotesk text-cosmic-cyan uppercase tracking-[0.3em] mb-2 sm:mb-4">
              Email Us
            </p>
            <a
              href="mailto:iedcbitblr@gmail.com"
              className="text-2xl sm:text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cosmic-cyan to-cosmic-blue hover:from-cosmic-purple hover:to-cosmic-pink transition-all duration-300 inline-block"
            >
              iedcbitblr@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index === 0 ? -60 : 60,
                rotateY: index === 0 ? -15 : 15,
              }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -8,
                scale: 1.04,
                rotateY: index === 0 ? 3 : -3,
              }}
              className="bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-md border border-primary/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative z-10">
                <motion.div
                  className="p-4 bg-gradient-to-br from-cosmic-purple to-cosmic-cyan rounded-2xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <contact.icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" />
                </motion.div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-orbitron font-black mb-1 sm:mb-2 text-gradient-cosmic">
                    {contact.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-grotesk text-cosmic-cyan uppercase tracking-[0.2em] mb-2 sm:mb-4">
                    {contact.role}
                  </p>
                  <motion.a
                    href={`tel:${contact.phone}`}
                    className="flex justify-center sm:justify-start items-center gap-2 sm:gap-3 text-lg sm:text-xl font-grotesk font-bold text-foreground hover:text-cosmic-cyan transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    {contact.phone}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8">
            <motion.a
              href="https://www.instagram.com/iedcbit?igsh=NjBiMnpqcDljczRq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-cyan hover:text-cosmic-pink text-base sm:text-lg transition"
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/iedcbitblr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-cyan hover:text-cosmic-white text-base sm:text-lg transition"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://www.facebook.com/iedcbitblr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cosmic-cyan hover:text-cosmic-blue text-base sm:text-lg transition"
            >
              Facebook
            </motion.a>
          </div>

          <motion.p
            className="text-xs sm:text-sm font-grotesk text-muted-foreground"
            whileHover={{ scale: 1.05, color: "hsl(var(--cosmic-cyan))" }}
          >
           Nikshtara X BIT'S E Summit. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
