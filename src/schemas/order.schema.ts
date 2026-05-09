import * as z from "zod";

export const OrderSchema = z.object({
  userId: z.string().optional(),
  subtotal: z.number(),
  deliveryCharge: z.number(),
  tax: z.number(),
  totalAmount: z.number(),
  paymentMethod: z.enum(["bank", "bKash", "cash_on_delivery"]),
  paymentStatus: z.enum(["pending", "completed", "failed"]),
  orderStatus: z.enum([
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ]),
  notes: z.string().optional(),
});

export type CreateOrderDTO = z.infer<typeof OrderSchema>;
