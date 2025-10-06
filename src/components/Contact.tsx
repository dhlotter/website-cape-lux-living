import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-20 bg-background transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Maximize Your
            <span className="block text-primary">Property Returns?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contact us today to discuss how Cape Lux Living can transform your property 
            into a profitable, stress-free investment.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button asChild variant="luxury" size="lg" className="w-full">
              <a href="tel:+27834619283">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white shadow-luxury hover:shadow-glow transform hover:scale-105 transition-bounce"
            >
              <a
                href="https://wa.me/27834619283?text=Cape%20Lux%20Living%20-%20Property%20Management%20Enquiry%0A%0AHi%20Johan%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full shadow-luxury hover:shadow-glow transform hover:scale-105 transition-bounce"
            >
              <a href="mailto:ijduplessis@yahoo.com?subject=Cape%20Lux%20Living%20-%20Property%20Management%20Enquiry">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;