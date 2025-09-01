import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "./button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Offers", path: "/offers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              <span className="text-brand-peanut">Abila</span>
              <span className="text-brand-green text-sm ml-1">Peanut Butter</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors hover:text-brand-peanut ${
                  isActive(item.path) 
                    ? "text-brand-peanut font-medium" 
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="ml-4">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors hover:text-brand-peanut ${
                    isActive(item.path) 
                      ? "text-brand-peanut font-medium" 
                      : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" size="sm" className="w-fit">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart (0)
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;