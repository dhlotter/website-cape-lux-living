import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Award, Heart, Target, Zap, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCallback, useEffect, useRef, useState } from "react";

// Import carousel images
import image01 from "@/assets/carousel/image-01.webp";
import image02 from "@/assets/carousel/image-02.webp";
import image03 from "@/assets/carousel/image-03.webp";
import image04 from "@/assets/carousel/image-04.webp";
import image05 from "@/assets/carousel/image-05.webp";
import image06 from "@/assets/carousel/image-06.webp";
import image07 from "@/assets/carousel/image-07.webp";
import image08 from "@/assets/carousel/image-08.webp";
import image09 from "@/assets/carousel/image-09.webp";
import image10 from "@/assets/carousel/image-10.webp";
import image11 from "@/assets/carousel/image-11.webp";
import image12 from "@/assets/carousel/image-12.webp";
import image13 from "@/assets/carousel/image-13.webp";
import image14 from "@/assets/carousel/image-14.webp";
import image15 from "@/assets/carousel/image-15.webp";
import image16 from "@/assets/carousel/image-16.webp";
import image17 from "@/assets/carousel/image-17.webp";
import image18 from "@/assets/carousel/image-18.webp";
import image19 from "@/assets/carousel/image-19.webp";
import image20 from "@/assets/carousel/image-20.webp";
import image21 from "@/assets/carousel/image-21.webp";
import image22 from "@/assets/carousel/image-22.webp";
import image23 from "@/assets/carousel/image-23.webp";
import image24 from "@/assets/carousel/image-24.webp";
import image25 from "@/assets/carousel/image-25.webp";
import image26 from "@/assets/carousel/image-26.webp";

const About = () => {
  const carouselImages = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
    image09,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const pause = useCallback(() => setPaused(true), []);
  const resume = useCallback(() => setPaused(false), []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api, paused]);

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-20 bg-muted/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
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
          <div
            ref={carouselRef}
            className="relative w-full max-w-full overflow-hidden"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocusCapture={pause}
            onBlurCapture={resume}
          >
            <Carousel 
              className="w-full"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-luxury w-full">
                      <img 
                        src={image}
                        alt={`Cape Lux Living property showcase ${index + 1} of ${carouselImages.length}`}
                        width={800}
                        height={500}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105 max-w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-center mt-4 gap-3">
              <span className="text-xs text-muted-foreground tabular-nums">
                {current + 1} / {carouselImages.length}
              </span>
              <div className="w-24 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${((current + 1) / carouselImages.length) * 100}%` }}
                />
              </div>
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