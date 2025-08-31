import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, FileText, Presentation, Rocket } from "lucide-react";

export const JoinSection = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Submit your application with your innovative idea and team information.",
      icon: <FileText className="w-6 h-6" />,
      status: currentStep >= 1 ? "completed" : "pending"
    },
    {
      number: 2,
      title: "Pitch",
      description: "Present your vision to our expert panel and showcase your potential.",
      icon: <Presentation className="w-6 h-6" />,
      status: currentStep >= 2 ? "completed" : "pending"
    },
    {
      number: 3,
      title: "Build",
      description: "Access our resources, mentorship, and network to develop your startup.",
      icon: <Users className="w-6 h-6" />,
      status: currentStep >= 3 ? "completed" : "pending"
    },
    {
      number: 4,
      title: "Scale",
      description: "Launch your product and scale globally with continued support.",
      icon: <Rocket className="w-6 h-6" />,
      status: currentStep >= 4 ? "completed" : "pending"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 particle-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-poppins text-primary">Join the Hub</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground">
            Start Your{" "}
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              Hero's Journey
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Ready to transform your innovative idea into a world-changing startup? 
            Join thousands of entrepreneurs who have launched their journey with us.
          </p>
        </div>

        {/* Journey Steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted transform -translate-y-1/2 hidden lg:block">
              <div 
                className="h-full bg-gradient-neon transition-all duration-1000 ease-out"
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="relative group cursor-pointer"
                  onClick={() => setCurrentStep(step.number)}
                >
                  <div className={`p-6 rounded-lg border transition-all duration-300 ${
                    step.status === "completed" 
                      ? "bg-primary/10 border-primary/30 shadow-glow-blue" 
                      : "bg-card/30 border-muted/30 hover:border-primary/20"
                  }`}>
                    {/* Step Number */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300 ${
                      step.status === "completed"
                        ? "bg-primary text-primary-foreground shadow-glow-blue"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20"
                    }`}>
                      {step.status === "completed" ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        step.icon
                      )}
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-2">
                      <h3 className="font-orbitron font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-poppins">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <div className="holographic-border max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm p-8 text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-orbitron font-bold text-foreground">
                  Ready to Begin?
                </h3>
                <p className="text-muted-foreground font-poppins">
                  Take the first step towards building the future. Apply now and join 
                  our community of innovative entrepreneurs and game-changing startups.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl">
                  Book a Call
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground font-poppins">
                <span>✓ Free Application</span>
                <span>✓ Expert Review</span>
                <span>✓ Fast Response</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground font-poppins">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground font-poppins">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground font-poppins">Alumni Network</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-orbitron font-bold text-primary">3x</div>
              <div className="text-sm text-muted-foreground font-poppins">Faster Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};