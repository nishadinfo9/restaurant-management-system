"use client";

import Image from "next/image";
import { Star, Clock3, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

export default function FoodDetailsPage() {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const food = {
    name: "Double Cheese Burger",
    category: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop",
    price: 18,
    rating: 4.8,
    reviews: 124,
    deliveryTime: 20,
    description:
      "A juicy grilled beef burger layered with double cheddar cheese, fresh lettuce, tomato, onions, and our signature sauce inside a soft toasted bun.",
    ingredients: [
      "Beef Patty",
      "Cheddar Cheese",
      "Fresh Lettuce",
      "Tomato",
      "Onion",
      "Special Sauce",
    ],
  };

  return (
    <section className="min-h-screen bg-[#fafafa] py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT IMAGE */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm border">
              <Image
                src={food.image}
                alt={food.name}
                width={800}
                height={800}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Small Preview Images */}
            <div className="flex gap-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border bg-white cursor-pointer"
                >
                  <Image
                    src={food.image}
                    alt="preview"
                    width={120}
                    height={120}
                    className="w-24 h-24 object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">
            {/* CATEGORY */}
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-500">
              {food.category}
            </span>

            {/* TITLE */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{food.name}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-orange-400 text-orange-400" />
                  <span className="font-medium text-gray-700">
                    {food.rating}
                  </span>
                  <span>({food.reviews} Reviews)</span>
                </div>

                <div className="flex items-center gap-1">
                  <Clock3 size={16} />
                  <span>{food.deliveryTime} min delivery</span>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="flex items-end gap-3">
              <h2 className="text-5xl font-bold text-gray-900">
                ${food.price}
              </h2>

              <span className="text-lg text-gray-400 line-through">$25</span>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Description
              </h3>

              <p className="leading-8 text-gray-600">{food.description}</p>
            </div>

            {/* INGREDIENTS */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ingredients
              </h3>

              <div className="flex flex-wrap gap-3">
                {food.ingredients.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border bg-white px-4 py-2 text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* QUANTITY + ACTIONS */}
            <div className="flex flex-col md:flex-row gap-5 pt-4">
              {/* Quantity */}
              <div className="flex items-center justify-between rounded-2xl border bg-white px-4 py-3 w-full md:w-[170px]">
                <button
                  onClick={decrease}
                  className="text-gray-500 hover:text-black transition"
                >
                  <Minus size={18} />
                </button>

                <span className="text-lg font-semibold">{quantity}</span>

                <button
                  onClick={increase}
                  className="text-gray-500 hover:text-black transition"
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Add to cart */}
              <button className="flex-1 flex items-center justify-center gap-3 rounded-2xl bg-black px-6 py-4 text-white font-medium hover:bg-gray-900 transition active:scale-[0.98]">
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              {/* Wishlist */}
              <button className="rounded-2xl border bg-white p-4 hover:bg-gray-100 transition">
                <Heart size={22} />
              </button>
            </div>

            {/* EXTRA INFO */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="rounded-2xl border bg-white p-5">
                <p className="text-sm text-gray-400">Free Delivery</p>

                <h4 className="mt-2 font-semibold text-gray-900">
                  Orders over $50
                </h4>
              </div>

              <div className="rounded-2xl border bg-white p-5">
                <p className="text-sm text-gray-400">Availability</p>

                <h4 className="mt-2 font-semibold text-green-600">In Stock</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
