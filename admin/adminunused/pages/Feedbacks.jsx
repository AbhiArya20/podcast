// import { useEffect, useState, useCallback } from 'react';
// import CustomTable from '../../components/custom-components/CustomTable';
// import { getFeedback } from '@/http';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import CustomInput from '@/components/custom-components/CustomInput';
// import debounce from 'lodash.debounce';

// const Feedbacks = () => {
//   const [loading, setLoading] = useState(true);
//   const [nameQuery, setNameQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [data, setData] = useState([]);
//   const [limit, setLimit] = useState(20);
//   const [totalData, setTotalData] = useState(0);

//   const getFeedbacks = useCallback(async () => {
//     const queryParams = `limit=${limit}&page=${page}&fullName=${nameQuery}`;
//     try {
//       const response = await getFeedback(queryParams);
//       console.log(response.data);
//       setData(response?.data?.feedbacks);
//       setTotalData(response?.data?.feedbackCount);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   }, [limit, page, nameQuery]);

//   const debouncedData = useCallback(
//     debounce(() => {
//       getFeedbacks();
//     }, 1000),
//     [getFeedbacks]
//   );

//   const columns = [
//     {
//       name: 'S.no',
//       cell: (row, index) => (
//         <div className='flex space-x-3 items-center'>
//           <span>{index + 1}</span>
//         </div>
//       ),
//       width: '100px'
//     },
//     {
//       name: 'Name',
//       selector: (row) => row.fullName,
//       sortable: true,
//       key: 'fullName',
//       reorder: true
//     },
//     {
//       name: 'Email',
//       selector: (row) => row.email,
//       sortable: true,
//       key: 'email',
//       reorder: true
//     },

//     {
//       name: 'Rating',
//       selector: (row) => row.rating,
//       sortable: true,
//       key: 'rating',
//       reorder: true
//     },

//     {
//       name: 'Meesage',
//       selector: (row) => row.message,
//       sortable: true,
//       key: 'message',
//       reorder: true
//     },

//     {
//       name: 'Posted Date',
//       selector: (row) => row.createdAt,
//       sortable: true,
//       key: 'createdAt',
//       reorder: true
//     },
//     {
//       name: 'Actions',
//       cell: (row) => {
//         console.log(row);
//         return (
//           <div>
//             <button className='text-white bg-green-600 p-2 rounded-lg'>Delete</button>
//           </div>
//         );
//       }
//     }
//   ];

//   useEffect(() => {
//     debouncedData();
//     return () => {
//       debouncedData.cancel();
//     };
//   }, [debouncedData]);

//   return (
//     <PrivatePageWrapper>
//       <>
//         <div className='px-4 pt-2 space-y-4'>
//           <span className='font-bold text-2xl dark:text-white'>Feedbacks</span>

//           <div className='shadow-csm p-1 rounded-md spay-3'>
//             <div className='flex items-center flex-wrap justify-between dark:text-white'>
//               <div className='flex justify-between'>
//                 <div className='dark:text-white my-2 mx-3'>
//                   <CustomInput type='text' placeholder='Search by name' value={nameQuery} onChange={(e) => setNameQuery(e.target.value)} className='border border-gray-300 rounded px-2 py-1' />
//                 </div>
//               </div>
//             </div>
//             <CustomTable columns={columns} data={data} loading={loading} />
//             <div></div>
//           </div>
//         </div>
//       </>
//     </PrivatePageWrapper>
//   );
// };

// export default Feedbacks;
