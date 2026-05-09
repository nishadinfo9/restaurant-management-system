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
    if (error instanceof Error) {
      console.error("Failed to create category", error.message);
    }
    throw new ApiError(500, "Failed to create category");
  }
};

export const getAllCategoriesFromDB = async () => {
  try {
    const categories = await ProductModel.find();
    return categories;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Failed to fetch categories", error.message);
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
    if (error instanceof ApiError) {
      throw error; // Re-throw known API errors
    }
    if (error instanceof Error) {
      console.error("Failed to fetch category", error.message);
    }
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
    if (error instanceof ApiError) {
      throw error; // Re-throw known API errors
    }
    if (error instanceof Error) {
      console.error("Failed to update category", error.message);
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
    if (error instanceof ApiError) {
      throw error; // Re-throw known API errors
    }
    if (error instanceof Error) {
      console.error("Failed to delete category", error.message);
    }
    throw new ApiError(500, "Failed to delete category");
  }
};
