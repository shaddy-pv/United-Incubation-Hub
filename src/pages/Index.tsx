import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { JoinSection } from "@/components/JoinSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <SuccessStoriesSection />
      <JoinSection />
      <ContactSection />
    </div>
  );
};

export default Index;
