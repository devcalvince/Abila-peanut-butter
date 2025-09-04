import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Minus, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productJar from "@/assets/product-jar.jpg";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const { toast } = useToast();

  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    paymentMethod: "",
    items: [] as CartItem[],
  });

  const products = [
    { id: 1, name: "400g Smooth Peanut Butter", price: 300 },
    { id: 2, name: "800g Smooth Peanut Butter", price: 600 },
  ];

  const addItem = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setOrderData(prev => {
      const existingItem = prev.items.find(i => i.id === product.id);
      if (existingItem) {
        return {
          ...prev,
          items: prev.items.map(i =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...prev, items: [...prev.items, { ...product, quantity: 1 }] };
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setOrderData(prev => ({
      ...prev,
      items: prev.items
        .map(item => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter(item => item.quantity > 0),
    }));
  };

  const subtotal = orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const shippingCost = (() => {
    const loc = orderData.location.toLowerCase();
    if (loc.includes("eldoret")) {
      const totalJars = orderData.items.reduce((sum, item) => sum + item.quantity, 0);
      return totalJars >= 2 ? 0 : 150;
    } else if (loc) {
      // Dynamic fee outside Eldoret (you can adjust logic)
      return Math.min(Math.max(100, subtotal * 0.1), 250);
    } else {
      return 0;
    }
  })();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!orderData.name || (!orderData.email && !orderData.phone) || !orderData.location || !orderData.paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const orderSummary = `
New Order from ${orderData.name}

Contact Information:
- Name: ${orderData.name}
- Email: ${orderData.email || 'Not provided'}
- Phone: ${orderData.phone || 'Not provided'}
- Location: ${orderData.location}

Order Details:
${orderData.items.map(item => `- ${item.quantity}x ${item.name} = KSh ${item.price * item.quantity}`).join('\n')}

Subtotal: KSh ${subtotal}
Shipping: KSh ${shippingCost}
Total: KSh ${subtotal + shippingCost}

Payment Method: ${orderData.paymentMethod}
    `.trim();

    toast({
      title: "Order Received!",
      description: "We'll contact you within 24 hours to confirm your order and arrange delivery.",
    });

    console.log("Order details:", orderSummary);
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
            <div className="grid grid-cols-2 gap-4">
              {products.map(p => (
                <Button
                  key={p.id}
                  type="button"
                  variant="outline"
                  onClick={() => addItem(p.id)}
                  className="h-auto p-4 flex flex-col"
                >
                  <img src={productJar} alt={p.name} className="w-16 h-16 object-contain mb-2" />
                  <span className="font-medium">{p.name.split(" ")[0]}</span>
                  <span className="text-brand-peanut">KSh {p.price}</span>
                </Button>
              ))}
            </div>

            {/* Cart Items */}
            {orderData.items.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={productJar} alt={item.name} className="w-12 h-12 object-contain" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">KSh {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => updateQuantity(item.id, -1)}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="mx-2 min-w-[2rem] text-center">{item.quantity}</span>
                  <Button type="button" variant="outline" size="sm" onClick={() => updateQuantity(item.id, 1)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={orderData.name}
                onChange={e => setOrderData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={orderData.email}
                onChange={e => setOrderData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={orderData.phone}
                onChange={e => setOrderData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="+254..."
              />
            </div>
            <div>
              <Label htmlFor="location">Delivery Location *</Label>
              <Input
                id="location"
                value={orderData.location}
                onChange={e => setOrderData(prev => ({ ...prev, location: e.target.value }))}
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
              onValueChange={value => setOrderData(prev => ({ ...prev, paymentMethod: value }))}
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
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between"><span>Subtotal:</span><span>KSh {subtotal}</span></div>
            <div className="flex justify-between"><span>Shipping:</span><span>KSh {shippingCost}</span></div>
            {orderData.location.toLowerCase().includes('eldoret') && subtotal >= 600 && (
              <p className="text-sm text-brand-green">🎉 Free delivery in Eldoret!</p>
            )}
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total:</span>
              <span>KSh {subtotal + shippingCost}</span>
            </div>
          </div>

          <Button type="submit" className="w-full bg-brand-green hover:bg-brand-green/90">
            Place Order
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Email OR phone number required. We'll contact you within 24 hours to confirm your order.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
