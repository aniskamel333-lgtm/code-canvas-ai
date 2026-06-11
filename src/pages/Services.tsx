import { useTranslation } from "@/hooks/use-translation";
import { ShoppingBag, RefreshCw, Heart, Truck, ShieldCheck, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Services() {
  const { t, language } = useTranslation();

  const mainServices = [
    {
      title: t("nav.buy"),
      description: language === 'ar' ? "اكتشف تشكيلة واسعة من الملابس المستعملة بجودة عالية وأسعار لا تقبل المنافسة." : "Découvrez une large gamme de vêtements d'occasion de haute qualité.",
      icon: <ShoppingBag className="h-10 w-10 text-emerald-600" />,
      color: "bg-emerald-50",
    },
    {
      title: t("nav.swap"),
      description: language === 'ar' ? "استبدل ملابسك القديمة بقطع جديدة مع مستخدمين آخرين بكل سهولة." : "Échangez vos anciens vêtements contre de nouvelles pièces avec d'autres utilisateurs.",
      icon: <RefreshCw className="h-10 w-10 text-blue-600" />,
      color: "bg-blue-50",
    },
    {
      title: t("nav.charity"),
      description: language === 'ar' ? "ساهم في مساعدة الآخرين من خلال التبرع بملابسك الفائضة للمحتاجين." : "Aidez les autres en faisant don de vos vêtements excédentaires.",
      icon: <Heart className="h-10 w-10 text-rose-600" />,
      color: "bg-rose-50",
    },
  ];

  const features = [
    {
      title: language === 'ar' ? "توصيل سريع" : "Livraison Rapide",
      desc: language === 'ar' ? "خدمة توصيل موثوقة إلى 58 ولاية." : "Service de livraison fiable vers 58 wilayas.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: language === 'ar' ? "حماية المشتري" : "Protection Acheteur",
      desc: language === 'ar' ? "ضمان جودة المنتج قبل إتمام عملية الدفع." : "Garantie de qualité avant le paiement.",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      title: language === 'ar' ? "سهولة الاستخدام" : "Facilité d'Utilisation",
      desc: language === 'ar' ? "واجهة بسيطة وسهلة لعرض ملابسك في دقائق." : "Interface simple pour lister vos articles en quelques minutes.",
      icon: <Zap className="h-6 w-6" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold">{t("nav.services")}</h1>
        <p className="text-slate-600 text-lg">
          {language === 'ar' 
            ? "نحن نقدم مجموعة متكاملة من الخدمات لتسهيل إعادة تدوير ملابسك والاستفادة منها بأفضل طريقة ممكنة."
            : "Nous offrons une gamme complète de services pour faciliter le recyclage de vos vêtements."}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {mainServices.map((service, idx) => (
          <Card key={idx} className="border-none shadow-lg overflow-hidden">
            <CardHeader className={`${service.color} pb-12`}>
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <CardDescription className="text-base text-slate-600">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="bg-emerald-500/20 p-3 rounded-xl text-emerald-400">
                {f.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}