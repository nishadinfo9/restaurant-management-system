import mongoose, { Document } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
  phone?: string;
  avatarUrl?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    phone: {
      type: String,
    },
    avatarUrl: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const UserModel =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);
export default UserModel;
