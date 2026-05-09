import OrderModel from "@/models/OrderModel";
import { CreateOrderDTO } from "@/schemas/order.schema";
import { ApiError } from "@/utils/ApiError";

export const createOrderIntoDB = async (payload: CreateOrderDTO) => {
  try {
    const order = await OrderModel.create(payload);
    return order;
  } catch (error: unknown) {
    console.log("order creation error", (error as Error).message);

    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Error creating order");
  }
};

export const getAllOrdersFromDB = async () => {
  try {
    const orders = await OrderModel.find();
    return orders;
  } catch (error: unknown) {
    console.log("Failed to fetch orders", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch orders");
  }
};

export const getMyOrdersFromDB = async (userId: string) => {
  try {
    const orders = await OrderModel.find({ userId });
    return orders;
  } catch (error: unknown) {
    console.log("Failed to fetch orders", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch orders");
  }
};

export const getOrderByIdFromDB = async (id: string) => {
  try {
    const order = await OrderModel.findById(id);
    if (!order) {
      throw new ApiError(404, "Order not found");
    }
    return order;
  } catch (error: unknown) {
    console.log("Failed to fetch order", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to fetch order");
  }
};

export const updateOrderStatusInDB = async (
  id: string,
  orderStatus: string,
) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true },
    );
    if (!order) {
      throw new ApiError(404, "Order not found");
    }
    return order;
  } catch (error: unknown) {
    console.log("Failed to update order status", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to update order status");
  }
};

export const deleteOrderFromDB = async (id: string) => {
  try {
    const order = await OrderModel.findByIdAndDelete(id);
    if (!order) {
      throw new ApiError(404, "Order not found");
    }
    return order;
  } catch (error: unknown) {
    console.log("Failed to delete order", (error as Error).message);
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, "Failed to delete order");
  }
};
