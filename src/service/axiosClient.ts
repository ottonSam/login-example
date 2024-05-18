import axios from "axios";
import { logout } from "../context/AuthContext";

const options = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json;version=v1_web",
  },
};
const axiosClient = axios.create(options);

const axiosAuthClient = axios.create(options);

axiosAuthClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuthClient.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.response.status === 403 || error.response.status === 401) {
      alert(
        "Ouve um erro ao recuperar os dados da sua sessão, por favor faça login novamente."
      );
      logout();
    }
    return Promise.reject(error);
  }
);

export { axiosClient, axiosAuthClient };
