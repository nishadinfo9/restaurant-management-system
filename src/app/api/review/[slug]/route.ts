import { NextRequest, NextResponse } from "next/server";
import {
  getReviewByIdFromDB,
  updateReviewFromDB,
  deleteReviewFromDB,
} from "@/services/review.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";
import { ReviewSchema } from "@/schemas/review.schema";
import ConnectDB from "@/lib/ConnectDB";

// GET REVIEW BY ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    await ConnectDB();
    const reviewId = (await params).slug;
    if (!reviewId) {
      throw new ApiError(400, "Review ID is required");
    }
    const result = await getReviewByIdFromDB(reviewId);
    return NextResponse.json(new ApiResponse("Review fetched", result, 200));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// UPDATE REVIEW
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    await ConnectDB();
    const { slug } = await params;
    const body = await request.json();
    const result = ReviewSchema.safeParse(body);
    if (!result.success) {
      throw new ApiError(400, "Validation error", result.error.flatten());
    }
    const review = await updateReviewFromDB(slug, body);
    return NextResponse.json(
      new ApiResponse("Review updated successfully", review, 200),
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("PATCH /review/[slug] error:", error);
    return NextResponse.json(
      new ApiError(500, "Internal server error", error),
      { status: 500 },
    );
  }
}

// DELETE ORDER
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    await ConnectDB();
    const reviewId = (await params).slug;
    if (!reviewId) {
      throw new ApiError(400, "Review ID is required");
    }
    const deletedReview = await deleteReviewFromDB(reviewId);
    return NextResponse.json(
      new ApiResponse("Review deleted", deletedReview, 200),
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}
