import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mary Wanjiku",
      location: "Eldoret",
      rating: 5,
      text: "My family absolutely loves Abila peanut butter! It's so creamy and natural. My kids ask for it every morning with their bread.",
      category: "Family Customer"
    },
    {
      name: "James Kiprop",
      location: "Nairobi",
      rating: 5,
      text: "As a fitness trainer, I recommend Abila to all my clients. It's pure, protein-rich, and perfect for post-workout nutrition.",
      category: "Fitness Trainer"
    },
    {
      name: "Grace Achieng",
      location: "Kisumu",
      rating: 5,
      text: "The delivery service is excellent! I ordered on WhatsApp and received my jar the same day. Quality is top-notch.",
      category: "Regular Customer"
    },
    {
      name: "David Mwangi",
      location: "Eldoret",
      rating: 5,
      text: "I've tried many peanut butter brands, but Abila is the best. No artificial taste, just pure peanut goodness.",
      category: "Food Enthusiast"
    },
    {
      name: "Sarah Chebet",
      location: "Mombasa",
      rating: 5,
      text: "Love supporting local businesses! Abila's mission and quality make me a customer for life. Keep up the great work!",
      category: "Local Business Supporter"
    },
    {
      name: "Peter Omondi",
      location: "Nakuru",
      rating: 5,
      text: "Perfect for my morning smoothies. Dissolves well and adds great flavor. The 800g size is excellent value for money.",
      category: "Health Conscious"
    }
  ];

  const trainerEndorsement = {
    name: "John Kiprotich",
    title: "Certified Fitness Trainer",
    location: "Elite Fitness Center, Eldoret",
    text: "I've been recommending Abila Peanut Butter to my clients for over 6 months now. It's one of the few locally-made products that meets international nutrition standards. The protein content is excellent for muscle recovery, and the natural ingredients make it perfect for clean eating plans. My athletes have seen real improvements in their energy levels and recovery times.",
    credentials: "10+ years experience, ACSM Certified"
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">What Our Customers Say</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families and fitness professionals 
            across Kenya are saying about Abila Peanut Butter.
          </p>
        </div>

        {/* Professional Endorsement */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-brand-peanut text-center">Professional Endorsement</h2>
          <Card className="max-w-4xl mx-auto border-brand-green">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <Quote className="w-8 h-8 text-brand-green flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg italic mb-6 text-muted-foreground">
                    "{trainerEndorsement.text}"
                  </p>
                  <div className="border-l-4 border-brand-green pl-4">
                    <h3 className="font-semibold text-lg">{trainerEndorsement.name}</h3>
                    <p className="text-brand-peanut font-medium">{trainerEndorsement.title}</p>
                    <p className="text-sm text-muted-foreground">{trainerEndorsement.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{trainerEndorsement.credentials}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-brand-peanut text-center">Customer Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">({testimonial.rating}/5)</span>
                  </div>
                  
                  <blockquote className="flex-grow mb-4">
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-brand-peanut">{testimonial.category}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-brand-peanut to-brand-warm text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Trusted by Families Across Kenya</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.9★</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2000+</div>
                <div className="text-sm opacity-90">Jars Sold</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;