"use client";

import Image from "next/image";
import { Flame, Star } from "lucide-react";
import { ProductTypes } from "@/types/product.types";
import ProductCartBtn from "../shared/ProductCartBtn/ProductCartBtn";
import Link from "next/link";

interface FoodCardProps {
  product: ProductTypes;
  onAddToCart?: (productId: string) => void;
}

const FoodCard = ({ product }: FoodCardProps) => {
  const {
    id,
    title,
    slug,
    description,
    price,
    discountPrice,
    categoryId,
    rating,
    totalReviews,
    stock,
    isAvailable,
    isFeatured,
    image,
  } = product;

  /**
   * Price Logic
   */
  const finalPrice = discountPrice ?? price;

  const hasDiscount = discountPrice !== undefined && discountPrice < price;

  const isOutOfStock = stock <= 0 || !isAvailable;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      {/* Featured */}
      {isFeatured && (
        <div className="absolute left-3 top-3 z-20 flex items-center gap-1 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-white">
          <Flame size={12} />
          Featured
        </div>
      )}

      {/* Out of stock */}
      {isOutOfStock && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50">
          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium">
            Out of Stock
          </span>
        </div>
      )}

      {/* IMAGE (SMALLER) */}
      <div className="relative h-48 overflow-hidden sm:h-52">
        {" "}
        <Image
          src={image || "/images/placeholder-food.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] text-gray-700">
          {categoryId}
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-3 p-4">
        {/* TITLE */}

        <Link
          href={`/foods/${slug}`}
          className="line-clamp-1 text-base font-semibold text-gray-900"
        >
          {title}
        </Link>

        {/* DESCRIPTION (SMALL) */}
        <p className="line-clamp-1 text-xs text-gray-500">{description}</p>

        {/* INFO ROW */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-yellow-600">
            <Star size={12} fill="currentColor" />
            {rating.toFixed(1)}
          </div>

          <span className={stock > 0 ? "text-green-600" : "text-red-500"}>
            {stock > 0 ? `${stock} left` : "No stock"}
          </span>
        </div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-gray-900">
                ${finalPrice}
              </span>

              {hasDiscount && (
                <span className="text-xs text-gray-400 line-through">
                  ${price}
                </span>
              )}
            </div>
          </div>

          <ProductCartBtn id={id} isOutOfStock={isOutOfStock} />
        </div>
      </div>
    </article>
  );
};

export default FoodCard;
