import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Pricing = () => {
  const pricingFeatures = [
    "Multi-platform listing management",
    "Professional photography & marketing",
    "Guest screening & management", 
    "24/7 guest support",
    "Property maintenance coordination",
    "Professional cleaning services",
    "Dynamic pricing optimization",
    "Monthly detailed reporting",
    "Emergency response services",
    "Insurance coverage assistance",
    "Legal compliance management",
    "Revenue optimization strategies"
  ];

  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      id="fees" 
      className={`py-20 bg-muted/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Simple, All-Inclusive
            <span className="block text-primary">Management Fee</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One transparent fee that covers everything. No hidden costs, no surprise charges. 
            You only pay when your property earns.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 bg-white shadow-luxury">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
            
            <CardHeader className="text-center pb-8 pt-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              
              <CardTitle className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                20%
                <span className="text-lg font-normal text-muted-foreground ml-2">+ VAT</span>
              </CardTitle>
              
              <p className="text-xl text-primary font-semibold mb-2">
                of your rental revenue
              </p>
              
              <p className="text-muted-foreground max-w-md mx-auto">
                Comprehensive property management with no upfront costs. 
                We succeed when you succeed.
              </p>
            </CardHeader>

            <CardContent className="px-8 pb-12">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                  Everything Included in Your Management Fee
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-3">Payment Schedule</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monthly payouts:</span>
                    <span className="font-medium">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bi-weekly payouts:</span>
                    <span className="font-medium">Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Owner dashboard access:</span>
                    <span className="font-medium">Real-time</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button variant="luxury" size="lg" className="w-full md:w-auto">
                  Start Earning Today
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  No setup fees • No monthly minimums • Cancel anytime
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">No</div>
                <div className="text-sm text-muted-foreground">Setup Fees</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">No</div>
                <div className="text-sm text-muted-foreground">Hidden Costs</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 bg-white">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Transparent</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;