import { NextRequest, NextResponse } from "next/server";
import {
  getOrderByIdFromDB,
  updateOrderStatusInDB,
  deleteOrderFromDB,
} from "@/services/order.service";
import { ApiError } from "@/utils/ApiError";
import { ApiResponse } from "@/utils/ApiResponse";

// GET ORDER BY ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const orderId = params.id;
    if (!orderId) {
      throw new ApiError(400, "Order ID is required");
    }
    const result = await getOrderByIdFromDB(orderId);
    return NextResponse.json(new ApiResponse("Order fetched", result, 200));
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// UPDATE ORDER STATUS
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const orderId = params.id;
    if (!orderId) {
      throw new ApiError(400, "Order ID is required");
    }
    const { orderStatus } = await req.json();

    if (!orderStatus) {
      throw new ApiError(400, "Order status is required");
    }

    const updatedOrder = await updateOrderStatusInDB(orderId, orderStatus);
    return NextResponse.json(
      new ApiResponse("Order updated", updatedOrder, 200),
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}

// DELETE ORDER
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const orderId = params.id;
    if (!orderId) {
      throw new ApiError(400, "Order ID is required");
    }
    const deletedOrder = await deleteOrderFromDB(orderId);
    return NextResponse.json(
      new ApiResponse("Order deleted", deletedOrder, 200),
    );
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(new ApiError(500, "Internal server error"));
  }
}
