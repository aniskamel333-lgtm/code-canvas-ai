import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, ShieldCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success(t("checkout.success"));
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold mb-6">{t("checkout.title")}</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Truck className="h-5 w-5 text-emerald-600" />
                  {t("checkout.delivery_info")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{t("checkout.full_name")}</Label>
                    <Input required placeholder={t("checkout.name_placeholder")} />
                  </div>
                  <div className="space-y-2">
                    <Label>{t("checkout.phone")}</Label>
                    <Input required type="tel" placeholder="0555 00 00 00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>{t("checkout.wilaya")}</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder={t("product.location")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">01 - Adrar</SelectItem>
                      <SelectItem value="16">16 - Alger</SelectItem>
                      <SelectItem value="31">31 - Oran</SelectItem>
                      <SelectItem value="25">25 - Constantine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>{t("checkout.address")}</Label>
                  <Input required placeholder={t("checkout.address_placeholder")} />
                </div>
              </CardContent>
            </Card>

            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
              <div>
                <h4 className="font-bold text-emerald-900">{t("product.cod")}</h4>
                <p className="text-sm text-emerald-700">{t("checkout.cod_desc")}</p>
              </div>
            </div>

            <Button type="submit" className="w-full h-14 text-xl bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
              {loading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : t("checkout.confirm")}
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("checkout.summary")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>فستان كاراكو جزائري</span>
                <span className="font-medium">25,000 دج</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t("checkout.shipping")}</span>
                <span className="font-medium">600 دج</span>
              </div>
              <div className="h-px bg-slate-100 my-2"></div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span>{t("checkout.total")}</span>
                <span className="text-emerald-600">25,600 دج</span>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-xs text-center text-muted-foreground">
            {t("checkout.terms_desc")}
          </div>
        </div>
      </div>
    </div>
  );
}