// import axios from 'axios';
// import { OPTIONS_SERVICE_API_URL } from '../envConfig';
// import { onFullFill, onRejected } from './interceptor/interceptor-functions';

// const api = axios.create({
//   baseURL: OPTIONS_SERVICE_API_URL,
//   withCredentials: true
// });

// // facilities
// export const getFacilities = async (query) => await api.get(`/additional-perks-and-facilities?${query}`);
// export const createFacility = async (data) => await api.post('/additional-perks-and-facilities', data);
// export const updateFacility = async (id, data) => await api.put(`/additional-perks-and-facilities/${id}`, data);
// export const getFacilitiesCount = async (query) => await api.get(`/count/additional-perks-and-facilities?${query}`);

// // course categories
// export const getCourseCategories = async (query) => await api.get(`/course-categories?${query}`);
// export const createCourseCategory = async (data) => await api.post('/course-categories', data);
// export const updateCourseCategory = async (id, data) => await api.put(`/course-categories/${id}`, data);
// export const getCourseCategoriesCount = async (query) => await api.get(`/count/course-categories?${query}`);
// export const getCourseCategoriesAll = async () => await api.get('/course-categories-all');

// // job titles
// export const getJobTitles = async (query) => await api.get(`/job-titles?${query}`);
// export const createJobTitle = async (data) => await api.post('/job-titles', data);
// export const updateJobTitle = async (id, data) => await api.put(`/job-titles/${id}`, data);
// export const getJobTitlesCount = async (query) => await api.get(`/count/job-titles?${query}`);

// api.interceptors.response.use(onFullFill, onRejected(api));

// export default api;
