import ProductModel from "@/models/ProductModel";
import { CreateCategoryDTO } from "@/schemas/category.schema";
import { ApiError } from "@/utils/ApiError";
import slugify from "slugify";

export const createCategoryIntoDB = async (payload: CreateCategoryDTO) => {
  try {
    const baseSlug = slugify(payload.name, { lower: true, strict: true });
    let slug = baseSlug;
    // Ensure slug uniqueness
    let count = 1;
    while (await ProductModel.exists({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }
    const category = await ProductModel.create({ ...payload, slug });
    return category;
  } catch (error: unknown) {
    console.log("category creation error", (error as Error).message);

    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to create category");
  }
};

export const getAllCategoriesFromDB = async () => {
  try {
    const categories = await ProductModel.find();
    return categories;
  } catch (error: unknown) {
    console.log("Failed to fetch categories", (error as Error).message);

    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch categories");
  }
};

export const getCategoryBySlugFromDB = async (slug: string) => {
  try {
    const category = await ProductModel.findOne({ slug });
    if (!category) {
      throw new ApiError(404, "Category not found");
    }
    return category;
  } catch (error: unknown) {
    console.log("Failed to fetch category", (error as Error).message);
    if (error instanceof ApiError) {
      throw error; // Re-throw known API errors
    }
    console.log("Failed to fetch category", (error as Error).message);
    throw new ApiError(500, "Failed to fetch category");
  }
};

export const updateCategoryInDB = async (
  slug: string,
  payload: Partial<CreateCategoryDTO>,
) => {
  try {
    const category = await ProductModel.findOneAndUpdate({ slug }, payload, {
      new: true,
    });
    if (!category) {
      throw new ApiError(404, "Category not found");
    }
    return category;
  } catch (error: unknown) {
    console.log("Failed to update category", (error as Error).message);

    if (error instanceof ApiError) {
      throw error.message; // Re-throw known API errors
    }
    throw new ApiError(500, "Failed to update category");
  }
};

export const deleteCategoryFromDB = async (slug: string) => {
  try {
    const category = await ProductModel.findOneAndDelete({ slug });
    if (!category) {
      throw new ApiError(404, "Category not found");
    }
    return category;
  } catch (error: unknown) {
    console.log("Failed to delete category", (error as Error).message);

    if (error instanceof ApiError) {
      throw error.message; // Re-throw known API errors
    }
    throw new ApiError(500, "Failed to delete category");
  }
};
