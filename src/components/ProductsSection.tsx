import { ArrowRight } from "lucide-react";
import categoryMakeup from "@/assets/category-makeup.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categoryHaircare from "@/assets/category-haircare.jpg";
import categoryPerfumes from "@/assets/category-perfumes.jpg";
import categoryAccessories from "@/assets/category-accessories.jpg";

const categories = [
  {
    name: "Makeup",
    description: "Lipsticks, Foundations, Eyeshadows & More",
    image: categoryMakeup,
    gradient: "from-rose-dark/80 to-primary/60",
  },
  {
    name: "Skincare",
    description: "Serums, Moisturizers, Face Creams",
    image: categorySkincare,
    gradient: "from-rose-dark/80 to-accent/60",
  },
  {
    name: "Haircare",
    description: "Shampoos, Conditioners, Hair Oils",
    image: categoryHaircare,
    gradient: "from-rose-dark/80 to-primary/60",
  },
  {
    name: "Perfumes",
    description: "Luxury Fragrances & Deodorants",
    image: categoryPerfumes,
    gradient: "from-rose-dark/80 to-accent/60",
  },
  {
    name: "Beauty Accessories",
    description: "Brushes, Sponges, Mirrors & Tools",
    image: categoryAccessories,
    gradient: "from-rose-dark/80 to-primary/60",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Explore Our <span className="text-gradient">Product Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From everyday essentials to luxury beauty products, find everything you need
            to look and feel your best.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-primary-foreground">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-primary-foreground/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
