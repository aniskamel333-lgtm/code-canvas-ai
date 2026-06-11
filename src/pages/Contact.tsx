import { useTranslation } from "@/hooks/use-translation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const { t, language } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(language === 'ar' ? "تم إرسال رسالتك بنجاح!" : "Message envoyé avec succès !");
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t("nav.contact")}</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {language === 'ar'
            ? "هل لديك استفسار؟ نحن هنا للمساعدة. تواصل معنا وسيقوم فريقنا بالرد عليك في أقرب وقت."
            : "Avez-vous une question ? Nous sommes là pour vous aider."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card className="border-none shadow-md bg-emerald-50">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full text-emerald-600 shadow-sm">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">{language === 'ar' ? "اتصل بنا" : "Appelez-nous"}</h4>
                  <p className="text-slate-600">+213 555 12 34 56</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full text-blue-600 shadow-sm">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">{language === 'ar' ? "البريد الإلكتروني" : "E-mail"}</h4>
                  <p className="text-slate-600">support@dzfrip.dz</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full text-rose-600 shadow-sm">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">{language === 'ar' ? "المقر" : "Adresse"}</h4>
                  <p className="text-slate-600">{language === 'ar' ? "الجزائر العاصمة، حي سعيد حمدين" : "Alger, Said Hamdine"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-3xl overflow-hidden h-64 shadow-inner">
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/56de6c5d-451c-4830-b1bb-34aa84f7055b/contact-hero-8176935d-1780316405717.webp"
              alt="Map Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">{language === 'ar' ? "الاسم الكامل" : "Nom Complet"}</label>
              <Input placeholder={language === 'ar' ? "أدخل اسمك..." : "Votre nom..."} required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{language === 'ar' ? "البريد الإلكتروني" : "E-mail"}</label>
              <Input type="email" placeholder="example@email.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{language === 'ar' ? "الموضوع" : "Sujet"}</label>
              <Input placeholder={language === 'ar' ? "كيف يمكننا مساعدتك؟" : "Comment pouvons-nous vous aider ?"} required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{language === 'ar' ? "الرسالة" : "Message"}</label>
              <Textarea placeholder={language === 'ar' ? "اكتب رسالتك هنا..." : "Votre message..."} rows={5} required />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg">
              <Send className="mr-2 h-5 w-5 rtl:ml-2 rtl:mr-0" />
              {language === 'ar' ? "إرسال الرسالة" : "Envoyer"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}