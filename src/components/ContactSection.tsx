import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Github } from "lucide-react";
import imp4Logo from "@/assets/imp4.png";
import logo2 from "@/assets/logo2.png";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <footer id="contact" className="relative py-24 bg-background border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 particle-bg opacity-10" />
      <div className="animated-line absolute top-0 left-0 w-full h-px" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-sm font-poppins text-primary">Get in Touch</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground">
                Ready to{" "}
                <span className="bg-gradient-neon bg-clip-text text-transparent">
                  Connect
                </span>
                ?
              </h2>
              
              <p className="text-lg text-muted-foreground font-poppins">
                Have questions about our programs? Want to schedule a tour of our facilities? 
                Our team is here to help you start your innovation journey.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-primary/20 hover:bg-card/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-orbitron font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground font-poppins">incubation@united.edu.in</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-secondary/20 hover:bg-card/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-orbitron font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground font-poppins">+91-6390903018</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-accent/20 hover:bg-card/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-orbitron font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground font-poppins">
                    UIH, 2nd Floor, Block <br />
                    United Institute of Technology <br />
                    Naini, Prayagraj, Uttar Pradesh - 211010  
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-orbitron font-semibold text-foreground">Follow Our Journey</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, href: "#" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Github className="w-5 h-5" />, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary hover:shadow-glow-blue transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="holographic-border">
            <div className="bg-card/50 backdrop-blur-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                  Send us a Message
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-poppins text-foreground">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-muted hover:border-primary focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-poppins text-foreground">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-muted hover:border-primary focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-poppins text-foreground">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="bg-background/50 border-muted hover:border-primary focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-poppins text-foreground">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your idea or how we can help..."
                    required
                    rows={5}
                    className="bg-background/50 border-muted hover:border-primary focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-holographic rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-sm">UI</span>
            </div>
            <span className="font-orbitron font-bold text-foreground">United Incubation Hub</span>
            &nbsp; &nbsp;
            <img 
               src={imp4Logo} 
               alt="IMP4 Logo" 
               className="w-20 h-20 object-contain"
            />&nbsp; &nbsp;
            <img 
               src={logo2} 
               alt="Logo 2" 
               className="w-20 h-20 object-contain"
            />
          </div>
          
          <p className="text-sm text-muted-foreground font-poppins text-center md:text-right">
            © United Incubation Hub. All rights reserved.<br />
            Empowering innovators to build the future.
          </p>
        </div>
      </div>
    </footer>
  );
};