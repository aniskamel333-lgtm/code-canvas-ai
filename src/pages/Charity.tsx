import { useTranslation } from "@/hooks/use-translation";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart, Gift, MessageCircle } from "lucide-react";

export function Charity() {
  const { t, language } = useTranslation();

  const charityItems = [
    { id: "c1", title: "مجموعة ملابس أطفال (3-6 أشهر)", price: 0, location: "تيزي وزو", image: "https://images.unsplash.com/photo-1519705380875-52633a5512ee?auto=format&fit=crop&q=80&w=400", isCharity: true, condition: "جيد جداً" },
    { id: "c2", title: "معاطف شتوية دافئة", price: 0, location: "المدية", image: "https://images.unsplash.com/photo-1539533377285-3013b1fad3cc?auto=format&fit=crop&q=80&w=400", isCharity: true, condition: "جيد" },
    { id: "c3", title: "أحذية مدرسية للبنات", price: 0, location: "الجلفة", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=400", isCharity: true, condition: "ممتازة" },
    { id: "c4", title: "بطانيات صوفية", price: 0, location: "الأغواط", image: "https://images.unsplash.com/photo-1584143276331-50993046243a?auto=format&fit=crop&q=80&w=400", isCharity: true, condition: "جيد" },
  ];

  return (
    <div className="space-y-12 pb-20">
      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-10 w-10 fill-current" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900">{t("charity.title")}</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t("charity.subtitle")} هدفنا هو أن لا يبقى أي شخص بدون ملابس لائقة في وطننا.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Gift className="mr-2 h-5 w-5" />
              {t("charity.donate")}
            </Button>
            <Button size="lg" variant="outline" className="border-pink-200 text-pink-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("charity.request")}
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold">{language === 'ar' ? 'تبرعات متاحة الآن' : 'Dons disponibles'}</h2>
          <div className="h-px flex-1 bg-pink-100"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {charityItems.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">كيف يعمل ركن الخير؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-pink-500">1</div>
                <h3 className="font-bold">أضف قطعة</h3>
                <p className="text-sm text-slate-400">قم بتصوير الملابس التي لا تحتاجها وأضفها في قسم التبرع.</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-pink-500">2</div>
                <h3 className="font-bold">تواصل المحتاج</h3>
                <p className="text-sm text-slate-400">سيتواصل معك الشخص المحتاج للقطعة عبر رسائل المنصة.</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-pink-500">3</div>
                <h3 className="font-bold">توصيل مجاني</h3>
                <p className="text-sm text-slate-400">نحاول التعاون مع شركات التوصيل لتخفيض التكاليف للحالات الخيرية.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}