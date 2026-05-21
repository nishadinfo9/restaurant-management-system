export interface ProductTypes {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  categoryId: string;
  rating: number;
  totalReviews: number;
  stock: number;
  isAvailable: boolean;
  isFeatured: boolean;
  image: string;
}

// types/product.types.ts
export interface Category {
  _id: string;
  name: string;
  slug: string;
}
