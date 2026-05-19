import React from "react";
import { Star, Clock3 } from "lucide-react";

const FoodCard = ({ image, name, category, price, rating, deliveryTime }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="line-clamp-1 text-lg font-semibold text-gray-900">
              {name}
            </h2>

            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <Clock3 size={15} />
              <span>{deliveryTime} min delivery</span>
            </div>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-sm font-medium text-orange-500">
            <Star size={14} fill="currentColor" />
            {rating}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">${price}</h3>
          </div>

          <button className="rounded-2xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
