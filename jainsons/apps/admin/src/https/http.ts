import { IForgotPasswordForm } from "@/app/(auth)/forgot-password/page";
import { IVerifyOTPFrom } from "@/app/(auth)/forgot-password/verify-otp/page";
import { ILoginFrom } from "@/app/(auth)/login/page";
import { IAddProductForm } from "@/app/(private)/products/add/page";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1`,
  timeout: 10000,
  withCredentials: true,
});

export const login = async (data: ILoginFrom) =>
  await api.post("/admin/login", data);
export const logout = async () => await api.get("/admin/logout");
export const refreshToken = async () => await api.get("/admin/refresh-token");
export const forgotPasswordSendOtp = async (data: IForgotPasswordForm) =>
  await api.post("/admin/forgot-password-send-otp", data);
export const forgotPasswordVerifyOtp = async (data: IVerifyOTPFrom) =>
  await api.post("/admin/forgot-password-verify-otp", data);

export const addProduct = async (data: IAddProductForm) =>
  await api.post("/products", data);
export const getProducts = async () => await api.get("/products");

export const getCongratulations = async () =>
  await api.get("/v1/congratulation/orders");

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (api) => async (error: AxiosError & { _retry: boolean }) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/refresh-token`,
          {},
          { withCredentials: true }
        );
        return api.request(originalRequest);
      } catch (err) {
        console.log(err);
        window.location.replace("/login");
      }
    }
    throw error;
  }
);
