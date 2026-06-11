import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, RefreshCw, Heart, Truck, ShieldCheck, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Simulated product data
  const product = {
    id: "1",
    title: "فستان كاراكو جزائري أصيل",
    price: 25000,
    location: "الجزائر العاصمة، القبة",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/56de6c5d-451c-4830-b1bb-34aa84f7055b/karakou-listing-53e01e5f-1780245671536.webp",
    isSwap: true,
    condition: "ممتازة (مستعمل مرة واحدة)",
    category: "ملابس تقليدية",
    size: "L / 40",
    seller: "ليلى ب.",
    description: "كاراكو عاصمي فخم جداً، تطريز يدوي بالفتلة والمجبود. قطعة فريدة من نوعها للمناسبات الكبيرة. القماش قطيفة أصلية. السعر قابل للتفاوض البسيط أو التبادل بقطعة في نفس القيمة.",
  };

  const handleBuy = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-slate-100 border border-slate-200 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <img src={product.image} alt="" className="w-full h-full object-cover opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">{product.category}</Badge>
              {product.isSwap && <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">{t("product.swap")}</Badge>}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {product.location}
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
              <div>{product.condition}</div>
            </div>
            <div className="text-4xl font-bold text-emerald-600">
              {product.price.toLocaleString()} <span className="text-xl font-normal text-muted-foreground">{t("product.price")}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs text-muted-foreground mb-1">المقاس</div>
              <div className="font-bold">{product.size}</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-xs text-muted-foreground mb-1">البائع</div>
              <div className="font-bold">{product.seller}</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <Button onClick={handleBuy} size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700 h-14 text-lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                {t("product.buy_now")}
              </Button>
              <Button size="lg" variant="outline" className="h-14 w-14 p-0 border-pink-200 text-pink-500">
                <Heart className="h-6 w-6" />
              </Button>
            </div>
            {product.isSwap && (
              <Button size="lg" variant="outline" className="w-full h-14 border-orange-200 text-orange-600 hover:bg-orange-50">
                <RefreshCw className="mr-2 h-5 w-5" />
                {t("nav.swap")}
              </Button>
            )}
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-bold text-xl">{t("listing.description")}</h3>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">توصيل سريع</h4>
                <p className="text-xs text-muted-foreground">توصيل لباب المنزل في غضون 48-72 ساعة.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">ضمان المعاينة</h4>
                <p className="text-xs text-muted-foreground">افحص طلبك قبل الدفع عند الاستلام.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}