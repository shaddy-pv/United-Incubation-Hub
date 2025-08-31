import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket, TrendingUp, Users, DollarSign, Shield, IndianRupeeIcon } from "lucide-react";

export const ProgramsSection = () => {
  const programs = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Pre-Incubation",
      description: "Validate your idea and build your MVP with expert guidance and initial resources.",
      duration: "3 months",
      features: ["Idea Validation", "Market Research", "MVP Development", "Team Building"],
      color: "primary"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Incubation",
      description: "Accelerate your startup growth with comprehensive support and mentorship.",
      duration: "6-12 months",
      features: ["Product Development", "Business Model", "Go-to-Market Strategy", "Initial Funding"],
      color: "secondary"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Acceleration",
      description: "Scale rapidly with advanced resources and investor connections.",
      duration: "6 months",
      features: ["Growth Hacking", "Series A Prep", "International Expansion", "Partnership Network"],
      color: "accent"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship",
      description: "Connect with industry experts and successful entrepreneurs.",
      duration: "Ongoing",
      features: ["1-on-1 Sessions", "Industry Experts", "Peer Learning", "Advisory Board"],
      color: "primary"
    },
    {
      icon: <IndianRupeeIcon className="w-8 h-8" />,
      title: "Funding Support",
      description: "Access to investors, grants, and funding opportunities.",
      duration: "As needed",
      features: ["Investor Matching", "Pitch Preparation", "Grant Applications", "Due Diligence"],
      color: "secondary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Legal & Compliance",
      description: "Navigate legal requirements and protect your intellectual property.",
      duration: "Ongoing",
      features: ["IP Protection", "Legal Framework", "Compliance Support", "Contract Review"],
      color: "accent"
    }
  ];

  return (
    <section id="programs" className="relative py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-poppins text-primary">Our Programs</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground">
            Choose Your{" "}
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              Hero's Path
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Comprehensive programs designed to support innovators at every stage of their journey, 
            from initial idea to global expansion.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="holographic-border h-full">
                <div className="p-8 bg-card/50 backdrop-blur-sm h-full flex flex-col hover:bg-card/70 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-${program.color}/10 flex items-center justify-center text-${program.color} mb-6 group-hover:scale-110 transition-transform`}>
                    {program.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-orbitron font-bold text-foreground">
                          {program.title}
                        </h3>
                        <span className={`text-sm px-2 py-1 rounded bg-${program.color}/20 text-${program.color} font-poppins`}>
                          {program.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-poppins">
                        {program.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-orbitron font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground font-poppins flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${program.color}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="mt-6 group-hover:border-primary group-hover:text-primary"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            View All Programs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};