import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Award, Heart, Target, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const About = () => {
  const carouselImages = [
    "/src/assets/carousel/image-01.jpg",
    "/src/assets/carousel/image-02.jpg",
    "/src/assets/carousel/image-03.jpg",
    "/src/assets/carousel/image-04.jpg",
    "/src/assets/carousel/image-05.jpg",
    "/src/assets/carousel/image-06.jpg",
    "/src/assets/carousel/image-07.jpg",
    "/src/assets/carousel/image-08.jpg",
    "/src/assets/carousel/image-09.jpg",
    "/src/assets/carousel/image-10.jpg",
    "/src/assets/carousel/image-11.jpg",
    "/src/assets/carousel/image-12.jpg",
    "/src/assets/carousel/image-13.jpg",
    "/src/assets/carousel/image-14.jpg",
    "/src/assets/carousel/image-15.jpg",
    "/src/assets/carousel/image-16.jpg",
    "/src/assets/carousel/image-17.jpg",
    "/src/assets/carousel/image-18.jpg",
    "/src/assets/carousel/image-19.jpg",
    "/src/assets/carousel/image-20.jpg",
    "/src/assets/carousel/image-21.jpg",
    "/src/assets/carousel/image-22.jpg",
    "/src/assets/carousel/image-23.jpg",
    "/src/assets/carousel/image-24.jpg",
    "/src/assets/carousel/image-25.jpg",
    "/src/assets/carousel/image-26.jpg"
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We set the highest standards in everything we do— from pricing strategies to property care-ensuring owners and guests experience nothing less than the best."
    },
    {
      icon: Heart,
      title: "Trust & Transparency",
      description: "Open communication and honest reporting form the foundation of our partnerships. You'll always know how your property is performing."
    },
    {
      icon: Target,
      title: "Attention to Detail",
      description: "Every property deserves meticulous care. From professional cleaning to proactive maintenance, we treat your investment as if it were our own."
    },
    {
      icon: Users,
      title: "Guest-Centric Approach",
      description: "Happy guests mean repeat bookings and stronger returns. We focus on creating memorable stays that drive long-term success for our owners."
    },
    {
      icon: Zap,
      title: "Boutique Personalization",
      description: "No two properties-or owners-are the same. Our tailored solutions ensure your property receives the individual attention it deserves."
    }
  ];

  const { ref, isVisible } = useScrollAnimation();
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

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
              Personalized Property Management, Elevated
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded by Johan du Plessis, Cape Lux Living brings over a decade of expertise in Cape Town's luxury property market to discerning property owners. Our boutique approach blends strategic management with a personal touch—ensuring your investment not only achieves its full earning potential but also delivers unforgettable guest experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Cape Lux Living, every property is treated as a reflection of your standards. From tailored pricing strategies and world-class marketing to meticulous maintenance and warm guest relations, we go beyond management—we create lasting value.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <Carousel 
              className="w-full max-w-lg mx-auto"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-luxury">
                      <img 
                        src={image}
                        alt={`Property showcase ${index + 1}`}
                        className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden" />
              <CarouselNext className="hidden" />
            </Carousel>
            
            {/* Custom Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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