import { Award, Heart, Sparkles, Star } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Award, label: "Premium Quality" },
    { icon: Heart, label: "Customer First" },
    { icon: Sparkles, label: "Latest Trends" },
    { icon: Star, label: "Trusted Brand" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Welcome to{" "}
            <span className="text-gradient">Radha Krishna Cosmetic Corner</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Radha Krishna Cosmetic Corner offers a wide range of branded cosmetics,
            skincare and beauty products at affordable prices in Nagpur, Gandhibag.
            With years of trust and a passion for beauty, we bring you the finest
            selection of products to enhance your natural glow.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-card shadow-soft border border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
            <Heart className="w-5 h-5 text-primary fill-primary/20" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
