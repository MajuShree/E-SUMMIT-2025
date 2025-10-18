import HeroSection from "@/components/HeroSection";
import EyeSection from "@/components/EyeSection";
import SponsorsSection from "@/components/SponsorsSection";
import EventsSection from "@/components/EventsSection";
import RegisterSection from "@/components/RegisterSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgress from "@/components/ScrollProgress";
import AboutSection from "@/components/AboutSection";
import Ecosystem from "@/components/Ecosystem";

import { useEffect, useRef, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const audioRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function playAudio() {
      if (!hasPlayed && audioRef.current) {
        audioRef.current.play().then(() => {
          setHasPlayed(true);
          removeListeners();
        }).catch((e) => {
          console.warn("Audio play prevented:", e);
        });
      }
    }

    function onScroll() {
      playAudio();
    }
    function onUserInteract() {
      playAudio();
    }

    function removeListeners() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onUserInteract);
      window.removeEventListener("touchstart", onUserInteract);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onUserInteract, { passive: true });
    window.addEventListener("touchstart", onUserInteract, { passive: true });

    return () => {
      removeListeners();
    };
  }, [hasPlayed]);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <ScrollProgress />
          <main className="font-grotesk antialiased">
        <HeroSection />
        <EyeSection />
        <SponsorsSection />
        <Ecosystem />
        <EventsSection />
        <RegisterSection />
        <AboutSection />
        <ContactSection />

            <audio ref={audioRef} loop style={{ display: "none" }}>
              <source src="/music/background.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </main>
        </>
      )}
    </>
  );
};

export default Index;
