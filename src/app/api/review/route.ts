import { NextRequest, NextResponse } from "next/server";
import { ReviewSchema } from "@/schemas/review.schema";
import {
  createReviewFromDB,
  getAllReviewFromDB,
  getMyReviewFromDB,
} from "@/services/review.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

// POST REVIEW
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = ReviewSchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(400, "Validation error", result.error.flatten());
    }
    const order = await createReviewFromDB(result.data);

    return NextResponse.json(new ApiResponse("Order created", order, 201));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// GET REVIEW
export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    let result;

    if (userId) {
      result = await getMyReviewFromDB(userId);
    } else {
      result = await getAllReviewFromDB();
    }

    return NextResponse.json(new ApiResponse("Review fetched", result, 200));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}
