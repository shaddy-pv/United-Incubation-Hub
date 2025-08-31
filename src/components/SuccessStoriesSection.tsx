import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Users, DollarSign, Calendar } from "lucide-react";

export const SuccessStoriesSection = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "QuantumTech Solutions",
      logo: "QT",
      industry: "AI & Machine Learning",
      description: "Revolutionary AI platform for predictive analytics in healthcare.",
      achievements: {
        funding: "$15M Series A",
        team: "45 employees",
        launched: "2022"
      },
      quote: "United Incubation Hub transformed our vision into reality. Their mentorship and resources were instrumental in our Series A success.",
      founder: "Dr. Sarah Chen, CEO",
      gradient: "from-primary to-secondary"
    },
    {
      name: "EcoVerse",
      logo: "EV",
      industry: "Sustainability Tech",
      description: "IoT solutions for smart energy management and carbon footprint reduction.",
      achievements: {
        funding: "$8M Seed Round",
        team: "28 employees",
        launched: "2023"
      },
      quote: "The holistic support system at UIH helped us navigate complex technical challenges and scale rapidly across markets.",
      founder: "Marcus Rodriguez, CTO",
      gradient: "from-secondary to-accent"
    },
    {
      name: "NeuralLink Dynamics",
      logo: "ND",
      industry: "BioTech",
      description: "Next-generation brain-computer interfaces for medical applications.",
      achievements: {
        funding: "$25M Series B",
        team: "67 employees",
        launched: "2021"
      },
      quote: "UIH's network of investors and industry experts opened doors we never thought possible. Truly a game-changer.",
      founder: "Prof. Elena Vasquez, Founder",
      gradient: "from-accent to-primary"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const story = stories[currentStory];

  return (
    <section id="stories" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 particle-bg opacity-20" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
            <span className="text-sm font-poppins text-accent">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground">
            Heroes in{" "}
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Discover how our incubation hub has empowered startups to achieve extraordinary success 
            and transform industries worldwide.
          </p>
        </div>

        {/* Story Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="holographic-border">
            <div className="bg-card/50 backdrop-blur-sm p-8 lg:p-12 rounded-lg">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Story Content */}
                <div className="space-y-8">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white font-orbitron font-bold text-xl shadow-glow-blue`}>
                        {story.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-orbitron font-bold text-foreground">
                          {story.name}
                        </h3>
                        <p className="text-primary font-poppins">
                          {story.industry}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground font-poppins">
                      {story.description}
                    </p>
                  </div>

                  {/* Quote */}
                  <blockquote className="relative">
                    <div className="absolute -top-2 -left-2 text-4xl text-primary/30">"</div>
                    <p className="text-lg italic text-foreground font-poppins pl-8">
                      {story.quote}
                    </p>
                    <cite className="block text-sm text-muted-foreground font-poppins mt-4 pl-8">
                      — {story.founder}
                    </cite>
                  </blockquote>
                </div>

                {/* Achievements */}
                <div className="space-y-6">
                  <h4 className="text-xl font-orbitron font-bold text-foreground">
                    Key Achievements
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <DollarSign className="w-8 h-8 text-primary" />
                      <div>
                        <div className="text-lg font-orbitron font-bold text-foreground">
                          {story.achievements.funding}
                        </div>
                        <div className="text-sm text-muted-foreground font-poppins">
                          Funding Raised
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                      <Users className="w-8 h-8 text-secondary" />
                      <div>
                        <div className="text-lg font-orbitron font-bold text-foreground">
                          {story.achievements.team}
                        </div>
                        <div className="text-sm text-muted-foreground font-poppins">
                          Team Size
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/10 border border-accent/20">
                      <Calendar className="w-8 h-8 text-accent" />
                      <div>
                        <div className="text-lg font-orbitron font-bold text-foreground">
                          {story.achievements.launched}
                        </div>
                        <div className="text-sm text-muted-foreground font-poppins">
                          Year Launched
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStory}
              className="hover:shadow-glow-blue"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory 
                      ? 'bg-primary shadow-glow-blue' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="hover:shadow-glow-blue"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};