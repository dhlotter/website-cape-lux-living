const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
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
              <a
                href="https://easyentropy.com/contact"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-primary transition-colors text-sm"
              >
                Built by Easy Entropy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;