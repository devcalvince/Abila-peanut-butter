import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Abila Peanut Butter</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a mission to provide nutritious, affordable, and purpose-driven peanut butter 
            that not only feeds families but also promotes reproductive health and wellness.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-brand-peanut">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              To provide nutritious, affordable, and purpose-driven peanut butter that not only feeds 
              families but also promotes reproductive health and wellness across Kenya and beyond.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-brand-green mx-auto mb-2" />
                  <div className="font-semibold">Health</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 text-brand-peanut mx-auto mb-2" />
                  <div className="font-semibold">Quality</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-brand-green mx-auto mb-2" />
                  <div className="font-semibold">Integrity</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-brand-peanut mx-auto mb-2" />
                  <div className="font-semibold">Purpose</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-brand-peanut">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by Steven Ochieng in the heart of Eldoret, Kenya, Abila Peanut Butter began 
                as a vision to create something more than just food - a product that nourishes both 
                body and community.
              </p>
              <p>
                Located at Pioneer, Kisumu Road, Eldoret, our company has grown from a small startup 
                to a recognized brand, earning the prestigious "Best Startup" award from the Eldohub 
                Miliki Program.
              </p>
              <p>
                Today, we serve over 500 families across Kenya, staying true to our core values of 
                health, quality, integrity, and purpose-driven growth.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-secondary/20 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-brand-peanut">Meet Our Founder</h2>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">Steven Ochieng</h3>
              <p className="text-muted-foreground">
                Steven's passion for nutrition and community wellness drives Abila's mission. 
                With a vision to make healthy, affordable nutrition accessible to every Kenyan family, 
                he has built Abila into a trusted brand that goes beyond just peanut butter.
              </p>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8 text-brand-peanut">Recognition & Achievements</h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Startup Award</h3>
              <p className="text-muted-foreground">Eldohub Miliki Program</p>
              <div className="mt-4 text-sm text-muted-foreground">
                <strong>Business Registration:</strong> BN-Y6S97KOD, Kenya
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;