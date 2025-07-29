import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Property
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Management Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Maximize your property investment returns with our comprehensive luxury property management services in Cape Town's most exclusive locations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="xl" className="group">
              List Your Property
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="accent" size="xl">
              Explore Properties
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-white/80 text-sm">Occupancy Rate</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-white/80 text-sm">Secure & Insured</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80 text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;