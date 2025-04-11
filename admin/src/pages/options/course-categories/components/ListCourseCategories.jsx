// import { useState, useContext } from 'react';
// import CustomTable from '@/components/custom-components/CustomTable';
// import { customJSONParser, customJSONStringify } from '@/lib/utils';
// import { useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import CourseCategoryChipFilter from './CourseCategoryChipFilter';
// import { CourseCategoriesContext } from '@/contexts/CourseCategoriesContext';
// import CourseCategoryActionMenu from './CouseCategoryActionMenu';

// export default function ListCourseCategories({ label }) {
//   // This Component
//   const { totalCourseCategories, loading, courseCategories } = useContext(CourseCategoriesContext);
//   const editAccess = useSelector((state) => state.auth.admin?.isRootAdmin);

//   // Pass to table

//   const localColumnsKey = 'course-categories-columns';
//   const actionId = 'action-course-categories';

//   const actionColumn = {
//     id: actionId,
//     cell: (row) => <CourseCategoryActionMenu courseCategory={row} />
//   };

//   let adminColumnsLocal = localStorage.getItem(localColumnsKey);
//   adminColumnsLocal = adminColumnsLocal && customJSONParser(adminColumnsLocal);
//   const adminColumns = adminColumnsLocal
//     ? adminColumnsLocal
//     : [
//         {
//           id: nanoid(),
//           name: 'Category',
//           selector: (row) => row.category,
//           sortable: true,
//           width: '12rem',
//           wrap: true,
//           key: 'category',
//           style: {
//             textTransform: 'capitalize'
//           }
//         },
//         {
//           id: nanoid(),
//           name: 'Created At',
//           selector: (row) => {
//             const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//             const createdDate = new Date(row.createdAt);
//             return createdDate.getDate() + ' ' + month[createdDate.getMonth()] + ' ' + createdDate.getFullYear();
//           },
//           sortable: true,
//           width: '10rem',
//           wrap: true,
//           omit: false,
//           key: 'createdAt'
//         }
//       ];
//   if (editAccess) {
//     adminColumns.push(actionColumn);
//   }

//   const [columns, setColumns] = useState([...adminColumns]);

//   const conditionalRowStyles = [
//     {
//       when: (row) => !row.isActive,
//       style: {
//         backgroundColor: 'rgb(237,108,2)'
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
//     newColumns = newColumns.filter((column) => column.id !== actionId);
//     localStorage.setItem(localColumnsKey, customJSONStringify(newColumns));
//   };

//   return (
//     <div className='border-gray-300 dark:border-gray-100 rounded-2xl border-[1px] overflow-hidden'>
//       <div className='flex gap-2 m-3 justify-start md:justify-end items-center flex-wrap pr-6 border-b-2 pb-3 w-auto lg:hidden'>
//         <CourseCategoryChipFilter />
//       </div>
//       <CustomTable
//         columns={columns}
//         data={courseCategories}
//         totalItems={totalCourseCategories}
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
//       toolTip: 'Disabled',
//       color: 'rgb(237,108,2)'
//     }
//   ];
//   return (
//     <div className='flex  h-full items-center'>
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
