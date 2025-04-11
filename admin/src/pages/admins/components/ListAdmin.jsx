// import { useState, useContext } from 'react';
// import CustomTable from '@/components/custom-components/CustomTable';
// import { profileTypes } from '../../../constants/options';
// import { customJSONParser, customJSONStringify } from '@/lib/utils';
// import CustomAdminCard from '@/components/custom-components/CustomAdminCard';
// import { nanoid } from 'nanoid';
// import { OnlineContext } from '@/contexts/OnlineContext';
// import { AdminsContext } from '@/contexts/AdminsContext';
// import AdminActionsMenu from './AdminActionMenu';
// import AdminChipFilter from './AdminChipFilter';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import CustomButton from '@/components/custom-components/CustomButton';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import CreateAdmin from './CreateAdmin';

// const LiveComponent = ({ row }) => {
//   const { onlineUsers } = useContext(OnlineContext);
//   const isOnline = onlineUsers.includes(row._id);
//   return <div className={`w-4 h-4 rounded-full bottom-1/2 translate-y-1/2 absolute ring-2 ring-white  ${isOnline ? 'bg-green-600' : 'bg-blue-600'}`}></div>;
// };

// export default function ListAdmins({ label }) {
//   const [admin, setAdmin] = useState({});
//   const [showProfile, setShowProfile] = useState(false);
//   const handleShowProfile = () => {
//     setShowProfile(!showProfile);
//     setAdmin({});
//   };

//   const { totalAdmins, loading, admins } = useContext(AdminsContext);

//   const localColumnsKey = 'admin-columns';

//   const fieldIds = ['action-admins', 'live-admins'];

//   const onViewClick = (admin) => {
//     setAdmin(admin);
//     setShowProfile(true);
//   };

//   const actionColumn = {
//     id: fieldIds[0],
//     cell: (row) => <AdminActionsMenu admin={row} onViewClick={onViewClick} />,
//     width: '5rem',
//     style: {
//       position: 'sticky',
//       right: '0px'
//     }
//   };

//   const liveColumn = {
//     id: fieldIds[1],
//     selector: (row) => <LiveComponent row={row} />,
//     width: '.5rem'
//   };

//   const selectorFunctions = {
//     name: (row) => row.name,
//     phone: (row) => row.phone,
//     username: (row) => row.username,
//     permission: (row) => (row.isWriteAccess ? 'Read And Write Access' : 'Read Only Access'),
//     status: (row) => row.status,
//     gender: (row) => row.gender,
//     createdAt: (row) => {
//       const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//       const createdDate = new Date(row.createdAt);
//       return createdDate.getDate() + ' ' + month[createdDate.getMonth()] + ' ' + createdDate.getFullYear();
//     }
//   };

//   let adminColumnsLocal = localStorage.getItem(localColumnsKey);
//   adminColumnsLocal = adminColumnsLocal && customJSONParser(adminColumnsLocal, selectorFunctions);
//   const adminColumns = adminColumnsLocal
//     ? adminColumnsLocal
//     : [
//         {
//           id: nanoid(),
//           name: 'Name',
//           selector: selectorFunctions.name,
//           sortable: true,
//           reorder: true,
//           width: '12rem',
//           wrap: true,
//           omit: false,
//           key: 'name',
//           style: {
//             textTransform: 'capitalize'
//           }
//         },
//         {
//           id: nanoid(),
//           name: 'Phone',
//           selector: selectorFunctions.phone,
//           sortable: true,
//           reorder: true,
//           width: '10rem',
//           wrap: true,
//           omit: false,
//           key: 'phone'
//         },
//         {
//           id: nanoid(),
//           name: 'Username',
//           selector: selectorFunctions.username,
//           sortable: true,
//           reorder: true,
//           width: '15rem',
//           wrap: true,
//           omit: false,
//           key: 'username'
//         },
//         {
//           id: nanoid(),
//           name: 'Permission',
//           selector: selectorFunctions.permission,
//           reorder: true,
//           width: '12rem',
//           wrap: true,
//           omit: false
//         },
//         {
//           id: nanoid(),
//           name: 'Status',
//           selector: selectorFunctions.status,
//           reorder: true,
//           width: '12rem',
//           wrap: true,
//           omit: false,
//           style: {
//             textTransform: 'capitalize'
//           }
//         },
//         {
//           id: nanoid(),
//           name: 'Gender',
//           selector: selectorFunctions.gender,
//           reorder: true,
//           width: '10rem',
//           wrap: true,
//           omit: false,
//           key: 'gender'
//         },
//         {
//           id: nanoid(),
//           name: 'Created At',
//           selector: selectorFunctions.createdAt,
//           sortable: true,
//           reorder: true,
//           width: '10rem',
//           wrap: true,
//           omit: false,
//           key: 'createdAt'
//         }
//       ];
//   const [columns, setColumns] = useState([liveColumn, ...adminColumns, actionColumn]);

//   const conditionalRowStyles = [
//     {
//       when: (row) => row.isWriteAccess,
//       style: {
//         backgroundColor: 'rgb(225, 160, 236)'
//       }
//     },
//     {
//       when: (row) => row.status === 'blocked',
//       style: {
//         backgroundColor: 'rgb(237,108,2)'
//       }
//     },
//     {
//       when: (row) => row.status === 'deleted',
//       style: {
//         backgroundColor: 'rgb(211,47,47)'
//       }
//     }
//   ];

//   const onColumnChange = (changedColumns, value) => {
//     let newColumns;
//     if (value !== undefined) {
//       newColumns = columns.map((col) => (col.name === changedColumns ? { ...col, omit: !value } : col));
//     } else {
//       newColumns = changedColumns;
//     }
//     setColumns([...newColumns]);
//     newColumns = newColumns.filter((column) => !fieldIds.includes(column.id));
//     localStorage.setItem(localColumnsKey, customJSONStringify(newColumns));
//   };

//   return (
//     <div className='border-gray-300 dark:border-gray-700 rounded-2xl border overflow-hidden'>
//       <div className='flex gap-4 justify-between flex-col sm:flex-row items-center sm:pr-6 border-b-2 border-gray-300 dark:border-gray-700 px-1 py-4 sm:px-4 w-auto'>
//         <div className='flex gap-1 sm:gap-2 justify-center md:justify-between items-center flex-wrap sm:pr-6 '>
//           <AdminChipFilter />
//         </div>
//         <div className='self-end pr-3'>
//           <CustomDialogBox
//             open={showProfile == true ? false : undefined}
//             trigger={
//               <span>
//                 <CustomButton btnText='Create Admin' className='min-w-32' />
//               </span>
//             }
//             onOpenChange={showProfile ? handleShowProfile : undefined}
//             title={'Create Admin'}
//             description={"Add admin details here. Click on create when you're done."}
//             onInteractOutside={(e) => e.preventDefault()}
//           >
//             <CreateAdmin setAdmin={setAdmin} setShowProfile={setShowProfile} />
//           </CustomDialogBox>
//         </div>
//       </div>

//       <div className={`fixed top-[50%] overflow-hidden z-[40]  ${showProfile ? 'right-[50%]' : '-right-[300%]'}  transition-all duration-500 translate-x-1/2 -translate-y-1/2`}>
//         <CustomAdminCard close={handleShowProfile} data={admin} type={profileTypes.card} />
//       </div>

//       <CustomTable
//         columns={columns}
//         data={admins}
//         expandableRowsComponent={({ data }) => (
//           <>
//             <CustomAdminCard data={data} type={profileTypes.list} />
//           </>
//         )}
//         totalItems={totalAdmins}
//         loading={loading}
//         onColumnChange={onColumnChange}
//         conditionalRowStyles={conditionalRowStyles}
//         label={label}
//         indication={<Indication />}
//       />
//     </div>
//   );
// }

// const Indication = () => {
//   const indicationColors = [
//     {
//       id: nanoid(),
//       toolTip: 'Admins have Read And Write Access',
//       color: 'rgb(225, 160, 236)'
//     },
//     {
//       id: nanoid(),
//       toolTip: 'Admin Blocked',
//       color: 'rgb(237,108,2)'
//     },
//     {
//       id: nanoid(),
//       toolTip: 'Admin Deleted',
//       color: 'rgb(211,47,47)'
//     }
//   ];
//   return (
//     <div className='flex h-full items-center'>
//       {indicationColors.map((indicator) => (
//         <div key={indicator.id}>
//           <CustomToolTip tooltip={indicator.toolTip}>
//             <div style={{ backgroundColor: indicator.color }} className={`w-4 h-4 rounded-full ring-2 ring-white cursor-pointer`}></div>
//           </CustomToolTip>
//         </div>
//       ))}
//     </div>
//   );
// };
