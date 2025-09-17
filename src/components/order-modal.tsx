import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Minus, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productJar from "@/assets/product-jar.jpg";
import emailjs from "@emailjs/browser";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const { toast } = useToast();
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    paymentMethod: "",
    items: [
      { id: 1, name: "250g Smooth Peanut Butter", price: 200, quantity: 1 },
    ],
  });

  const updateQuantity = (id: number, change: number) => {
    setOrderData((prev) => ({
      ...prev,
      items: prev.items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0),
    }));
  };

  const addItem = (size: string, price: number) => {
    const newId = Math.max(...orderData.items.map((i) => i.id), 0) + 1;
    setOrderData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: newId,
          name: `${size} Smooth Peanut Butter`,
          price,
          quantity: 1,
        },
      ],
    }));
  };

  // subtotal and shipping
  const total = orderData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost =
    orderData.location.toLowerCase().includes("eldoret") && total >= 600
      ? 0
      : 150;
  const grandTotal = total + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !orderData.name ||
      (!orderData.email && !orderData.phone) ||
      !orderData.location ||
      !orderData.paymentMethod
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Send email to Abila Team
    emailjs.send(
      "service_6q5uzb6",
      "template_axvgqu7",
      {
        customer_name: orderData.name,
        customer_email: orderData.email || "Not provided",
        customer_phone: orderData.phone || "Not provided",
        customer_location: orderData.location,
        order_items: orderData.items
          .map(
            (item) =>
              `${item.quantity}x ${item.name} = KSh ${
                item.price * item.quantity
              }`
          )
          .join("\n"),
        subtotal: total,
        shipping: shippingCost,
        total: grandTotal,
      },
      "slChlzaZfELZjM0lT"
    );

    // Send confirmation email to Customer
    emailjs.send(
      "service_6q5uzb6",
      "template_nswzzma",
      {
        to_email: orderData.email || "Not provided",
        to_name: orderData.name,
        order_items: orderData.items
          .map(
            (item) =>
              `${item.quantity}x ${item.name} = KSh ${
                item.price * item.quantity
              }`
          )
          .join("\n"),
        subtotal: total,
        shipping: shippingCost,
        total: grandTotal,
      },
      "slChlzaZfELZjM0lT"
    );

    toast({
      title: "Order Received!",
      description:
        "We've sent a confirmation email. Our team will contact you within 24 hours.",
    });

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Quick Order
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold">Select Products</h3>

            {orderData.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={productJar}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      KSh {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="mx-2 min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addItem("250g", 200)}
              >
                + Add 250g
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addItem("400g", 300)}
              >
                + Add 400g
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => addItem("800g", 600)}
              >
                + Add 800g
              </Button>
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={orderData.name}
                onChange={(e) =>
                  setOrderData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={orderData.email}
                onChange={(e) =>
                  setOrderData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={orderData.phone}
                onChange={(e) =>
                  setOrderData((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="+254..."
              />
            </div>
            <div>
              <Label htmlFor="location">Delivery Location *</Label>
              <Input
                id="location"
                value={orderData.location}
                onChange={(e) =>
                  setOrderData((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                placeholder="e.g., Eldoret, Nairobi"
                required
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <Label htmlFor="payment">Payment Method *</Label>
            <Select
              value={orderData.paymentMethod}
              onValueChange={(value) =>
                setOrderData((prev) => ({ ...prev, paymentMethod: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mpesa">M-Pesa</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
                <SelectItem value="cod">Cash on Delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>KSh {total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>KSh {shippingCost}</span>
              </div>
              {orderData.location.toLowerCase().includes("eldoret") &&
                total >= 600 && (
                  <p className="text-sm text-brand-green">
                    🎉 Free delivery in Eldoret!
                  </p>
                )}
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>KSh {grandTotal}</span>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-brand-green hover:bg-brand-green/90"
          >
            Place Order
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
