const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Food Blogger",
    text: "It felt like a movie scene. The lighting, the aroma, the presentation — everything created a memory I didn’t expect from a restaurant.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Tanvir Hossain",
    role: "Regular Guest",
    text: "I came for dinner, but I left with an experience. Every dish told a story. This place changed how I see food.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sarah Khan",
    role: "Travel Creator",
    text: "This restaurant doesn’t feel like a place — it feels like a moment you want to live again and again.",
    image:
      "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-32">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <p className="uppercase tracking-[0.35em] text-orange-300 text-sm mb-6">
            Guest Stories
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-[1] tracking-tight">
            Moments that stayed
            <span className="block text-white/50">beyond the table.</span>
          </h2>

          <p className="mt-8 text-white/60 text-lg leading-relaxed">
            These are not just reviews — they are memories created inside our
            space, shared by people who experienced dining as a story.
          </p>
        </div>

        {/* Story Layout */}
        <div className="space-y-32">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-[2rem]" />

                <div className="relative overflow-hidden rounded-[2rem] h-[520px]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                {/* Floating Name Tag */}
                <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/10 px-5 py-3 rounded-full">
                  <p className="text-sm text-white/80">{t.role}</p>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="uppercase tracking-[0.25em] text-orange-300 text-sm mb-6">
                  Memory 0{index + 1}
                </p>

                <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                  {t.name}
                </h3>

                <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-xl">
                  “{t.text}”
                </p>

                {/* Divider */}
                <div className="w-24 h-[1px] bg-white/20 my-10" />

                {/* Emotional line */}
                <p className="text-white/40 italic">
                  A moment captured in taste, light, and memory.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Story Closing */}
        <div className="mt-40 text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-orange-300 text-sm mb-6">
            Real Experiences
          </p>

          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
            Every guest leaves with a story —
            <span className="block text-white/50 mt-2">
              not just a receipt.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
