import axios from 'axios';
import { TERMS_CONDITIONS_API_URL } from '../envConfig';
import { onFullFill, onRejected } from './interceptor/interceptor-functions';

const api = axios.create({
  baseURL: TERMS_CONDITIONS_API_URL,
  withCredentials: true
});

// authentication
export const getTermsConditions = async (data) => await api.get('/termsConditions', data);
export const getSingleTermsConditions = async (id) => await api.get(`/termsConditions/${id}`);
export const updateTermsConditionsPoints = async (id, data) => await api.put(`/termsConditions/${id}`, data);
export const addTermsConditionsOtherPoints = async (id, data) => await api.put(`/termsConditions/${id}/other-points`, data);
export const updateTermsConditionsOtherPoints = async (id, pointId, data) => await api.put(`/termsConditions/${id}/other-points/${pointId}`, data);
export const deleteTermsConditionsOtherPoints = async (id, pointId) => await api.delete(`/termsConditions/${id}/other-points/${pointId}`);

api.interceptors.response.use(onFullFill, onRejected(api));

export default api;
