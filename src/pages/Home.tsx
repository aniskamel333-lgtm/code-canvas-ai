import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { CategoryBar } from "@/components/marketplace/CategoryBar";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export function Home() {
  const { t, language } = useTranslation();

  const featuredProducts = [
    {
      id: "1",
      title: "فستان كاراكو جزائري أصيل",
      price: 25000,
      location: "الجزائر العاصمة",
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/56de6c5d-451c-4830-b1bb-34aa84f7055b/karakou-listing-53e01e5f-1780245671536.webp",
      isSwap: true,
      condition: "ممتازة",
    },
    {
      id: "2",
      title: "قميص صيفي رجالي",
      price: 1800,
      location: "وهران",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400",
      condition: "جديد",
    },
    {
      id: "3",
      title: "حذاء رياضي نايك",
      price: 8500,
      location: "قسنطينة",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
      isSwap: true,
      condition: "جيد جداً",
    },
    {
      id: "4",
      title: "حقيبة يد جلدية",
      price: 4200,
      location: "سطيف",
      image: "https://images.unsplash.com/photo-1584917033900-97d1744a695a?auto=format&fit=crop&q=80&w=400",
      condition: "ممتازة",
    },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-slate-900 flex items-center">
        <div className="absolute inset-0 opacity-50">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/56de6c5d-451c-4830-b1bb-34aa84f7055b/hero-banner-5cac4b7d-1780245670254.webp"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-200 max-w-xl"
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/marketplace">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                {t("hero.cta_buy")}
              </Button>
            </Link>
            <Link to="/create">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20 text-lg px-8">
                {t("hero.cta_sell")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <CategoryBar />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="w-2 h-8 bg-emerald-600 rounded-full"></span>
            {language === 'ar' ? 'أحدث العروض' : 'Dernières offres'}
          </h2>
          <Link to="/marketplace" className="text-emerald-600 hover:underline flex items-center gap-1 font-medium">
            {language === 'ar' ? 'عرض الكل' : 'Voir tout'}
            {language === 'ar' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Charity Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-pink-50 to-rose-600 rounded-3xl overflow-hidden shadow-xl text-white">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 space-y-6">
              <Badge className="bg-white/20 text-white border-none text-sm mb-2">
                {t("nav.charity")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">{t("charity.title")}</h2>
              <p className="text-pink-50 text-lg">
                {t("charity.subtitle")} منصة مخصصة بالكامل لمساعدة الآخرين وتدوير الملابس مجاناً.
              </p>
              <div className="flex gap-4">
                <Link to="/charity">
                  <Button size="lg" variant="secondary" className="text-pink-600 font-bold hover:bg-pink-50">
                    <Heart className="mr-2 h-5 w-5 fill-current" />
                    {t("charity.donate")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-full">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/56de6c5d-451c-4830-b1bb-34aa84f7055b/charity-section-7cff55be-1780245671940.webp"
                alt="Charity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">🤝</div>
              <h3 className="font-bold text-xl">تبادل آمن</h3>
              <p className="text-muted-foreground">نضمن حماية بياناتك وتوفير بيئة آمنة للتفاوض والتبادل بين المستخدمين.</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto text-2xl">🚚</div>
              <h3 className="font-bold text-xl">توصيل سريع</h3>
              <p className="text-muted-foreground">خدمة التوصيل تغطي 58 ولاية مع ميزة الدفع عند الاستلام لراحتك.</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto text-2xl">❤️</div>
              <h3 className="font-bold text-xl">عمل خيري</h3>
              <p className="text-muted-foreground">ركن خاص للتبرعات، لأن ملابسك القديمة قد تكون بداية حياة جديدة لشخص آخر.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}