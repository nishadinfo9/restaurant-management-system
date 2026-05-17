import { products } from "@/data/product";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.isFeatured);
  return (
    <section className="relative bg-black text-white overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-28">
          <p className="uppercase tracking-[0.35em] text-orange-300 text-sm mb-6">
            Featured Dishes
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-[1] tracking-tight">
            Crafted with passion,
            <span className="block text-white/50">served like a story.</span>
          </h2>

          <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-2xl">
            Every dish is designed to create emotion, atmosphere, and
            unforgettable taste. Modern dining with cinematic presentation.
          </p>
        </div>

        {/* Story Cards */}
        <div className="space-y-40">
          {featured.map((dish, index) => (
            <div
              key={dish.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-[2rem]" />

                <div className="relative overflow-hidden rounded-[2rem]">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Floating Price */}
                  <div className="absolute bottom-6 right-6 backdrop-blur-md bg-white/10 border border-white/10 px-5 py-3 rounded-full text-lg font-medium">
                    {dish.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-orange-300 tracking-[0.25em] uppercase text-sm mb-5">
                  Signature Dish 0{index + 1}
                </p>

                <h3 className="text-4xl md:text-6xl font-semibold leading-tight">
                  {dish.title}
                </h3>

                <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-xl">
                  {dish.description}
                </p>

                {/* Divider */}
                <div className="w-24 h-[1px] bg-white/20 my-10" />

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-5">
                  <button className="px-8 py-4 rounded-full bg-orange-400 text-black font-medium hover:bg-orange-300 transition-all duration-300">
                    Order Now
                  </button>

                  <Link
                    href={`/products/${dish.slug}`}
                    className="px-8 py-4 rounded-full border border-white/15 hover:bg-white/10 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-40 text-center">
          <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-6">
            Fine Dining Experience
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
            More than food —
            <span className="text-white/50"> it’s a memorable atmosphere.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
