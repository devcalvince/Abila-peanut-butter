import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Clock } from "lucide-react";
import productJar from "@/assets/product-jar.jpg";

const Products = () => {
  const currentProducts = [
    {
      id: 1,
      name: "400g Smooth Peanut Butter",
      price: 300,
      description: "Perfect portion for small families or trying our product for the first time.",
      features: ["100% Natural", "No Preservatives", "Rich in Protein", "Smooth Texture"],
      inStock: true
    },
    {
      id: 2,
      name: "800g Smooth Peanut Butter",
      price: 600,
      description: "Great value pack for larger families. Save more with our bigger size!",
      features: ["100% Natural", "No Preservatives", "Rich in Protein", "Smooth Texture", "Best Value"],
      inStock: true,
      popular: true
    }
  ];

  const comingSoon = [
    {
      name: "400g Crunchy Peanut Butter",
      description: "For those who love texture in their peanut butter.",
      estimatedPrice: 320
    },
    {
      name: "400g Honey-Infused Peanut Butter",
      description: "Natural sweetness meets creamy peanut goodness.",
      estimatedPrice: 350
    },
    {
      name: "400g Chocolate Peanut Butter",
      description: "The perfect blend of chocolate and peanut flavors.",
      estimatedPrice: 380
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium peanut butter made with the finest ingredients, available in sizes perfect for every family.
          </p>
        </div>

        {/* Current Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-brand-peanut">Available Now</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {currentProducts.map((product) => (
              <Card key={product.id} className={`relative overflow-hidden ${product.popular ? 'border-brand-green' : ''}`}>
                {product.popular && (
                  <Badge className="absolute top-4 right-4 bg-brand-green">Most Popular</Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <img src={productJar} alt={product.name} className="w-32 h-32 object-contain mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-peanut mb-4">
                      KSh {product.price.toLocaleString()}
                    </div>
                    <Button 
                      className="w-full bg-brand-green hover:bg-brand-green/90"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-brand-peanut">Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {comingSoon.map((product, index) => (
              <Card key={index} className="opacity-75">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                    <div className="text-lg font-bold text-brand-peanut mb-4">
                      Est. KSh {product.estimatedPrice}
                    </div>
                    <Button variant="outline" disabled>
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bulk Orders */}
        <div className="bg-secondary/20 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-brand-peanut">Bulk Orders & Future Plans</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for larger quantities? We're working on family bundles, subscription services, 
              and expanding to major supermarkets and online platforms.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Family Bundles</h3>
                <p className="text-muted-foreground">3 × 800g jars at discounted prices</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Subscription Service</h3>
                <p className="text-muted-foreground">Monthly peanut butter delivery</p>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <h3 className="font-semibold mb-2">Retail Expansion</h3>
                <p className="text-muted-foreground">Jumia, Glovo, Carrefour & more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;