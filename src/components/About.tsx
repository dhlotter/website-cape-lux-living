import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, Target, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "Every decision we make puts our property owners and guests at the heart of our service delivery."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We maintain the highest standards in property management, ensuring exceptional experiences."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our focus is on maximizing your property returns while maintaining superior guest satisfaction."
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "Leveraging cutting-edge tools and platforms to optimize your property's performance."
    }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-20 bg-muted/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              About Cape Lux Living
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Johan du Plessis
              <span className="block text-primary">Your Property Management Expert</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in Cape Town's luxury property market, Johan du Plessis 
              founded Cape Lux Living to provide property owners with unparalleled management services 
              that maximize returns while ensuring exceptional guest experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our boutique approach means every property receives personalized attention, from strategic 
              pricing and marketing to meticulous maintenance and guest relations. We understand that 
              your property is more than an investment - it's a reflection of your standards.
            </p>
            <Button variant="luxury" size="lg">
              Discover Our Approach
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src="/lovable-uploads/a9cb49f8-f32b-4afc-a859-2d8f161c8df5.png"
                alt="Johan du Plessis - Cape Lux Living Founder"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-luxury border-0">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
                <div className="text-sm text-muted-foreground">in Luxury Property Management</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every aspect of our property management services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-luxury transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;