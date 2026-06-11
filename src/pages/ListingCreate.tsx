import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, RefreshCw, ShoppingBag, Heart, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function ListingCreate() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string>("sale");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success(t("listing.submit"));
      setLoading(false);
      navigate("/marketplace");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{t("listing.create_title")}</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>{t("listing.type")}</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setType("sale")}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  type === "sale" ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <ShoppingBag className="h-6 w-6" />
                <span className="font-semibold">{t("listing.type_sale")}</span>
              </button>
              <button
                type="button"
                onClick={() => setType("swap")}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  type === "swap" ? "border-orange-500 bg-orange-50 text-orange-700" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <RefreshCw className="h-6 w-6" />
                <span className="font-semibold">{t("listing.type_swap")}</span>
              </button>
              <button
                type="button"
                onClick={() => setType("donation")}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                  type === "donation" ? "border-pink-500 bg-pink-50 text-pink-700" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <Heart className="h-6 w-6" />
                <span className="font-semibold">{t("listing.type_donation")}</span>
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>{t("listing.item_name")}</Label>
                  <Input required placeholder={t("checkout.name_placeholder")} />
                </div>
                <div className="space-y-2">
                  <Label>{t("listing.category")}</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={t("listing.category")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="traditional">{t("categories.traditional")}</SelectItem>
                      <SelectItem value="casual">{t("categories.casual")}</SelectItem>
                      <SelectItem value="formal">{t("categories.formal")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {type !== "donation" && (
                <div className="space-y-2">
                  <Label>{t("product.price")}</Label>
                  <Input type="number" required placeholder="0.00" />
                  <p className="text-xs text-muted-foreground">
                    * نأخذ عمولة 5% من كل عملية بيع ناجحة
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <Label>{t("listing.description")}</Label>
                <Textarea required className="h-32" />
              </div>

              <div className="space-y-2">
                <Label>الصور</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <button type="button" className="aspect-square rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                    <Camera className="h-6 w-6 text-slate-400" />
                    <span className="text-xs text-slate-400">أضف صورة</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full h-12 text-lg bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : t("listing.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
}