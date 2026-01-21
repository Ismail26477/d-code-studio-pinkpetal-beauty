import { Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Store Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold mb-2">
              Radha Krishna Cosmetic Corner
            </h3>
            <p className="text-primary-foreground/70">
              Your One Stop Beauty Destination
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Phone className="w-4 h-4 text-primary" />
              <span>099702 58768</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Gandhibag, Nagpur</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-primary-foreground/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Radha Krishna Cosmetic Corner. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Nagpur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
