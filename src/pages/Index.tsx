import HeroSection from "@/components/HeroSection";
import EyeSection from "@/components/EyeSection";
import SponsorsSection from "@/components/SponsorsSection";
import EventsSection from "@/components/EventsSection";
import RegisterSection from "@/components/RegisterSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <main className="font-grotesk antialiased">
        <HeroSection />
        <EyeSection />
        <SponsorsSection />
        <EventsSection />
        <RegisterSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;