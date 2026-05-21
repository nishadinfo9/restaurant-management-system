import { products } from "@/data/product";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import ProductBackBtn from "@/components/shared/ProductBackBtn/ProductBackBtn";
import ProductCartBtn from "@/components/shared/ProductCartBtn/ProductCartBtn";
interface PageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="mt-20 text-center text-gray-500">Product not found</div>
    );
  }

  const {
    id,
    title,
    description,
    image,
    price,
    discountPrice,
    rating,
    totalReviews,
    stock,
    isAvailable,
  } = product;

  const finalPrice = discountPrice ?? price;
  const hasDiscount = discountPrice && discountPrice < price;

  const isOutOfStock = stock <= 0 || !isAvailable;

  return (
    <div className="mx-auto my-10 max-w-6xl px-5">
      {/* BACK LINK (ACCESSIBLE) */}
      <ProductBackBtn />

      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        {/* IMAGE */}
        <figure className="relative h-[320px] overflow-hidden rounded-2xl shadow-sm md:h-[420px]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </figure>

        {/* DETAILS */}
        <section aria-label="Product details" className="space-y-6">
          {/* TITLE + RATING */}
          <header>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {title}
            </h1>

            <div
              className="mt-2 flex items-center gap-2 text-sm"
              aria-label={`Rated ${rating.toFixed(1)} out of 5`}
            >
              <span className="flex items-center gap-1 text-yellow-500">
                <Star size={16} fill="currentColor" aria-hidden="true" />
                <span className="font-medium">{rating.toFixed(1)}</span>
              </span>

              <span className="text-gray-400">({totalReviews} reviews)</span>
            </div>
          </header>

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed text-gray-600">{description}</p>

          {/* PRICE */}
          <div
            className="rounded-xl border border-gray-100 bg-gray-50 p-4"
            aria-label="Price information"
          >
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ${finalPrice}
              </span>

              {hasDiscount && (
                <span className="text-sm text-gray-400 line-through">
                  ${price}
                </span>
              )}
            </div>

            {hasDiscount && (
              <p className="mt-1 text-xs font-medium text-green-600">
                You save ${(price - finalPrice).toFixed(2)}
              </p>
            )}
          </div>

          {/* STOCK */}
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Availability</span>

            <span
              role="status"
              aria-live="polite"
              className={`font-medium ${
                isOutOfStock ? "text-red-500" : "text-green-600"
              }`}
            >
              {isOutOfStock ? "Out of stock" : `${stock} items left`}
            </span>
          </div>

          {/* CTA BUTTON */}
          <ProductCartBtn id={id} isOutOfStock={isOutOfStock} />

          {/* UX MESSAGE */}
          <p className="text-center text-xs text-gray-400">
            Secure checkout • Fast delivery • Fresh ingredients
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
