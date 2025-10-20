import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building, Briefcase, FileText, Phone, List } from "lucide-react";
import { cn } from "@/lib/utils";
import houseLinesLogo from "@/assets/capelux_house_lines.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About Us", href: "#about", icon: Building },
    { name: "Our Services", href: "#services", icon: Briefcase },
    { name: "Listings", href: "#listings", icon: List },
    { name: "Our Fees", href: "#fees", icon: FileText }
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" aria-label="Cape Lux Living home">
            <div className="flex items-center space-x-4">
              <img
                src={houseLinesLogo}
                alt="Cape Lux Living logo"
                className="w-28 h-[3.5rem] object-contain -translate-y-[0.4rem]"
                loading="lazy"
                decoding="async"
              />
              <span className="text-2xl sm:text-3xl font-['Cinzel',_serif] tracking-[0.08em] text-[#b7933b] leading-tight drop-shadow-sm">
                CapeLuxLiving
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground transition-smooth px-2 xl:px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap hover:bg-muted hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="luxury"
              size="default"
              className="text-sm"
              type="button"
              onClick={handleScrollToContact}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "lg:hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="px-4 pt-2 pb-4 space-y-1 border-t border-border shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 text-foreground px-4 py-3 rounded-lg text-base font-medium transition-smooth hover:bg-muted hover:text-primary active:bg-muted/80"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.name}</span>
              </a>
            );
          })}
          <div className="pt-4 px-4">
            <Button
              variant="luxury"
              size="default"
              className="w-full text-base py-3"
              type="button"
              onClick={handleScrollToContact}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;