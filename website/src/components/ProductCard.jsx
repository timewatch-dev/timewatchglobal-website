import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ShoppingCart,
  Heart,
  Eye,
  ChevronRightCircleIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

// interface ProductCardProps {
//   id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   image: string;
//   rating: number;
//   reviewCount: number;
//   badge?: string;
//   description: string;
// }

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  badge,
  description,
  categoryName,
  subCategoryName,
}) {
  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

    // console.log("image", image)

  return (
    <Card className="group relative w-full max-w-sm overflow-hidden rounded-sm border-0 shadow-sm. transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 pt-0">
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {/* {console.log("Image URL:",  image)} */}
        {image !== undefined ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="400"
            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105 py-5"
          />
        ) : (
          <Image
            src={`/images/placeholder.jpeg`}
            alt={name}
            fill
            sizes="400"
            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105 py-0"
          />
        )}

        {/* Discount Badge */}
        {/* {discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 bg-red-500 hover:bg-red-600">
            -{discountPercentage}%
          </Badge>
        )} */}

        {/* Quick Actions */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
            <Heart className="h-4 w-4" />
          </Button> */}
          <Button
            size="icon"
            variant="secondary"
            className="!h-10 !w-10 rounded-full bg-primary cursor-pointer"
            asChild
          >
            <Link
              href={`/products/${seoFriendlySlug(categoryName)}/${seoFriendlySlug(
                subCategoryName
              )}/${seoFriendlySlug(name)}`}
            >
              <Eye className="h-5 w-5 text-white" />
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="pt-0">
        {/* Product Info */}
        <div className="mb-3">
          <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
            {name}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground mt-1">
            {description}
          </p>
        </div>

        {/* Rating */}
        {/* <div className="mb-3 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-xs text-muted-foreground">
            {rating} ({reviewCount} reviews)
          </span>
        </div> */}

        {/* Price */}
        {/* <div className="mb-4 flex items-center gap-2">
          <span className="text-xl font-bold">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div> */}

        {/* Add to Cart Button */}
        <Button className="w-full gap-2" size="sm" asChild>
          <Link
            href={`/products/${seoFriendlySlug(categoryName)}/${seoFriendlySlug(
              subCategoryName
            )}/${seoFriendlySlug(name)}`}
          >
            Read More
            <ChevronRightCircleIcon />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
