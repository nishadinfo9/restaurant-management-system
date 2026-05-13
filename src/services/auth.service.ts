// services/auth/auth.api.ts

import axiosInstance from "@/hooks/useApi";

type SignUpData = {
  username: string;
  email: string;
  password: string;
};

type SignInData = {
  email: string;
  password: string;
};

export const signUpUser = async (data: SignUpData) => {
  console.log("data a", data);
  const response = await axiosInstance.post("/signup", data);

  return response.data;
};
