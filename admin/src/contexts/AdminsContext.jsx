// import { createAdmin, getAdmins, getAdminsCount, updateAdmin } from '@/http/admin-service';
// import { errorHandler } from '@/lib/utils';
// import { createContext, useCallback, useEffect, useState } from 'react';
// import debounce from 'lodash/debounce';
// import { useLocation } from 'react-router';
// import toast from 'react-hot-toast';

// export const AdminsContext = createContext();

// const AdminsProvider = ({ children }) => {
//   // Get admins counts
//   const [adminCounts, setAdminCounts] = useState(0);
//   const fetchAdminCounts = async () => {
//     try {
//       const response = await getAdminsCount('');
//       setAdminCounts(response.data.adminCount);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Get all admins
//   const [visited, setVisited] = useState(false);
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [totalAdmins, setTotalAdmins] = useState(0);

//   const location = useLocation();

//   const fetchAdmins = useCallback(async () => {
//     try {
//       const searchParams = new URLSearchParams(location.search);
//       setLoading(true);
//       const response = await getAdmins(searchParams.toString());
//       setAdmins(response.data.admins);
//       setTotalAdmins(response.data.adminCount);
//     } catch (error) {
//       errorHandler(error);
//     } finally {
//       setLoading(false);
//     }
//   }, [location]);

//   const debouncedFetchData = useCallback(
//     debounce(() => {
//       fetchAdmins();
//     }, 500),
//     [location]
//   );
//   useEffect(() => {
//     if (!visited) {
//       fetchAdmins();
//       fetchAdminCounts();
//       setVisited(true);
//     } else {
//       debouncedFetchData();
//     }
//     return () => {
//       debouncedFetchData.cancel();
//     };
//   }, [location]);

//   // Update admin
//   const [updateAdminLoading, setUpdateAdminLoading] = useState(false);
//   const updateAdmins = async (id, data) => {
//     try {
//       setUpdateAdminLoading(true);
//       const updatedAdmin = await updateAdmin(id, data);
//       setAdmins((prev) => {
//         const index = prev.findIndex((admin) => admin._id === id);
//         prev[index] = updatedAdmin.data;
//         return [...prev];
//       });
//       return updatedAdmin;
//     } catch (error) {
//       errorHandler(error);
//       throw error;
//     } finally {
//       setUpdateAdminLoading(false);
//     }
//   };

//   // Create admin
//   const [createAdminLoading, setCreateAdminLoading] = useState(false);
//   const createAdmins = async (data) => {
//     try {
//       setCreateAdminLoading(true);
//       const response = await createAdmin(data);
//       setAdminCounts((prev) => prev + 1);
//       setAdmins((prev) => {
//         let newData = [...prev];
//         if (response.data && response.data) {
//           newData.unshift(response.data);
//         }
//         return newData;
//       });
//       toast.success('Admin created successfully');
//       return response.data;
//     } catch (error) {
//       errorHandler(error);
//       throw error;
//     } finally {
//       setCreateAdminLoading(false);
//     }
//   };

//   return (
//     <AdminsContext.Provider
//       value={{
//         // Get admins counts
//         adminCounts,

//         // Get all admins
//         totalAdmins,
//         loading,
//         admins,

//         // Create admin
//         createAdmins,
//         createAdminLoading,

//         // Update admin
//         updateAdmins,
//         updateAdminLoading
//       }}
//     >
//       {children}
//     </AdminsContext.Provider>
//   );
// };

// export default AdminsProvider;
