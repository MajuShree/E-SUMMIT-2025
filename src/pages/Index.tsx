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
        <audio autoPlay loop style={{ display: 'none' }}>
  <source src="/music/background.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

      </main>
    </>
  
  );
};

export default Index;