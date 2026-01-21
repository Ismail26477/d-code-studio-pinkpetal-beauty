import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const handleCall = () => {
    window.open("tel:+919970258768", "_self");
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919970258768?text=Hello! I'm interested in your cosmetic products.",
      "_blank"
    );
  };

  const handleLocation = () => {
    window.open(
      "https://www.google.com/maps/search/Radha+Krishna+Cosmetic+Corner+Gandhibag+Nagpur",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Premium Cosmetics Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl space-y-8 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Premium Beauty Store in Nagpur
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            Your One Stop{" "}
            <span className="text-gradient">Beauty Destination</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Discover premium cosmetics, skincare, and beauty products at the most
            affordable prices. Transform your beauty routine with our curated
            collection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" onClick={handleCall}>
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
            <Button variant="whatsapp" size="xl" onClick={handleWhatsApp}>
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
            <Button variant="heroOutline" size="xl" onClick={handleLocation}>
              <MapPin className="w-5 h-5" />
              Visit Store
            </Button>
          </div>

          {/* Store Info */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">099702 58768</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">Gandhibag, Nagpur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
