import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, RefreshCw, TrendingUp, Package, ChevronRight } from "lucide-react";

export function Dashboard() {
  const { t } = useTranslation();

  const stats = [
    { label: t("dashboard.earnings"), value: "45,000 دج", icon: <TrendingUp className="h-5 w-5" />, color: "text-emerald-600 bg-emerald-50" },
    { label: t("dashboard.my_listings"), value: "8", icon: <Package className="h-5 w-5" />, color: "text-blue-600 bg-blue-50" },
    { label: t("dashboard.sales"), value: "3", icon: <ShoppingBag className="h-5 w-5" />, color: "text-purple-600 bg-purple-50" },
    { label: t("dashboard.swaps"), value: "2", icon: <RefreshCw className="h-5 w-5" />, color: "text-orange-600 bg-orange-50" },
  ];

  const recentListings = [
    { id: "1", title: "فستان كاراكو جزائري", type: "sale", status: "sold", price: "25,000 دج", date: "2024-03-10" },
    { id: "3", title: "حذاء رياضي نايك", type: "swap", status: "active", price: "8,500 دج", date: "2024-03-12" },
    { id: "2", title: "قميص صيفي رجالي", type: "sale", status: "active", price: "1,800 دج", date: "2024-03-15" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{t("dashboard.title")}</h1>
        <p className="text-muted-foreground">{t("dashboard.welcome")}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="p-6 flex flex-col gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>{t("dashboard.my_listings")}</CardTitle>
            <Badge variant="outline">{t("dashboard.view_all")}</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentListings.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-16 bg-slate-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-slate-200 animate-pulse"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-[10px] py-0">
                          {item.type === 'sale' ? t("listing.type_sale") : t("listing.type_swap")}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground">{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-bold">{item.price}</div>
                      <div className={`text-[10px] ${item.status === 'sold' ? 'text-emerald-600' : 'text-blue-600'}`}>
                        {item.status === 'sold' ? t("dashboard.sold") : t("dashboard.active")}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("dashboard.notifications")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-lg bg-emerald-50 text-emerald-800 text-xs flex gap-3">
              <div className="w-1 h-full bg-emerald-600 rounded-full"></div>
              <div>
                <p className="font-bold">تم بيع قطعة!</p>
                <p>تم بيع فستان كاراكو بنجاح. سنرسل لك المندوب قريباً.</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 text-orange-800 text-xs flex gap-3">
              <div className="w-1 h-full bg-orange-600 rounded-full"></div>
              <div>
                <p className="font-bold">طلب تبادل جديد</p>
                <p>يرغب سمير في تبادل حذاء نايك الخاص بك بقميص رسمي.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}