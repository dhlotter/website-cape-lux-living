import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-primary focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  );
};

export default Index;
