import mongoose, { Document } from "mongoose";

interface Payment extends Document {
  orderId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  amount: number;
  method: "bank" | "bKash" | "cash_on_delivery";
  transactionId?: string;
  status: "pending" | "completed" | "failed";
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new mongoose.Schema<Payment>(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: [true, "Order ID is required"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    method: {
      type: String,
      enum: ["bank", "bKash", "cash_on_delivery"],
    },
    transactionId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
    },
    paidAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

const PaymentModel =
  mongoose.models.Payment || mongoose.model<Payment>("Payment", PaymentSchema);

export default PaymentModel;
