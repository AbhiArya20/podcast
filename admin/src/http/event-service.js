// import axios from 'axios';
// import { EVENT_SERVICE_API_URL } from '../envConfig';
// import { onFullFill, onRejected } from './interceptor/interceptor-functions';

// const api = axios.create({
//   baseURL: EVENT_SERVICE_API_URL,
//   withCredentials: true
// });

// export const getEvents = async (query) => await api.get(`/events?${query}`);
// export const getEvent = async (id) => await api.get(`/events/${id}`);
// export const createEvent = async (data) => await api.post('/events', data);
// export const updateEvent = async (id, data) => await api.put(`/events/${id}`, data);
// export const addEventExpert = async (id, data) => await api.post(`/events/${id}/experts`, data);
// export const updateEventExpert = async (id, expertId, data) => await api.put(`/events/${id}/experts/${expertId}`, data);
// export const deleteEventExpert = async (id, expertId) => await api.delete(`/events/${id}/experts/${expertId}`);
// export const addEventOtherSection = async (id, data) => await api.put(`/termsConditions/${id}/other-section`, data);
// export const updateEventOtherSection = async (id, sectionId, data) => await api.put(`/termsConditions/${id}/other-section/${sectionId}`, data);
// export const deleteEventOtherSection = async (id, sectionId) => await api.delete(`/termsConditions/${id}/other-section/${sectionId}`);
// export const addEventSectionItem = async (id, sectionId, data) => await api.put(`/termsConditions/${id}/other-section/${sectionId}/items`, data);
// export const updateEventSectionItem = async (id, sectionId, itemId, data) => await api.put(`/termsConditions/${id}/other-section/${sectionId}/items/${itemId}`, data);
// export const deleteEventSectionItem = async (id, sectionId, itemId) => await api.delete(`/termsConditions/${id}/other-section/${sectionId}/items/${itemId}`);
// export const addEventOtherPoints = async (id, data) => await api.put(`/termsConditions/${id}/other-points`, data);
// export const updateEventOtherPoints = async (id, pointId, data) => await api.put(`/termsConditions/${id}/other-points/${pointId}`, data);
// export const deleteEventOtherPoints = async (id, pointId) => await api.delete(`/termsConditions/${id}/other-points/${pointId}`);
// export const getEventCount = async (query) => await api.get(`/count/events?${query}`);

// api.interceptors.response.use(onFullFill, onRejected(api));

// export default api;
