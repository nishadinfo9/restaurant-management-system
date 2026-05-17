const categories = [
  {
    id: 1,
    title: "Fine Dining",
    subtitle: "Luxury Experience",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Signature Burgers",
    subtitle: "Bold & Juicy",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Italian Pasta",
    subtitle: "Fresh Handmade",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Luxury Desserts",
    subtitle: "Sweet Story",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function PopularCategories() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-32">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.35em] text-orange-300 text-sm mb-6">
              Popular Categories
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-[1] tracking-tight">
              Discover flavors
              <span className="block text-white/50">
                crafted for every mood.
              </span>
            </h2>
          </div>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl">
            From luxury dining experiences to handcrafted desserts, every
            category tells its own unique culinary story.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-[2rem] h-[500px]"
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-500/10" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10">
                <p className="uppercase tracking-[0.25em] text-orange-300 text-xs mb-4">
                  {category.subtitle}
                </p>

                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  {category.title}
                </h3>

                <div className="mt-8 flex items-center gap-4">
                  <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-orange-300 transition-all duration-300">
                    Explore Menu
                  </button>

                  <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300">
                    View Story
                  </button>
                </div>
              </div>

              {/* Number */}
              <div className="absolute top-6 right-6 text-white/30 text-5xl font-light">
                0{category.id}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Story */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-orange-300 text-sm mb-6">
            Culinary Journey
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
            Every category is designed to create
            <span className="block text-white/50 mt-2">
              emotion, atmosphere, and unforgettable taste.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
