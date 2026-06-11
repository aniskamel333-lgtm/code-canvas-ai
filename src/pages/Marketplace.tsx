import { useTranslation } from "@/hooks/use-translation";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { CategoryBar } from "@/components/marketplace/CategoryBar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, SlidersHorizontal } from "lucide-react";

export function Marketplace() {
  const { t, language } = useTranslation();

  const products = [
    { id: "1", title: "فستان كاراكو جزائري أصيل", price: 25000, location: "الجزائر", image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/56de6c5d-451c-4830-b1bb-34aa84f7055b/karakou-listing-53e01e5f-1780245671536.webp", isSwap: true, condition: "ممتازة" },
    { id: "2", title: "قميص صيفي رجالي", price: 1800, location: "وهران", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400", condition: "جديد" },
    { id: "3", title: "حذاء رياضي نايك", price: 8500, location: "قسنطينة", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400", isSwap: true, condition: "جيد جداً" },
    { id: "4", title: "حقيبة يد جلدية", price: 4200, location: "سطيف", image: "https://images.unsplash.com/photo-1584917033900-97d1744a695a?auto=format&fit=crop&q=80&w=400", condition: "ممتازة" },
    { id: "5", title: "جاكيت جينز عصري", price: 3500, location: "عنابة", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400", isSwap: true, condition: "جيد" },
    { id: "6", title: "فستان سهرة أحمر", price: 12000, location: "تلمسان", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400", condition: "جيد جداً" },
    { id: "7", title: "ساعة يد كلاسيكية", price: 6000, location: "بجاية", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400", condition: "ممتازة" },
    { id: "8", title: "نظارات شمسية ريبان", price: 9500, location: "البليدة", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400", isSwap: false, condition: "جديد" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{t("nav.buy")}</h1>
          <p className="text-muted-foreground">{language === 'ar' ? 'اكتشف أفضل العروض في جميع أنحاء الجزائر' : 'Découvrez les meilleures offres partout en Algérie'}</p>
        </div>
        <div className="flex gap-2">
          <div className="relative w-full md:w-64">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Select>
              <SelectTrigger className="pl-9">
                <SelectValue placeholder={language === 'ar' ? 'اختر الولاية' : 'Wilaya'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alger">الجزائر العاصمة</SelectItem>
                <SelectItem value="oran">وهران</SelectItem>
                <SelectItem value="constantine">قسنطينة</SelectItem>
                <SelectItem value="setif">سطيف</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" className="flex gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            {language === 'ar' ? 'فلترة' : 'Filtres'}
          </Button>
        </div>
      </div>

      <CategoryBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}