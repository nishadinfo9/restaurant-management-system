import mongoose, { Document } from "mongoose";

interface Order extends Document {
  userId: mongoose.Types.ObjectId;
  subtotal: number;
  deliveryCharge: number;
  tax: number;
  totalAmount: number;
  paymentMethod: "bank" | "bKash" | "cash_on_delivery";
  paymentStatus: "pending" | "completed" | "failed";
  orderStatus:
    | "pending"
    | "confirmed"
    | "preparing"
    | "out_for_delivery"
    | "delivered"
    | "cancelled";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new mongoose.Schema<Order>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subtotal: {
      type: Number,
      required: [true, "Subtotal is required"],
    },
    deliveryCharge: {
      type: Number,
      required: [true, "Delivery charge is required"],
    },
    tax: {
      type: Number,
      required: [true, "Tax is required"],
    },
    totalAmount: {
      type: Number,
      required: [true, "Total amount is required"],
    },
    paymentMethod: {
      type: String,
      enum: ["bank", "bKash", "cash_on_delivery"],
      default: "cash_on_delivery",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "preparing",
        "out_for_delivery",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

const OrderModel =
  mongoose.models.Order || mongoose.model<Order>("Order", OrderSchema);

export default OrderModel;
