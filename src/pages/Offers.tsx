import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Truck, Users, Clock, ShoppingCart } from "lucide-react";

const Offers = () => {
  const currentOffers = [
    {
      id: 1,
      title: "Buy 3, Save 5%",
      description: "Purchase any 3 jars and get 5% off your total order",
      discount: "5% OFF",
      terms: "Valid on all sizes. Cannot be combined with other offers.",
      icon: ShoppingCart,
      validUntil: "Ongoing",
      popular: true
    },
    {
      id: 2,
      title: "Free Delivery in Eldoret",
      description: "Free same-day delivery for orders of 2 or more jars in Eldoret",
      discount: "FREE DELIVERY",
      terms: "Minimum 2 jars. Eldoret area only. Same-day delivery.",
      icon: Truck,
      validUntil: "Ongoing",
      popular: false
    },
    {
      id: 3,
      title: "Referral Rewards",
      description: "Refer a friend and both get 10% off your next order",
      discount: "10% OFF",
      terms: "Both referrer and referee must make a purchase. One-time use per customer.",
      icon: Users,
      validUntil: "Ongoing",
      popular: false
    }
  ];

  const seasonalOffers = [
    {
      title: "Family Bundle Deal",
      description: "3 × 800g jars at a special discounted price",
      originalPrice: 1800,
      discountedPrice: 1650,
      savings: 150,
      status: "Coming Soon"
    },
    {
      title: "Monthly Subscription",
      description: "Subscribe and save 15% on every delivery",
      originalPrice: 600,
      discountedPrice: 510,
      savings: 90,
      status: "Coming Soon"
    }
  ];

  const loyaltyProgram = {
    title: "Abila Loyalty Program",
    description: "Earn points with every purchase and unlock exclusive rewards",
    benefits: [
      "1 point for every KSh 10 spent",
      "100 points = KSh 50 discount",
      "Birthday month special offers",
      "Early access to new flavors",
      "Exclusive member-only promotions"
    ],
    status: "Launching Soon"
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Special Offers & Promotions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save more on your favorite peanut butter with our exclusive deals and promotions.
          </p>
        </div>

        {/* Current Offers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-brand-peanut">Current Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {currentOffers.map((offer) => (
              <Card key={offer.id} className={`relative overflow-hidden ${offer.popular ? 'border-brand-green' : ''}`}>
                {offer.popular && (
                  <Badge className="absolute top-4 right-4 bg-brand-green">Most Popular</Badge>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <offer.icon className="w-12 h-12 text-brand-peanut mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                    <div className="text-2xl font-bold text-brand-green mb-2">{offer.discount}</div>
                    <p className="text-muted-foreground">{offer.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-xs text-muted-foreground border-t pt-4">
                      <strong>Terms:</strong> {offer.terms}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Valid until:</span>
                      <Badge variant="outline">{offer.validUntil}</Badge>
                    </div>
                    <Button className="w-full bg-brand-green hover:bg-brand-green/90">
                      Claim Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Offers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-brand-peanut">Coming Soon</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="opacity-75">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground">{offer.description}</p>
                    </div>
                    <Badge variant="secondary">{offer.status}</Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground line-through">
                        KSh {offer.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-xl font-bold text-brand-green">
                        KSh {offer.discountedPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-brand-peanut font-medium">
                      Save KSh {offer.savings}!
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="bg-gradient-to-r from-brand-peanut to-brand-warm text-white rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">{loyaltyProgram.title}</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">{loyaltyProgram.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {loyaltyProgram.benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">{loyaltyProgram.status}</Badge>
            <p className="text-sm opacity-75">
              Sign up for our newsletter to be notified when the loyalty program launches!
            </p>
          </div>
        </div>

        {/* How to Redeem */}
        <div className="bg-secondary/20 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-brand-peanut">How to Redeem Offers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Choose Your Offer</h3>
                <p className="text-sm text-muted-foreground">
                  Select from our current promotions above
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Place Your Order</h3>
                <p className="text-sm text-muted-foreground">
                  Use our floating order button or contact us directly
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Mention the Offer</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us which promotion you'd like to use
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;