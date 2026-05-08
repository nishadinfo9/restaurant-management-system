import { NextRequest, NextResponse } from "next/server";
import { ProductSchema } from "@/schemas/product.schema";
import {
  updateProductInDB,
  deleteProductFromDB,
  getProductBySlugFromDB,
} from "@/services/product.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

// GET PRODUCT BY SLUG
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    const product = await getProductBySlugFromDB(slug);
    return NextResponse.json(
      new ApiResponse("Product fetched successfully", product, 200),
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("GET /product/[slug] error:", error);
    return NextResponse.json(
      new ApiError(500, "Internal server error", error),
      { status: 500 },
    );
  }
}

// UPDATE PRODUCT
export async function PATCH(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    const body = await request.json();
    const result = ProductSchema.safeParse(body);
    if (!result.success) {
      throw new ApiError(400, "Validation error", result.error.flatten());
    }
    const product = await updateProductInDB(slug, body);
    return NextResponse.json(
      new ApiResponse("Product updated successfully", product, 200),
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("PATCH /product/[slug] error:", error);
    return NextResponse.json(
      new ApiError(500, "Internal server error", error),
      { status: 500 },
    );
  }
}

// DELETE PRODUCT
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    await deleteProductFromDB(slug);
    return NextResponse.json(
      new ApiResponse("Product deleted successfully", null, 200),
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("DELETE /product/[slug] error:", error);
    return NextResponse.json(
      new ApiError(500, "Internal server error", error),
      { status: 500 },
    );
  }
}
