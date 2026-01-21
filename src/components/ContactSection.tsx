import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "099702 58768",
      action: handleCall,
      actionText: "Call Now",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gandhibag, Nagpur",
      action: handleLocation,
      actionText: "Get Directions",
    },
    {
      icon: Clock,
      title: "Store Hours",
      value: "10:00 AM - 9:00 PM",
      action: null,
      actionText: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Visit <span className="text-gradient">Our Store</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to see you! Stop by our store in Gandhibag, Nagpur or reach out
            to us through phone or WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-display font-semibold mb-1">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{info.value}</p>
                  {info.action && (
                    <button
                      onClick={info.action}
                      className="text-primary font-medium mt-2 hover:underline text-sm"
                    >
                      {info.actionText} →
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={handleCall} className="flex-1">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
              <Button variant="whatsapp" size="lg" onClick={handleWhatsApp} className="flex-1">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/50 min-h-[400px]">
            <div className="absolute inset-0 bg-secondary/80 flex flex-col items-center justify-center p-8 text-center">
              <MapPin className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-2xl font-display font-bold mb-2">
                Radha Krishna Cosmetic Corner
              </h3>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Gandhibag, Nagpur, Maharashtra, India
              </p>
              <Button variant="outline" size="lg" onClick={handleLocation}>
                <MapPin className="w-5 h-5" />
                Open in Google Maps
              </Button>
            </div>
            {/* Decorative Grid Pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
