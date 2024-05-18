import { axiosClient, axiosAuthClient } from "./axiosClient";

export const login = async (email: string, password: string) => {
  return await axiosClient
    .post("/auth/login/", { email: email, password: password })
    .then(async (res) => await res.data)
    .catch((error) => {
      throw error.response.data;
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
