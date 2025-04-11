import axios from 'axios';
import { ADMIN_SERVICE_API_URL } from '../../envConfig';

export const onFullFill = (response) => {
  return response;
};

export const onRejected = (api) => async (error) => {
  const originalRequest = error.config;
  if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      await axios.post(`${ADMIN_SERVICE_API_URL}/refresh-token`, {}, { withCredentials: true });
      return api.request(originalRequest);
    } catch (err) {
      window.location.replace('/login');
    }
  }
  throw error;
};
