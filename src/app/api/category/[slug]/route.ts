import { NextRequest, NextResponse } from "next/server";
import { CategorySchema } from "@/schemas/category.schema";
import {
  getCategoryBySlugFromDB,
  updateCategoryInDB,
  deleteCategoryFromDB,
} from "@/services/category.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

// GET CATEGORY BY SLUG
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    if (!slug) {
      throw new ApiError(400, "Slug is required");
    }
    const category = await getCategoryBySlugFromDB(slug);
    return NextResponse.json(
      new ApiResponse("Category retrieved", category, 200),
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// UPDATE CATEGORY
export async function PATCH(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    if (!slug) {
      throw new ApiError(400, "Slug is required");
    }
    const body = await req.json();
    const result = CategorySchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(400, "Validation error", result.error.flatten());
    }
    const category = await updateCategoryInDB(slug, result.data);
    return NextResponse.json(
      new ApiResponse("Category updated", category, 200),
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// DELETE CATEGORY
export async function DELETE(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    if (!slug) {
      throw new ApiError(400, "Slug is required");
    }
    await deleteCategoryFromDB(slug);
    return NextResponse.json(new ApiResponse("Category deleted", null, 200));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}
