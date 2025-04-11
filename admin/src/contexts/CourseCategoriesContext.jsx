// // import { getAdmins, getAdminsCount, createAdmin } from '@/http/admin-service';
// import { errorHandler } from '@/lib/utils';
// import { createContext, useCallback, useEffect, useRef, useState } from 'react';
// import debounce from 'lodash/debounce';
// import { useLocation } from 'react-router';
// import toast from 'react-hot-toast';
// import { validateMessage } from '@/constants/options';
// import { createCourseCategory, getCourseCategories, getCourseCategoriesCount } from '@/http/options-service';

// export const CourseCategoriesContext = createContext();

// const CourseCategoriesProvider = ({ children }) => {
//   // Get Course Categories counts
//   const [courseCategoriesCount, setCourseCategoriesCount] = useState(null);
//   const fetchCourseCategoriesCounts = async () => {
//     try {
//       const response = await getCourseCategoriesCount('');
//       setCourseCategoriesCount(response.data.courseCategoryCount);
//     } catch (error) {
//       errorHandler(error);
//     }
//   };

//   // Get all Course Categories
//   const [visited, setVisited] = useState(false);
//   const [courseCategories, setCourseCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isNotFound, setIsNotFound] = useState(false);
//   const [totalCourseCategories, setTotalCourseCategories] = useState(0);
//   const [icon, setIcon] = useState(null);

//   const iconInputRef = useRef();

//   const location = useLocation();

//   const fetchData = useCallback(async () => {
//     try {
//       const searchParams = new URLSearchParams(location.search);
//       setLoading(true);
//       setIsNotFound(false);
//       const response = await getCourseCategories(searchParams.toString());
//       setCourseCategories(response.data.courseCategories);
//       setTotalCourseCategories(response.data.courseCategoryCount);
//     } catch (error) {
//       errorHandler(error, setIsNotFound);
//     } finally {
//       setLoading(false);
//     }
//   }, [location]);

//   const debouncedFetchData = useCallback(
//     debounce(() => {
//       fetchData();
//     }, 500),
//     [location]
//   );

//   useEffect(() => {
//     if (!visited) {
//       fetchData();
//       fetchCourseCategoriesCounts();
//       setVisited(true);
//     } else {
//       debouncedFetchData();
//     }
//     return () => {
//       debouncedFetchData.cancel();
//     };
//   }, [location]);

//   // Create Admin Logic

//   const [category, setCategory] = useState('');
//   const [isActive, setIsActive] = useState(true);
//   const [createLoading, setCreateLoading] = useState(false);

//   const handleCategory = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleIsActive = (value) => {
//     setIsActive(value);
//   };

//   const handleIcon = (e) => {
//     setIcon(e.target.files[0]);
//   };

//   const fields = [
//     {
//       id: 'category',
//       type: 'text',
//       label: 'Category',
//       value: category,
//       onChange: handleCategory,
//       placeholder: 'Enter Category Name'
//     }
//   ];

//   const isValidInput = () => {
//     if (!category) {
//       errorHandler({ message: validateMessage });
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isValidInput()) return;
//     try {
//       setCreateLoading(true);
//       const formData = new FormData();
//       formData.append('category', category);
//       formData.append('isActive', isActive);
//       formData.append('img', icon);

//       const response = await createCourseCategory(formData);
//       setCourseCategoriesCount((prev) => prev + 1);
//       console.log('====================================');
//       console.log(response.data);
//       console.log('====================================');
//       setCourseCategories((prev) => {
//         let newData = [...prev];
//         if (response.data && response.data) {
//           newData.unshift(response.data);
//         }
//         return newData;
//       });
//       handleClear();
//       toast.success('Course category created successfully!');
//     } catch (error) {
//       errorHandler(error);
//     } finally {
//       setCreateLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setCategory('');
//     setIcon(null);
//     iconInputRef.current.value = '';
//     setIsActive(true);
//   };

//   return (
//     <CourseCategoriesContext.Provider
//       value={{
//         createLoading,
//         fields,
//         isActive,
//         handleIsActive,
//         handleSubmit,
//         iconInputRef,
//         handleIcon,

//         // Get Course Categories counts
//         courseCategoriesCount,

//         // Get all course categories
//         isNotFound,
//         totalCourseCategories,
//         loading,
//         courseCategories,
//         setCourseCategories
//       }}
//     >
//       {children}
//     </CourseCategoriesContext.Provider>
//   );
// };

// export default CourseCategoriesProvider;
