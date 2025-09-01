import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Clock, Truck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message || (!formData.email && !formData.phone)) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, message, and either email or phone number.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the form data
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Pioneer, Kisumu Road", "Eldoret, Kenya"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 700 298161", "+254 769 679557 (Backup)"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["ochiengsteven2003@gmail.com", "och.calvince.14@gmail.com"],
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Quick responses", "Order directly"],
      action: "Chat Now"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need help with your order? 
            We're here to help! Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-brand-peanut">Send Us a Message</h2>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        placeholder="e.g., Product inquiry"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+254..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand-green hover:bg-brand-green/90">
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    * Email OR phone number required. We'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-peanut">Get In Touch</h2>
            
            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <info.icon className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                      <div className="flex-grow">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          if (info.title === "WhatsApp") {
                            window.open("https://wa.me/254700298161", "_blank");
                          } else if (info.title === "Call Us") {
                            window.open("tel:+254700298161", "_blank");
                          } else if (info.title === "Email Us") {
                            window.open("mailto:ochiengsteven2003@gmail.com", "_blank");
                          }
                        }}
                      >
                        {info.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="w-5 h-5 text-brand-green" />
                  <h3 className="font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Truck className="w-5 h-5 text-brand-green" />
                  <h3 className="font-semibold">Delivery Information</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-brand-peanut">Eldoret Town:</strong>
                    <p className="text-muted-foreground">Free delivery for 2+ jars (same-day)</p>
                  </div>
                  <div>
                    <strong className="text-brand-peanut">Outside Eldoret:</strong>
                    <p className="text-muted-foreground">KSh 100-250 depending on distance (1-3 working days)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Order CTA */}
        <div className="mt-16 bg-gradient-to-r from-brand-peanut to-brand-warm text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
          <p className="mb-6 opacity-90">
            Skip the form and order directly through WhatsApp for the fastest service!
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => window.open("https://wa.me/254700298161", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Order on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;