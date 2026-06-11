import { useTranslation } from "@/hooks/use-translation";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-bold text-white block">DzFrip</Link>
          <p className="text-sm leading-relaxed">
            {t("footer.about")}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{t("footer.links")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/marketplace" className="hover:text-emerald-500 transition-colors">{t("nav.buy")}</Link></li>
            <li><Link to="/swap" className="hover:text-emerald-500 transition-colors">{t("nav.swap")}</Link></li>
            <li><Link to="/charity" className="hover:text-emerald-500 transition-colors">{t("nav.charity")}</Link></li>
            <li><Link to="/services" className="hover:text-emerald-500 transition-colors">{t("nav.services")}</Link></li>
            <li><Link to="/about" className="hover:text-emerald-500 transition-colors">{t("nav.about")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">{t("footer.contact")}</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 
              <a href="tel:+213555123456" className="hover:text-emerald-500 transition-colors">+213 555 12 34 56</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> 
              <a href="mailto:support@dzfrip.dz" className="hover:text-emerald-500 transition-colors">support@dzfrip.dz</a>
            </li>
            <li className="mt-4 flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-sky-500 transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h4 className="text-white font-semibold mb-2">الدفع عند الاستلام 📦</h4>
          <p className="text-xs text-slate-400">
            {t("product.cod")} متوفر في 58 ولاية جزائرية. نضمن لك جودة المنتج قبل الدفع.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
        © 2024 DzFrip - صنع بكل ❤️ في الجزائر
      </div>
    </footer>
  );
}