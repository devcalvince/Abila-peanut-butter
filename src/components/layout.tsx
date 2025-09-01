import { ReactNode } from "react";
import Navigation from "@/components/ui/navigation";
import FloatingOrderButton from "./floating-order-button";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Layout;