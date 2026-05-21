import FoodCard from "@/components/cards/FoodCard";
import { products } from "@/data/product";

const Page = () => {
  return (
    <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 px-6 md:px-12 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <FoodCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Page;
