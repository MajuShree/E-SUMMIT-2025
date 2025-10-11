import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

const ContactSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-t from-background via-card to-background">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-gradient-cosmic glow-cosmic">
            Get in Touch
          </h2>
          <p className="text-xl font-grotesk text-muted-foreground">
            Have questions? We're here to help
          </p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center hover:shadow-cosmic transition-all duration-300">
            <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
            <p className="text-sm font-grotesk text-muted-foreground uppercase tracking-widest mb-2">
              Email Us
            </p>
            <a
              href="mailto:iedcbitblr@gmail.com"
              className="text-2xl font-orbitron font-bold text-primary hover:text-secondary transition-colors"
            >
              iedcbitblr@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Contact Persons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "var(--shadow-cosmic)" }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <contact.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-orbitron font-bold mb-1 text-foreground">
                    {contact.name}
                  </h3>
                  <p className="text-sm font-grotesk text-muted-foreground uppercase tracking-wide mb-3">
                    {contact.role}
                  </p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 text-lg font-grotesk text-secondary hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-grotesk">
            Social media links coming soon
          </p>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 Canara BIT E Summit. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;