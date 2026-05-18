"use client";

import { useCart } from "@/hooks/useCart";
import { CreateProductDTO } from "@/schemas/product.schema";
import { ShoppingCart } from "lucide-react";

export default function FoodCard({ food }: { food: CreateProductDTO }) {
  const { addItem } = useCart();

  const finalPrice = food.discountPrice ?? food.price;
  const isOutOfStock = food.stock <= 0 || !food.isAvailable;

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Featured Badge (optional, subtle) */}
      {food.isFeatured && (
        <span className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">
          Featured
        </span>
      )}

      {/* Image (optional fallback clean block) */}
      <div className="h-40 w-full bg-white/5 flex items-center justify-center">
        {food.image ? (
          <img
            src={food.image}
            alt={food.title}
            className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition"
          />
        ) : (
          <span className="text-white/20 text-xs">No Image</span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-sm font-medium text-white/90 truncate">
          {food.title}
        </h2>

        {/* Stock indicator (very subtle) */}
        <p className="text-[11px] text-white/40">
          {isOutOfStock ? "Out of stock" : `${food.stock} available`}
        </p>

        {/* Price Row */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <p className="text-sm text-white/80">৳ {finalPrice}</p>

            {food.discountPrice && (
              <p className="text-xs text-white/30 line-through">
                ৳ {food.price}
              </p>
            )}
          </div>

          {/* Add Button */}
          <button
            disabled={isOutOfStock}
            onClick={() =>
              addItem({
                _id: food._id,
                title: food.title,
                price: finalPrice,
                image: food.image ?? "",
                quantity: 1,
              })
            }
            className={`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border transition
              ${
                isOutOfStock
                  ? "bg-white/5 text-white/20 border-white/10 cursor-not-allowed"
                  : "bg-white/10 hover:bg-white/20 text-white/80 border-white/10"
              }`}
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>

      {/* subtle glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </div>
  );
}
