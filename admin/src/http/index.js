// import axios from 'axios';
// import { ADMIN_SERVICE_API_URL } from '../envConfig';

// const api = axios.create({
//   baseURL: ADMIN_SERVICE_API_URL,
//   withCredentials: true
// });

// // // authentication
// // export const login = async (data) => await api.post('/login', data);
// // export const logout = async () => await api.post('/logout');
// // export const forgotSentOtp = async (data) => await api.post('/forgot-password-send-otp', data);
// // export const forgotVerifyOtp = async (data) => await api.post('/forgot-password-verify-otp', data);
// // export const changePassword = async (data) => await api.post('/reset-password', data);

// // Employers
// export const getEmployers = async (query) => await api.get(`/employers?${query}`);
// export const getEmployer = async (id) => await api.get(`/employers/${id}`);
// export const updateEmployer = async (id, data) => await api.put(`/employers/${id}`, data);
// export const getEmployersCount = async (query) => await api.get(`/count/employers?${query}`);

// // Job Seekers
// export const getJobSeekers = async (query) => await api.get(`/job-seekers?${query}`);
// export const getJobSeeker = async (id) => await api.get(`/job-seekers/${id}`);
// export const updateJobSeeker = async (id, data) => await api.put(`/job-seekers/${id}`, data);
// export const getJobSeekersCount = async (query) => await api.get(`/count/job-seekers?${query}`);

// // Chat
// export const getChats = async () => await api.get(`/chats`);

// // Earnings
// export const getEarnings = async (query) => await api.get(`/earnings?${query}`);

// // Jobs
// export const getJobs = async (query) => await api.get(`/jobs?${query}`);
// export const getJob = async (id) => await api.get(`/jobs/${id}`);
// export const getJobsCount = async (query) => await api.get(`/count/jobs?${query}`);

// // Organization
// export const getOrganizationCount = async (query) => await api.get(`/count/organizations?${query}`);

// //IHS
// export const getGeneralIhsCount = async (query) => await api.get(`/count/general-ihs?${query}`);

// //KYC
// export const getKycCount = async (query) => await api.get(`/employers?employerKycStatus=1&${query}`);

// //resume services
// export const getTextResume = async (query) => await api.get(`/text-resume-services/${query}`);
// export const getVideoResume = async (query) => await api.get(`/video-resume-services/${query}`);
// export const getVisualResume = async (query) => await api.get(`/visual-resume-services/${query}`);
// export const updateTextResume = async (id, data) => await api.put(`/text-resume-services/${id}`, data);
// export const updateVideoResume = async (id, data) => await api.put(`/video-resume-services/${id}`, data);
// export const updateVisualResume = async (id, data) => await api.put(`/visual-resume-services/${id}`, data);

// //events
// // export const getEvents = async (query) => await api.get(`/events?${query}`);
// // export const getEvent = async (id) => await api.get(`/events/${id}`);
// // export const createEvent = async (data) => await api.post('/events', data);
// // export const updateEvent = async (id, data) => await api.put(`/events/${id}`, data);

// //Fraud Alert
// export const getFraudAlert = async (query) => await api.get(`/fraud-alerts?${query}`);
// export const getFraudAlertById = async (id) => await api.get(`/fraud-alerts/${id}`);
// export const createFraudAlert = async (data) => await api.post('/fraud-alerts', data);
// export const updateFraudAlert = async (id, data) => await api.put(`/fraud-alerts/${id}`, data);

// //feedback
// export const getFeedback = async (query) => await api.get(`/feedbacks?${query}`);

// //Databases
// export const getFreeDatabaseCount = async (query) => await api.get(`/count/free-databases?${query}`);
// export const getIndividualDatabaseCount = async (query) => await api.get(`/count/individual-databases?${query}`);
// export const getLargeDatabaseCount = async (query) => await api.get(`/count/large-org-dbs?${query}`);
// export const getSmallDatabaseCount = async (query) => await api.get(`/count/small-org-databases?${query}`);
// // export const getPurchaseFreeDatabaseCount = async (query) => await api.get(`/count/purchase-free-databases?${query}`);
// //export const getPurchaseIndDatabaseCount = async (query) => await api.get(`/count/purchase-individual-databases?${query}`);
// export const getSpecialDatabaseCount = async (query) => await api.get(`/count/special-databases?${query}`);
// export const getSpecialDatabase = async (query) => await api.get(`/special-databases?${query}`);

// //Job Titles
// export const getJobTitles = async (query) => await api.get(`/job-titles?${query}`);
// export const createJobTitle = async (data) => await api.post('/job-titles', data);
// export const updateJobTitle = async (id, data) => await api.put(`/job-titles/${id}`, data);

// // teaching subject
// export const getTeachingSubject = async (query) => await api.get(`/teaching-subjects?${query}`);
// export const createTeachingSubject = async (data) => await api.post('/teaching-subjects', data);
// export const updateTeachingSubject = async (id, data) => await api.put(`/teaching-subjects/${id}`, data);
// export const searchTeachingSubject = async (id, data) => await api.get(`/teaching-subjects/${id}`, data);

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },

//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await axios.post(`${ADMIN_SERVICE_API_URL}/refresh-token`, {}, { withCredentials: true });
//         return api.request(originalRequest);
//       } catch (err) {
//         window.location.replace('/login');
//       }
//     }
//     throw error;
//   }
// );

// export default api;
