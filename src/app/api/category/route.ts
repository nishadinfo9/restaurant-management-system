import { NextRequest, NextResponse } from "next/server";
import { CategorySchema } from "@/schemas/category.schema";
import {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
} from "@/services/category.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";
import ConnectDB from "@/lib/ConnectDB";

// CREATE CATEGORY
export async function POST(req: NextRequest) {
  await ConnectDB();
  try {
    const body = await req.json();
    const result = CategorySchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(400, "Validation error", result.error.flatten());
    }
    const category = await createCategoryIntoDB(result.data);

    return NextResponse.json(
      new ApiResponse("Category created", category, 201),
    );
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// GET ALL CATEGORIES
export async function GET() {
  await ConnectDB();
  try {
    const categories = await getAllCategoriesFromDB();
    return NextResponse.json(
      new ApiResponse("Categories retrieved", categories, 200),
    );
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}
