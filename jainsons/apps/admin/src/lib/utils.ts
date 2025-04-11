import { AxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: AxiosError | Error | unknown) {
  if (error instanceof AxiosError) {
    if (error.code === "NetworkError") {
      return "Network Error, Please check your internet connection.";
    }
    return (
      error.response?.data?.message ??
      "An error occurred while trying to login. Please try again later."
    );
  }
  return "An error occurred while trying to login. Please try again later.";
}
