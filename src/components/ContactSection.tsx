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
      name: "Anish G",
      role: "Coordinator",
      phone: "7842619699",
      icon: User,
    },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-t from-background via-card/50 to-background overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-cyan"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-cosmic-cyan" size={32} />
            <Sparkles className="text-cosmic-pink" size={24} />
            <Sparkles className="text-cosmic-purple" size={32} />
          </motion.div>

          <h2 className="text-6xl md:text-9xl font-orbitron font-black mb-8 text-gradient-cosmic glow-cosmic leading-none">
            <AnimatedText text="Get in Touch" delay={0.3} staggerDelay={0.05} />
          </h2>
          <motion.p 
            className="text-2xl md:text-3xl font-grotesk font-light text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Have questions? We're here to help
          </motion.p>
        </motion.div>

        {/* Email with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <motion.div 
            className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border-2 border-cosmic-cyan/40 rounded-3xl p-12 text-center relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              borderColor: "hsl(var(--cosmic-cyan))",
            }}
            style={{
              boxShadow: "0 20px 60px -15px rgba(59, 130, 246, 0.4)",
            }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cosmic-cyan/10 to-cosmic-purple/10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              <Mail className="w-16 h-16 mx-auto mb-6 text-cosmic-cyan drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
            </motion.div>
            <p className="text-sm font-grotesk text-cosmic-cyan uppercase tracking-[0.3em] mb-4 relative z-10 glow-cyan">
              Email Us
            </p>
            <a
              href="mailto:iedcbitblr@gmail.com"
              className="text-3xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-cosmic-cyan to-cosmic-blue hover:from-cosmic-purple hover:to-cosmic-pink transition-all duration-300 relative z-10 inline-block"
            >
              iedcbitblr@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Persons with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100, rotateY: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1, 
                delay: 0.5 + index * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: index === 0 ? 5 : -5,
              }}
              className="bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-md border-2 border-primary/30 rounded-3xl p-10 transition-all duration-300 perspective-1000 preserve-3d relative overflow-hidden group"
              style={{
                boxShadow: "0 15px 50px -10px rgba(139, 92, 246, 0.3)",
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/10 via-cosmic-cyan/10 to-cosmic-pink/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="flex items-start gap-6 relative z-10">
                <motion.div 
                  className="p-5 bg-gradient-to-br from-cosmic-purple to-cosmic-cyan rounded-2xl"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  style={{
                    boxShadow: "0 10px 30px -5px rgba(139, 92, 246, 0.5)",
                  }}
                >
                  <contact.icon className="w-10 h-10 text-foreground" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-3xl font-orbitron font-black mb-2 text-gradient-cosmic">
                    {contact.name}
                  </h3>
                  <p className="text-sm font-grotesk text-cosmic-cyan uppercase tracking-[0.2em] mb-4 glow-cyan">
                    {contact.role}
                  </p>
                  <motion.a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 text-xl font-grotesk font-bold text-foreground hover:text-cosmic-cyan transition-colors group/phone"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-6 h-6 group-hover/phone:animate-bounce" />
                    {contact.phone}
                  </motion.a>
                </div>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "inset 0 0 60px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced footer note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-20"
        >
          <motion.p 
            className="text-xl font-grotesk text-muted-foreground mb-8"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div className="flex justify-center space-x-8 mb-8">
  <motion.a
    href="https://www.instagram.com/iedcbit?igsh=NjBiMnpqcDljczRq"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cosmic-cyan hover:text-cosmic-pink transition"
  >
    Instagram
  </motion.a>
  <motion.a
    href="https://www.linkedin.com/company/iedcbitblr/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cosmic-cyan hover:text-cosmic-white transition"
  >
    LinkedIn
  </motion.a>
  <motion.a
    href="https://www.facebook.com/iedcbitblr/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-cosmic-cyan hover:text-cosmic-blue transition"
  >
    Facebook
  </motion.a>
</motion.div>

          </motion.p>
          <div className="mt-12 pt-12 border-t-2 border-gradient-to-r from-transparent via-border to-transparent">
            <motion.p 
              className="text-sm font-grotesk text-muted-foreground"
              whileHover={{ scale: 1.05, color: "hsl(var(--cosmic-cyan))" }}
            >
              © 2025 Canara BIT E Summit. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;