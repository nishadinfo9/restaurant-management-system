import DashboardOverview from "@/components/sections/dashboardOverview/DashboardSection";
import FeaturedProducts from "@/components/sections/featuredProducts/FeaturesProduct";
import Hero from "@/components/sections/hero/Hero";
import PopularCategories from "@/components/sections/popularCategories/PopularCategories";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <PopularCategories />
      <DashboardOverview />
      <Testimonials />
    </div>
  );
};

export default page;
