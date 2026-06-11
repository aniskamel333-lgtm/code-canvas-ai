import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, RefreshCw, Heart } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  isSwap?: boolean;
  isCharity?: boolean;
  condition: string;
}

export function ProductCard({ id, title, price, location, image, isSwap, isCharity, condition }: ProductCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/product/${id}`}>
        <Card className="overflow-hidden h-full group">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-2 right-2 flex flex-col gap-2">
              {isSwap && (
                <Badge className="bg-orange-500 hover:bg-orange-600 flex gap-1">
                  <RefreshCw className="h-3 w-3" />
                  {t("product.swap")}
                </Badge>
              )}
              {isCharity && (
                <Badge className="bg-pink-500 hover:bg-pink-600 flex gap-1">
                  <Heart className="h-3 w-3" />
                  {t("nav.charity")}
                </Badge>
              )}
            </div>
            <div className="absolute bottom-2 left-2">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-slate-900">
                {condition}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg line-clamp-1 mb-1">{title}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
              <MapPin className="h-3 w-3" />
              {location}
            </div>
            {!isCharity && (
              <div className="text-xl font-bold text-emerald-600">
                {price.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">{t("product.price")}</span>
              </div>
            )}
            {isCharity && (
              <div className="text-xl font-bold text-pink-600 uppercase">
                {t("charity.request")}
              </div>
            )}
          </CardContent>
          <CardFooter className="p-4 pt-0 text-xs text-muted-foreground border-t border-slate-100 mt-2 py-2 flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-green-500"></span>
             {t("product.cod")}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}