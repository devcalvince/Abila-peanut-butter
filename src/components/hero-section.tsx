import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import productJar from "@/assets/product-jar.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="relative min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">Trusted by 500+ families in Eldoret</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Pure Peanut
              <span className="block text-yellow-400">Pleasure</span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-lg">
              Nutritious, affordable, and purpose-driven peanut butter that feeds families 
              and promotes reproductive health and wellness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-green hover:bg-brand-green/90 text-white"
                onClick={() => navigate("/products")}
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white hover:bg-white hover:text-primary"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-300">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">KSh 200</div>
                <div className="text-sm text-gray-300">Starting from</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">3 Sizes</div>
                <div className="text-sm text-gray-300">Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-peanut to-brand-green rounded-full blur-3xl opacity-20 scale-110"></div>
              <img 
                src={productJar} 
                alt="Abila Peanut Butter Jar" 
                className="relative z-10 w-80 h-80 object-contain drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-primary rounded-full w-20 h-20 flex items-center justify-center font-bold text-sm z-20">
                NEW!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
