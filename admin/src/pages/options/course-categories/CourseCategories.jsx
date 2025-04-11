// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';

// import { useContext } from 'react';
// // import { profileTypes } from '../../constants/options';
// // import CustomAdminCard from '@/components/custom-components/CustomAdminCard';
// import { useSelector } from 'react-redux';
// // import AdminsProvider, { AdminsContext } from '@/contexts/AdminsContext';
// // import CreateAdmin from './components/CreateAdmin';
// // import ListAdmins from './components/ListAdmin';
// // import AdminChipFilter from './components/AdminChipFilter';
// import NotFound from '@/pages/NotFound';
// import CourseCategoriesProvider, { CourseCategoriesContext } from '@/contexts/CourseCategoriesContext';
// import CreateCourseCategory from './components/CreateCourseCategory';
// import CourseCategoryChipFilter from './components/CourseCategoryChipFilter';
// import ListCourseCategories from './components/ListCourseCategories';

// export default function CourseCategories() {
//   return (
//     <CourseCategoriesProvider>
//       <CourseCategoriesScreen />
//     </CourseCategoriesProvider>
//   );
// }

// function CourseCategoriesScreen() {
//   // This Component
//   const { courseCategoriesCount, isNotFound } = useContext(CourseCategoriesContext);
//   const editAccess = useSelector((state) => state.auth.admin?.isRootAdmin);
//   const label = 'Course Categories';

//   return (
//     <PrivatePageWrapper>
//       <>
//         {isNotFound ? (
//           <NotFound isBtn={false} />
//         ) : (
//           <>
//             <div className='m-2 flex justify-between items-center flex-wrap gap-4'>
//               <h1 className='text-xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-3xl dark:text-white'>{label}</h1>
//               <div className='flex flex-wrap items-center gap-4'>
//                 <div className='hidden lg:flex gap-2 m-3 justify-start md:justify-end items-center flex-wrap'>
//                   <CourseCategoryChipFilter />
//                 </div>
//                 {courseCategoriesCount && (
//                   <h2 className='text-xs sm:text-base font-bold leading-none tracking-tight text-blue-700 dark:text-blue-400 mr-6'>Total Course Categories = {courseCategoriesCount}</h2>
//                 )}
//               </div>
//             </div>
//             <div className='relative flex flex-col lg:flex-row bg-white-200 overflow-hidden'>
//               {editAccess && (
//                 <div className='w-full lg:w-4/12 p-2 h-[85vh] overflow-scroll no-scrollbar'>
//                   <CreateCourseCategory />
//                 </div>
//               )}
//               <div className={`w-full overflow-scroll no-scrollbar ${editAccess && 'lg:w-8/12'} px-1 lg:pr-5`}>
//                 <ListCourseCategories label={label} />
//               </div>
//             </div>
//           </>
//         )}
//       </>
//     </PrivatePageWrapper>
//   );
// }
