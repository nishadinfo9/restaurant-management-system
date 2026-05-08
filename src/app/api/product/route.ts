import { NextRequest, NextResponse } from "next/server";
import { ProductSchema } from "@/schemas/product.schema";
import {
  createProductIntoDB,
  getProductsFromDB,
} from "@/services/product.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

// CREATE PRODUCT
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = ProductSchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(400, "Validation error", result.error.flatten());
    }
    const product = await createProductIntoDB(result.data);

    return NextResponse.json(new ApiResponse("Product created", product, 201));
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// GET PRODUCTS
export async function GET() {
  try {
    const result = await getProductsFromDB();

    return NextResponse.json(
      new ApiResponse("Products retrieved", result, 200),
    );
  } catch (error: unknown) {
    console.error("GET /products error:", error);

    return NextResponse.json(
      new ApiResponse("Internal server error", undefined, 500),
    );
  }
}
