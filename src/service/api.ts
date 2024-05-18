import { axiosClient, axiosAuthClient } from "./axiosClient";

export const login = async (email: string, password: string) => {
  return await axiosClient
    .post("auth/login/", { email, password })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error.response.data);
    });
};

export const getProfile = async () => {
  return await axiosAuthClient
    .get("auth/profile")
    .then((res) => res.data)
    .catch((error) => {
      throw error.response.data;
    });
};
