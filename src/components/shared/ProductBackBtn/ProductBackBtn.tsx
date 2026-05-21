"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ProductBackBtn = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-md"
    >
      <ArrowLeft size={18} aria-hidden="true" />
      Go Back
    </button>
  );
};

export default ProductBackBtn;
