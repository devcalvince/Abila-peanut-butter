import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Abila Peanut Butter</h3>
            <p className="text-sm opacity-90">
              Nutritious, affordable, and purpose-driven peanut butter for families across Kenya.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Pioneer, Kisumu Road, Eldoret</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+254 700 298161</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>ochiengsteven2003@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-cream transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-cream transition-colors">Products</Link></li>
              <li><Link to="/testimonials" className="hover:text-brand-cream transition-colors">Testimonials</Link></li>
              <li><Link to="/offers" className="hover:text-brand-cream transition-colors">Current Offers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-cream transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li>400g Smooth - KSh 300</li>
              <li>800g Smooth - KSh 600</li>
              <li className="opacity-75">Crunchy (Coming Soon)</li>
              <li className="opacity-75">Honey-Infused (Coming Soon)</li>
              <li className="opacity-75">Chocolate Peanut (Coming Soon)</li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-3 mb-4">
              <Button variant="secondary" size="sm" asChild>
                <a href="https://facebook.com/abilapeanutbutter" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <a href="https://instagram.com/abila_nut" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <a href="https://wa.me/254700298161" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm opacity-90 mb-2">WhatsApp us for instant support!</p>
            <Button variant="secondary" size="sm" asChild>
              <a href="https://wa.me/254700298161" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-75">
              © 2024 Abila Peanut Butter. All rights reserved. | Reg. No: BN-Y6S97KOD
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="hover:text-brand-cream transition-colors">Privacy Policy</Link>
              <Link to="/shipping" className="hover:text-brand-cream transition-colors">Shipping Policy</Link>
              <Link to="/returns" className="hover:text-brand-cream transition-colors">Returns</Link>
              <Link to="/terms" className="hover:text-brand-cream transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;