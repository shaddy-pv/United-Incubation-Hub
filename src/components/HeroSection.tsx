import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [counts, setCounts] = useState({
    startups: -100,
    preStartups: -100,
    mentors: -100,
    events: -100
  });

  useEffect(() => {
    const targetCounts = { startups: 9, preStartups: 3, mentors: 10, events: 6 };
    const duration = 1000; // 1 second
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => {
        const newCounts = { ...prev };
        let allComplete = true;

        Object.keys(targetCounts).forEach(key => {
          const target = targetCounts[key as keyof typeof targetCounts];
          const current = prev[key as keyof typeof prev];
          
          if (current < target) {
            newCounts[key as keyof typeof newCounts] = Math.min(current + Math.ceil(target / steps), target);
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero/90" />
        <div className="absolute inset-0 particle-bg opacity-30" />
      </div>

      {/* Animated Lines */}
      <div className="absolute top-0 left-0 w-full h-1 animated-line" />
      <div className="absolute bottom-0 left-0 w-full h-1 animated-line" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-poppins text-primary">Innovation Starts Here</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-foreground mb-6 animate-slide-up">
          Innovators Are the{" "}
          <span className="bg-gradient-holographic bg-clip-text text-transparent animate-shimmer">
            Heroes
          </span>{" "}
          of Tomorrow
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-poppins animate-fade-in">
          Join our incubation hub and build the future today. 
          Empowering visionary startups with mentorship, funding, and cutting-edge resources.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button variant="hero" size="xl" className="group">
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button variant="neon" size="xl">
            Explore Programs
          </Button>
        </div>

        {/* Stats with Counting Animation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 animate-fade-in">
          <div className="text-center group cursor-pointer">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2 group-hover:text-accent transition-all duration-300 group-hover:scale-110">
              {counts.startups}
            </div>
            <div className="text-muted-foreground font-poppins group-hover:text-foreground transition-colors duration-300">Incubated Startups</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-secondary mb-2 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
              {counts.preStartups}
            </div>
            <div className="text-muted-foreground font-poppins group-hover:text-foreground transition-colors duration-300">Pre-Incubated Startups</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-accent mb-2 group-hover:text-secondary transition-all duration-300 group-hover:scale-110">
              {counts.mentors}
            </div>
            <div className="text-muted-foreground font-poppins group-hover:text-foreground transition-colors duration-300">Mentor & Advisor</div>
          </div>
           <div className="text-center group cursor-pointer">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-accent mb-2 group-hover:text-primary transition-all duration-300 group-hover:scale-110">
              {counts.events}
            </div>
            <div className="text-muted-foreground font-poppins group-hover:text-foreground transition-colors duration-300">Events</div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <Button variant="holographic" className="rounded-full animate-glow-pulse">
          Apply Now
        </Button>
      </div>
    </section>
  );
};