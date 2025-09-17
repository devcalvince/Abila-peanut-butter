import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import productJar from "@/assets/product-jar.jpg";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    items: [] as { id: number; name: string; price: number; quantity: number }[],
  });

  // Add product to cart
  const addItem = (name: string, price: number) => {
    setOrderData((prev) => {
      const existing = prev.items.find((i) => i.name === name);
      if (existing) {
        return {
          ...prev,
          items: prev.items.map((i) =>
            i.name === name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...prev,
        items: [...prev.items, { id: Date.now(), name, price, quantity: 1 }],
      };
    });
  };

  // Remove product from cart
  const removeItem = (id: number) => {
    setOrderData((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.id !== id),
    }));
  };

  const total = orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Submit order (WhatsApp + Email)
  const handleSubmit = () => {
    if (!orderData.name || !orderData.phone || orderData.items.length === 0) {
      alert("Please fill in your details and select at least one product.");
      return;
    }

    const itemsText = orderData.items
      .map((i) => `${i.quantity} x ${i.name} (KSh ${i.price})`)
      .join(", ");

    const message = `🛒 New Order
Name: ${orderData.name}
Phone: ${orderData.phone}
Address: ${orderData.address}
Notes: ${orderData.notes}

Products: ${itemsText}
Total: KSh ${total}`;

    // ✅ Send to WhatsApp
    const whatsappUrl = `https://wa.me/254712345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // ✅ Send to Email
    const mailto = `mailto:orders@abila.co.ke?subject=New Order&body=${encodeURIComponent(message)}`;
    window.open(mailto);

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Place Your Order</DialogTitle>
        </DialogHeader>

        {/* Cart Section */}
        <div className="space-y-4">
          {orderData.items.length === 0 ? (
            <div className="grid grid-cols-3 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => addItem("250g Smooth Peanut Butter", 200)}
                className="h-auto p-4 flex flex-col"
              >
                <img src={productJar} alt="250g jar" className="w-16 h-16 object-contain mb-2" />
                <span className="font-medium">250g</span>
                <span className="text-brand-peanut">KSh 200</span>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => addItem("400g Smooth Peanut Butter", 300)}
                className="h-auto p-4 flex flex-col"
              >
                <img src={productJar} alt="400g jar" className="w-16 h-16 object-contain mb-2" />
                <span className="font-medium">400g</span>
                <span className="text-brand-peanut">KSh 300</span>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => addItem("800g Smooth Peanut Butter", 600)}
                className="h-auto p-4 flex flex-col"
              >
                <img src={productJar} alt="800g jar" className="w-16 h-16 object-contain mb-2" />
                <span className="font-medium">800g</span>
                <span className="text-brand-peanut">KSh 600</span>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center border rounded p-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} × KSh {item.price}
                    </p>
                  </div>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <p className="font-semibold text-right">Total: KSh {total}</p>
            </div>
          )}
        </div>

        {/* Customer Info */}
        <div className="space-y-4 mt-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={orderData.name}
              onChange={(e) => setOrderData({ ...orderData, name: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={orderData.phone}
              onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="address">Delivery Address</Label>
            <Textarea
              id="address"
              value={orderData.address}
              onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={orderData.notes}
              onChange={(e) => setOrderData({ ...orderData, notes: e.target.value })}
            />
          </div>
        </div>

        {/* Submit */}
        <Button className="w-full mt-6 bg-brand-green hover:bg-brand-green/90" onClick={handleSubmit}>
          Place Order
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
