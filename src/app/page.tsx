import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedFlowers from "@/components/FeaturedFlowers";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <section id="home" aria-label="Hero banner">
          <HeroSection />
        </section>
        <section id="collection" aria-label="Featured flower collection">
          <FeaturedFlowers />
        </section>
        <section id="services" aria-label="Our services">
          <ServicesSection />
        </section>
        <section id="contact" aria-label="Contact us">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}