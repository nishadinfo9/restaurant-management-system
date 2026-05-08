import mongoose, { Document } from "mongoose";

interface Category extends Document {
  name: string;
  slug: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
const CategorySchema = new mongoose.Schema<Category>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      index: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const CategoryModel =
  mongoose.models.Category ||
  mongoose.model<Category>("Category", CategorySchema);

export default CategoryModel;
