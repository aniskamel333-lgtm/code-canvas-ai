import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { ShoppingBag, Star, Shirt, User, Baby, Sparkles } from "lucide-react";

export function CategoryBar() {
  const { t } = useTranslation();

  const categories = [
    { icon: <ShoppingBag className="h-4 w-4" />, label: t("categories.all"), color: "bg-slate-100" },
    { icon: <Star className="h-4 w-4" />, label: t("categories.traditional"), color: "bg-amber-100 text-amber-700" },
    { icon: <Shirt className="h-4 w-4" />, label: t("categories.casual"), color: "bg-blue-100 text-blue-700" },
    { icon: <User className="h-4 w-4" />, label: t("categories.formal"), color: "bg-indigo-100 text-indigo-700" },
    { icon: <Baby className="h-4 w-4" />, label: t("categories.kids"), color: "bg-pink-100 text-pink-700" },
    { icon: <Sparkles className="h-4 w-4" />, label: t("categories.accessories"), color: "bg-purple-100 text-purple-700" },
  ];

  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
      {categories.map((cat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <Button
            variant="ghost"
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-6 ${cat.color} hover:opacity-80`}
          >
            {cat.icon}
            <span className="font-semibold">{cat.label}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}