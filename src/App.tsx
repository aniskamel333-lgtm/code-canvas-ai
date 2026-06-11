import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Marketplace } from "./pages/Marketplace";
import { Charity } from "./pages/Charity";
import { ListingCreate } from "./pages/ListingCreate";
import { ProductDetails } from "./pages/ProductDetails";
import { Checkout } from "./pages/Checkout";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { useTranslation } from "./hooks/use-translation";

function App() {
  const { language } = useTranslation();

  useEffect(() => {
    // Set initial dir and lang
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/swap" element={<Marketplace />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/create" element={<ListingCreate />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position={language === 'ar' ? 'bottom-left' : 'bottom-right'} />
      </div>
    </Router>
  );
}

export default App;