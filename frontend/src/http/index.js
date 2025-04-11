import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

const apiU = axios.create({
  baseURL: "http://localhost:5500",
  withCredentials: true,
  headers: {
    "Content-type": "multipart/form-data",
    Accept: "application/json",
  },
});

// List of all the endpoints
export const sendOtp = (data) => api.post("/api/send-otp", data);
export const verifyOtp = (data) => api.post("/api/verify-otp", data);
export const activate = (data) => apiU.post("/api/activate", data);
export const logout = () => api.post("/api/logout");
export const createRoom = (data) => api.post("/api/rooms", data);
export const getAllRooms = () => api.get("/api/rooms");
export const getRoom = (roomId) => api.get(`/api/rooms/${roomId}`);

// Interceptors
const onFullFill = (config) => {
  return config;
};
const onError = async (error) => {
  const originalRequest = error.config;
  if (
    error.response?.status === 401 &&
    originalRequest &&
    !originalRequest._isRetry
  ) {
    originalRequest.isRetry = true;
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, {
        withCredentials: true,
      });
      return api.request(originalRequest);
    } catch (err) {
      console.log(err.message);
    }
  }
  throw error;
};

api.interceptors.response.use(onFullFill, onError);
apiU.interceptors.response.use(onFullFill, onError);

export default api;
