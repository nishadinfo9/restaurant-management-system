import UserModel from "@/models/UserModel";

export const getCurrentUser = async (userId: string) => {
  const user = await UserModel.findById(userId).select("-password");

  return user;
};
