import * as z from "zod";

export const ReviewSchema = z.object({
  userId: z.string(),
  productId: z.string(),
  rating: z.number().int(),
  comment: z.string().optional(),
});

export type CreateReviewDTO = z.infer<typeof ReviewSchema>;
