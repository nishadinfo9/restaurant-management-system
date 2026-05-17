const stats = [
  {
    id: 1,
    label: "Total Orders",
    value: "1,284",
    note: "This month",
  },
  {
    id: 2,
    label: "Revenue",
    value: "$24,890",
    note: "Last 30 days",
  },
  {
    id: 3,
    label: "Customers",
    value: "892",
    note: "Active users",
  },
  {
    id: 4,
    label: "Avg Rating",
    value: "4.8",
    note: "Based on reviews",
  },
];

const activities = [
  {
    id: 1,
    text: "New order received for Smoked Beef Steak",
    time: "2 min ago",
  },
  {
    id: 2,
    text: "Table reservation confirmed for 2 guests",
    time: "15 min ago",
  },
  {
    id: 3,
    text: "New review: ‘Amazing dining experience’",
    time: "1 hour ago",
  },
  {
    id: 4,
    text: "Payment received from online order",
    time: "3 hours ago",
  },
];

export default function DashboardOverview() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-32">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[0.35em] text-orange-300 text-sm mb-6">
            Restaurant Dashboard
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-[1] tracking-tight">
            Your restaurant,
            <span className="block text-white/50">always in control.</span>
          </h2>

          <p className="mt-8 text-white/60 text-lg leading-relaxed">
            A real-time overview of your restaurant performance, orders,
            customers, and growth — all in one place.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

              <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                {stat.label}
              </p>

              <h3 className="text-4xl font-semibold mt-4">{stat.value}</h3>

              <p className="text-white/40 mt-3 text-sm">{stat.note}</p>
            </div>
          ))}
        </div>

        {/* Bottom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Story */}
          <div>
            <p className="uppercase tracking-[0.3em] text-orange-300 text-sm mb-6">
              Live Experience
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
              Everything happens in real time —
              <span className="block text-white/50 mt-2">
                just like your kitchen.
              </span>
            </h3>

            <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-xl">
              From order to delivery, track every movement with precision and
              clarity. Designed for modern restaurant operations.
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-orange-400 text-black font-medium hover:bg-orange-300 transition-all duration-300">
              Open Dashboard
            </button>
          </div>

          {/* Right Activity Feed */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-8">
            <p className="uppercase tracking-[0.25em] text-orange-300 text-sm mb-8">
              Recent Activity
            </p>

            <div className="space-y-6">
              {activities.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-6 border-b border-white/10 pb-4"
                >
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.text}
                  </p>
                  <span className="text-white/40 text-xs whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
            Built for restaurants that want
            <span className="block text-white/50 mt-2">
              control, clarity, and growth.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
