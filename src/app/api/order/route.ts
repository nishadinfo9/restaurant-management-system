import { NextRequest, NextResponse } from "next/server";
import { OrderSchema } from "@/schemas/order.schema";
import {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getMyOrdersFromDB,
} from "@/services/order.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

// CREATE ORDER
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = OrderSchema.safeParse(body);

    if (!result.success) {
      throw new ApiError(400, "Validation error", result.error.flatten());
    }
    const order = await createOrderIntoDB(result.data);

    return NextResponse.json(new ApiResponse("Order created", order, 201));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// GET ORDERS
export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    let result;

    if (userId) {
      result = await getMyOrdersFromDB(userId);
    } else {
      result = await getAllOrdersFromDB();
    }

    return NextResponse.json(new ApiResponse("Orders fetched", result, 200));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}
