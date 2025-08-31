import { Rocket, Users, Target, Globe } from "lucide-react";
import aboutBackground from "@/assets/about-bg.jpg";

export const AboutSection = () => {
  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Labs",
      description: "Cutting-edge facilities and tech support for product development."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Mentorship from industry leaders, legal and financial experts."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Focused Growth",
      description: "Tailored programs for every stage of your startup journey."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Connect",
      description: "Access to investors, markets, and networking opportunities worldwide."
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ 
            backgroundImage: `url(${aboutBackground})`,
          }}
        />
        {/* Temporarily commenting out to test image visibility */}
        {/* <div className="absolute inset-0 bg-gradient-hero" /> */}
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 backdrop-blur-sm">
                <span className="text-sm font-poppins text-secondary">Our Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground">
                Empowering the{" "}
                <span className="bg-gradient-neon bg-clip-text text-transparent">
                  Next Generation
                </span>{" "}
                of Innovators
              </h2>
              
              <p className="text-lg text-muted-foreground font-poppins leading-relaxed">
               United Incubation Hub (UIH) provides world-class infrastructure, expert mentorship, investor access, and strategic support to turn your innovative ideas into successful ventures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-blue hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-orbitron font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-poppins">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="holographic-border">
              <div className="aspect-square rounded-lg bg-gradient-hero p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto bg-gradient-holographic rounded-full flex items-center justify-center animate-glow-pulse">
                      <Rocket className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-pink rounded-full animate-float" />
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-cyan rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-orbitron font-bold text-foreground">
                      Innovation Engine
                    </h3>
                    <p className="text-muted-foreground font-poppins">
                      Transforming Ideas into Reality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};