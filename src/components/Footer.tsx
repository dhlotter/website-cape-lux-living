import { Building, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Services": [
      "Property Management",
      "Guest Services",
      "Marketing & Listing",
      "Maintenance",
      "Revenue Optimization"
    ],
    "Legal": [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Disclaimer",
      "Compliance"
    ]
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © {currentYear} Cape Lux Living. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;