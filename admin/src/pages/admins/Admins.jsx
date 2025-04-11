// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import NotAuthorizedPage from '../NotAuthorized';
// import { useSelector } from 'react-redux';
// import { useContext } from 'react';
// import ListAdmins from './components/ListAdmin';
// import AdminsProvider, { AdminsContext } from '@/contexts/AdminsContext';

// export default function Admin() {
//   return (
//     <AdminsProvider>
//       <AdminsScreen />
//     </AdminsProvider>
//   );
// }

// function AdminsScreen() {
//   const editAccess = useSelector((state) => state.auth.admin?.isRootAdmin);
//   const { adminCounts } = useContext(AdminsContext);
//   const label = 'Admins';

//   return (
//     <PrivatePageWrapper>
//       {editAccess ? (
//         <>
//           <div className='flex justify-between items-center flex-wrap gap-4 p-4'>
//             <h1 className='text-xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-3xl dark:text-white'>{label}</h1>
//             <div className='flex flex-wrap items-center gap-4'>
//               {adminCounts > 0 && <h2 className='text-xs sm:text-base font-bold leading-none tracking-tight text-blue-700 dark:text-blue-400 mr-6'>Total Admins = {adminCounts}</h2>}
//             </div>
//           </div>
//           <div className='relative flex flex-col lg:flex-row bg-white-200 sm:px-4 sm:pb-4 overflow-hidden'>
//             <div className={`w-full overflow-scroll no-scrollbar lg:pr-5`}>
//               <ListAdmins label={label} />
//             </div>
//           </div>
//         </>
//       ) : (
//         <NotAuthorizedPage isDialog={false} />
//       )}
//     </PrivatePageWrapper>
//   );
// }
