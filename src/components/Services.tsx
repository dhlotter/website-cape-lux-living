import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Users, 
  Home, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
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
        </div>

        {/* Main Services Grid - Responsive Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>


        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Maximize Your Property Returns?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of property owners who trust Cape Lux Living to manage their investments 
            and deliver exceptional returns.
          </p>
          <Button variant="luxury" size="lg" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;