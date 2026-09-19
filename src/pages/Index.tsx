import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import VoiceAssistant from "@/components/VoiceAssistant";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <MenuSection />
    <ReservationSection />
    <AboutSection />
    <ContactSection />
    <VoiceAssistant />
    <Footer />
  </div>
);

export default Index;
