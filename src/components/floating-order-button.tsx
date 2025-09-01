import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderModal from "./order-modal";

const FloatingOrderButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-brand-green hover:bg-brand-green/90 shadow-lg z-50 p-0"
        aria-label="Quick Order"
      >
        <ShoppingCart className="w-6 h-6 text-white" />
      </Button>
      
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FloatingOrderButton;