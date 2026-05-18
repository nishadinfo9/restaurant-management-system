import * as z from "zod";

export const ProductSchema = z.object({
  title: z.string().min(3).max(100),
  slug: z.string("Slug must be a string").optional(),
  description: z.string().min(10).max(1000),
  image: z.string().url().optional(),
  price: z.number().positive().finite(),
  discountPrice: z.number().optional(),
  categoryId: z.string().length(24),
  stock: z.number().int().min(0),
  isAvailable: z.boolean().default(true),
  isFeatured: z.boolean().optional(),
});

export type CreateProductDTO = z.infer<typeof ProductSchema>;
