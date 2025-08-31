import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import imp4Logo from "@/assets/imp4.png";
import logo2 from "@/assets/logo2.png";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Success Stories", href: "#stories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-holographic rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-sm">UIH</span>
            </div>
            <span className="text-xl font-orbitron font-bold text-foreground">
              United Incubation Hub
            </span> &nbsp; &nbsp;
            <img 
               src={logo2} 
               alt="Logo 2" 
               className="w-20 h-20 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-poppins relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button variant="hero" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-lg rounded-lg mt-2 border border-primary/20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-all duration-300 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-2 left-3 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-[calc(100%-24px)]"></span>
                </a>
              ))}
              <div className="px-3 py-2">
                <Button variant="hero" size="sm" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};