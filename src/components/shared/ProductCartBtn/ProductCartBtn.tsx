"use client";

import { ShoppingCart } from "lucide-react";
import React from "react";

interface ProductCartBtnProps {
  id: string;
  isOutOfStock: boolean;
}

const ProductCartBtn = ({ isOutOfStock, id }: ProductCartBtnProps) => {
  const onAddToCart = (id: string) => {
    console.log(id);
  };
  return (
    <button
      disabled={isOutOfStock}
      onClick={() => onAddToCart(id)}
      className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-gray-900 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300"
    >
      <ShoppingCart size={18} />
      Add
    </button>
  );
};

export default ProductCartBtn;
