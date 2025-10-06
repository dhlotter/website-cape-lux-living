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


  const platforms = [
    {
      name: "Airbnb",
      url: "https://airbnb.com",
      label: "airbnb",
      color: "#FF5A5F"
    },
    {
      name: "Booking.com",
      url: "https://booking.com",
      label: "Booking",
      color: "#003580"
    },
    {
      name: "LekkeSlaap",
      url: "https://www.lekkeslaap.co.za",
      label: "LekkeSlaap",
      color: "#FF7F11"
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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            We expertly list, manage, and optimise your home on premier booking platforms like Airbnb, Booking.com,
            and LekkeSlaap to maximise returns while delivering five-star guest experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center space-y-3">
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 rounded-full"
                >
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full shadow-luxury transition-transform duration-300 hover:scale-110 md:h-24 md:w-24"
                    style={{ backgroundColor: platform.color }}
                  >
                    <span className="text-white font-semibold text-sm md:text-base tracking-wide uppercase">
                      {platform.label}
                    </span>
                  </div>
                </a>
                <span className="text-sm font-medium text-muted-foreground">{platform.name}</span>
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