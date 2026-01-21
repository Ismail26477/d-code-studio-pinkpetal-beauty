import { Shield, Wallet, Layers, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Genuine Products",
    description:
      "100% authentic branded products with proper certification and quality assurance.",
  },
  {
    icon: Wallet,
    title: "Best Prices",
    description:
      "Competitive pricing that ensures you get premium quality at affordable rates.",
  },
  {
    icon: Layers,
    title: "Wide Variety",
    description:
      "Extensive collection of cosmetics from top national and international brands.",
  },
  {
    icon: Users,
    title: "Trusted Local Store",
    description:
      "Serving Nagpur with dedication and building lasting relationships with our customers.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-secondary/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            Our Promise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, authenticity, and
            customer satisfaction.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                {/* Decorative Ring */}
                <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-primary/20 scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
