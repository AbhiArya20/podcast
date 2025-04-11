import axios from 'axios';
import { ADMIN_SERVICE_API_URL } from '../envConfig';
import { onFullFill, onRejected } from './interceptor/interceptor-functions';

const api = axios.create({
  baseURL: ADMIN_SERVICE_API_URL,
  withCredentials: true
});

// authentication
export const login = async (data) => await api.post('/login', data);
export const changePassword = async (data) => await api.post('/reset-password', data);
export const forgotSentOtp = async (data) => await api.post('/forgot-password-send-otp', data);
export const forgotVerifyOtp = async (data) => await api.post('/forgot-password-verify-otp', data);
export const logout = async () => await api.post('/logout');

// //Admin
// export const getAdmins = async (query) => await api.get(`/admins?${query}`);
// export const createAdmin = async (data) => await api.post('/admins', data);
// export const updateAdmin = async (id, data) => await api.put(`/admins/${id}`, data);
// export const getAdminsCount = async (query) => await api.get(`/count/admins?${query}`);

api.interceptors.response.use(onFullFill, onRejected(api));

export default api;
