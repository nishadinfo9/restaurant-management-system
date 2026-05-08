import ProductModel from "@/models/ProductModel";
import { CreateProductDTO } from "@/schemas/product.schema";
import { ApiError } from "@/utils/ApiError";
import slugify from "slugify";

export const createProductIntoDB = async (payload: CreateProductDTO) => {
  try {
    const baseSlug = slugify(payload.title, { lower: true, strict: true });

    let slug = baseSlug;
    let counter = 1;

    while (await ProductModel.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const product = await ProductModel.create({
      ...payload,
      slug,
    });

    return product;
  } catch (error: unknown) {
    console.log("product creation error", (error as Error).message);

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof Error) {
      throw new ApiError(400, error.message);
    }

    throw new ApiError(500, "Internal Server Error");
  }
};

export const getProductsFromDB = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const productsPromise = ProductModel.find()
    .populate("categoryId", "name")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalPromise = ProductModel.countDocuments();

  const [products, total] = await Promise.all([productsPromise, totalPromise]);

  return {
    products,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
};

export const getProductByIdFromDB = async (id: string) => {
  const product = await ProductModel.findById(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return product;
};

export const getProductBySlugFromDB = async (slug: string) => {
  const product = await ProductModel.findOne({ slug });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return product;
};

export const updateProductInDB = async (
  id: string,
  payload: Partial<CreateProductDTO>,
) => {
  const product = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return product;
};

export const deleteProductFromDB = async (id: string) => {
  const product = await ProductModel.findByIdAndDelete(id);

  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  return product;
};
