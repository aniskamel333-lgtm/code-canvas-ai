import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Users, Leaf, ShieldCheck, Heart } from "lucide-react";

export function About() {
  const { t, language } = useTranslation();

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/56de6c5d-451c-4830-b1bb-34aa84f7055b/about-hero-9a12540d-1780316405956.webp"
            alt="About DzFrip"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t("nav.about")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
          >
            {language === 'ar' 
              ? "نحن نؤمن بأن كل قطعة ملابس تستحق فرصة ثانية. انضم إلينا في رحلتنا نحو مستقبل أكثر استدامة."
              : "Nous croyons que chaque vêtement mérite une seconde chance. Rejoignez-nous pour un avenir plus durable."}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">
              {language === 'ar' ? "رؤيتنا وأهدافنا" : "Notre Vision et Objectifs"}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {language === 'ar'
                ? "انطلقت منصة DzFrip من قلب الجزائر بهدف معالجة التحديات البيئية والاقتصادية في قطاع الملابس. نحن نوفر مساحة آمنة للجزائريين لبيع ملابسهم المستعملة، تبادلها، أو حتى التبرع بها لمن يحتاجها."
                : "DzFrip a été lancée au cœur de l'Algérie pour relever les défis environnementaux et économiques du secteur de l'habillement. Nous offrons un espace sécurisé aux Algériens pour vendre, échanger ou donner leurs vêtements."}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 rounded-xl">
                <Leaf className="text-emerald-600 h-8 w-8 mb-2" />
                <h4 className="font-bold">{language === 'ar' ? "استدامة" : "Durabilité"}</h4>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <Users className="text-blue-600 h-8 w-8 mb-2" />
                <h4 className="font-bold">{language === 'ar' ? "مجتمع" : "Communauté"}</h4>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523381235312-da59b9e07f65?auto=format&fit=crop&q=80&w=800" 
              alt="Community" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center space-y-12">
          <h2 className="text-3xl font-bold">{language === 'ar' ? "لماذا تختار DzFrip؟" : "Pourquoi choisir DzFrip ?"}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <ShieldCheck className="h-12 w-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold">{language === 'ar' ? "أمان تام" : "Sécurité Totale"}</h3>
              <p className="text-slate-500">
                {language === 'ar' ? "نحن نضمن حماية بياناتك وتوفير بيئة آمنة للتعامل مع المشترين والبائعين." : "Nous garantissons la protection de vos données et un environnement sûr."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <Heart className="h-12 w-12 text-rose-500 mx-auto" />
              <h3 className="text-xl font-bold">{language === 'ar' ? "دعم الخير" : "Soutien Caritatif"}</h3>
              <p className="text-slate-500">
                {language === 'ar' ? "جزء من كل عملية ناجحة يساهم في دعم مبادراتنا الخيرية لتوفير الملابس للمحتاجين." : "Une partie de chaque transaction soutient nos initiatives caritatives."}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
              <Users className="text-xl h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="text-xl font-bold">{language === 'ar' ? "شبكة واسعة" : "Vaste Réseau"}</h3>
              <p className="text-slate-500">
                {language === 'ar' ? "تغطية شاملة لـ 58 ولاية، مما يسهل عليك العثور على ما تبحث عنه في أي مكان." : "Couverture complète des 58 wilayas, facilitant vos recherches."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}