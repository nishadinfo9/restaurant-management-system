import FoodCard from "@/components/cards/FoodCard";
import React from "react";

const page = () => {
  return (
    <div className="mt-24 flex items-center justify-between m-10">
      <FoodCard
        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        name="Cheese Burger"
        category="Fast Food"
        price={12}
        rating={4.8}
        deliveryTime={20}
      />
      <FoodCard
        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        name="Cheese Burger"
        category="Fast Food"
        price={12}
        rating={4.8}
        deliveryTime={20}
      />
      <FoodCard
        image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        name="Cheese Burger"
        category="Fast Food"
        price={12}
        rating={4.8}
        deliveryTime={20}
      />
    </div>
  );
};

export default page;
