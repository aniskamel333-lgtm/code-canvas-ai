import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Heart, User, Search, Menu, Globe, LayoutDashboard } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const { t, language, setLanguage } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/marketplace", label: t("nav.buy") },
    { href: "/swap", label: t("nav.swap") },
    { href: "/charity", label: t("nav.charity") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <ShoppingBag className="h-8 w-8 text-emerald-600" />
            <span className="hidden sm:inline">DzFrip</span>
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === 'ar' ? 'بحث...' : 'Rechercher...'}
              className="pl-9 pr-4 py-1.5 text-sm rounded-full border bg-muted focus:outline-none focus:ring-2 focus:ring-primary/20 w-40"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'ar' ? 'fr' : 'ar')}
            className="flex items-center gap-1"
          >
            <Globe className="h-5 w-5" />
            <span className="text-xs uppercase">{language === 'ar' ? 'FR' : 'AR'}</span>
          </Button>

          <Link to="/create">
            <Button className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700">
              {t("nav.sell")}
            </Button>
          </Link>

          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <LayoutDashboard className="h-5 w-5" />
            </Button>
          </Link>

          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side={language === 'ar' ? 'right' : 'left'}>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="text-lg font-semibold">
                   {t("dashboard.title")}
                </Link>
                <Link to="/create" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-emerald-600">
                    {t("nav.sell")}
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}