import ReviewModel from "@/models/ReviewModel";
import { CreateReviewDTO } from "@/schemas/review.schema";
import { ApiError } from "@/utils/ApiError";

export const createReviewFromDB = async (payload: CreateReviewDTO) => {
  try {
    const order = await ReviewModel.create(payload);
    return order;
  } catch (error: unknown) {
    console.log("review creation error", (error as Error).message);

    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "review creation error");
  }
};
