import mongoose, { Document, Schema } from "mongoose";

interface Cart extends Document {
  userId: mongoose.Types.ObjectId;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

const cartSchema = new Schema<Cart>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const CartModel =
  mongoose.models.Cart || mongoose.model("Cart", cartSchema);
