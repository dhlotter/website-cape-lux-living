import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  Users,
  Home,
  TrendingUp,
  CheckCircle,
  Hammer
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import airbnbLogo from "@/assets/logos/airbnb.webp";
import bookingLogo from "@/assets/logos/booking.webp";
import lekkeLogo from "@/assets/logos/lekke.webp";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Professional Marketing",
      description: "Premium photography, virtual tours, and multi-platform listing optimization to maximize visibility.",
      features: [
        "Professional photography & staging",
        "Virtual tours & 360° experiences",
        "Multi-platform listing management",
        "Dynamic pricing optimization",
        "SEO-optimized descriptions"
      ]
    },
    {
      icon: Users,
      title: "Guest Management",
      description: "Comprehensive guest services from booking to checkout, ensuring 5-star experiences.",
      features: [
        "Guest screening & verification",
        "Personalized check-in experiences",
        "24/7 guest support & concierge",
        "Welcome amenities & local guides",
        "Post-stay follow-up & reviews"
      ]
    },
    {
      icon: Home,
      title: "Property Maintenance",
      description: "Proactive property care and maintenance to protect your investment value.",
      features: [
        "Regular property inspections",
        "Professional cleaning services",
        "Maintenance & repair coordination",
        "Inventory management",
        "Emergency response services"
      ]
    },
    {
      icon: TrendingUp,
      title: "Revenue Optimization",
      description: "Strategic pricing and performance analytics to maximize your rental income.",
      features: [
        "Dynamic pricing strategies",
        "Market analysis & reporting",
        "Occupancy rate optimization",
        "Revenue forecasting",
        "Performance dashboards"
      ]
    },
    {
      icon: Hammer,
      title: "Renovations",
      description: "Complete renovation and improvement services to enhance your property's value and appeal.",
      features: [
        "Interior design & styling",
        "Kitchen & bathroom upgrades",
        "Flooring & lighting improvements",
        "Furniture & decor selection",
        "Project management & coordination"
      ]
    }
  ];

  const platformLogos = [
    {
      name: "Airbnb",
      logo: airbnbLogo,
      background: "bg-[#FF5A5F]",
      padding: "p-1"
    },
    {
      name: "Booking.com",
      logo: bookingLogo,
      background: "bg-[#ffffff]",
      padding: "p-0"
    },
    {
      name: "LekkeSlaap",
      logo: lekkeLogo,
      background: "bg-[#F37021]",
      padding: "p-0"
    }
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="services" 
      className={`py-20 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Property Management
            <span className="block text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From marketing and guest management to maintenance and revenue optimization, 
            we handle every aspect of your property investment so you can focus on what matters most.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mt-6 leading-relaxed">
            Our distribution network spans leading travel platforms including Airbnb, Booking.com, and LekkeSlaap—ensuring your property reaches premium guests locally and abroad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
            {platformLogos.map((platform) => (
              <div
                key={platform.name}
                className={`w-20 h-20 rounded-full shadow-elegant flex items-center justify-center overflow-hidden ${platform.background} ${platform.padding}`}
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main Services Grid - Responsive Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group border-0 bg-white transition-all duration-300 hover:shadow-luxury"
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;