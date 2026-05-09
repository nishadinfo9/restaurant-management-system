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

export const getAllReviewFromDB = async () => {
  try {
    const review = await ReviewModel.find();
    return review;
  } catch (error: unknown) {
    console.log("Failed to fetch review", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch review");
  }
};

export const getMyReviewFromDB = async (userId: string) => {
  try {
    const review = await ReviewModel.find({ userId });
    return review;
  } catch (error: unknown) {
    console.log("Failed to fetch review", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch review");
  }
};

export const getReviewByIdFromDB = async (id: string) => {
  try {
    const review = await ReviewModel.findById(id);
    if (!review) {
      throw new ApiError(404, "review not found");
    }
    return review;
  } catch (error: unknown) {
    console.log("Failed to fetch review", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch review");
  }
};

export const updateReviewFromDB = async (
  id: string,
  payload: Partial<CreateReviewDTO>,
) => {
  const review = await ReviewModel.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!review) {
    throw new ApiError(404, "review not found");
  }

  return review;
};

export const deleteReviewFromDB = async (id: string) => {
  try {
    const review = await ReviewModel.findByIdAndDelete(id);
    if (!review) {
      throw new ApiError(404, "review not found");
    }
    return review;
  } catch (error: unknown) {
    console.log("Failed to delete review", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to delete review");
  }
};
