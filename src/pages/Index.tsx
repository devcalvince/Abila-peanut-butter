import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Shield, Heart } from "lucide-react";
import HeroSection from "@/components/hero-section";
import OrderModal from "@/components/order-modal";
import productJar from "@/assets/product-jar.jpg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection onShopNow={() => setIsModalOpen(true)} />

      {/* Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Abila?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality peanut butter that nourishes your family.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">100% Natural</h3>
                <p className="text-sm text-muted-foreground">No artificial preservatives or additives</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-brand-peanut mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">Rigorous quality checks at every step</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Same-day delivery in Eldoret</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">Best Startup - Eldohub Miliki Program</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground">Premium peanut butter in convenient sizes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <img src={productJar} alt="400g Jar" className="w-32 h-32 object-contain mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">400g Smooth</h3>
                <p className="text-muted-foreground mb-4">Perfect for small families</p>
                <div className="text-2xl font-bold text-brand-peanut mb-4">KSh 300</div>
                <Button
                  className="bg-brand-green hover:bg-brand-green/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <img src={productJar} alt="800g Jar" className="w-32 h-32 object-contain mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">800g Smooth</h3>
                <p className="text-muted-foreground mb-4">Great value for larger families</p>
                <div className="text-2xl font-bold text-brand-peanut mb-4">KSh 600</div>
                <Button
                  className="bg-brand-green hover:bg-brand-green/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-peanut to-brand-warm text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Try Abila Peanut Butter?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of satisfied families across Kenya</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/products")}
            >
              View All Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
