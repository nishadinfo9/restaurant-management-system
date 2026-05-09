import * as z from "zod";

export const CategorySchema = z.object({
  name: z.string().min(3).max(50),
  slug: z.string("Slug must be a string").optional(),
  imageUrl: z.string().url().optional(),
});

export type CreateCategoryDTO = z.infer<typeof CategorySchema>;
