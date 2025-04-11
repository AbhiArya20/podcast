// import UserSpecialDB from '../src/components/custom-components/CustomTable';
// import { useCallback, useEffect, useState } from 'react';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import { getSpecialDatabase } from '@/http';
// import CustomInput from '@/components/custom-components/CustomInput';
// import debounce from 'lodash.debounce';

// const SpecialDbCredit = () => {
//   const [loading, setLoading] = useState(true);
//   const [limit, setLimit] = useState(20);
//   const [nameQuery, setNameQuery] = useState('');
//   const [page, setPage] = useState(1);
//   const [data, setData] = useState([]);

//   const getSpecialDatabases = useCallback(async () => {
//     const queryParams = `limit=${limit}&page=${page}&employer=${nameQuery}`;
//     try {
//       const response = await getSpecialDatabase(queryParams);
//       console.log(response);
//       setData(response?.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   }, [limit, page, nameQuery]);

//   const debouncedData = useCallback(
//     debounce(() => {
//       getSpecialDatabases();
//     }, 1000),
//     [getSpecialDatabases]
//   );

//   useEffect(() => {
//     debouncedData();
//     return () => {
//       debouncedData.cancel();
//     };
//   }, [debouncedData]);

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
//       name: 'Employer',
//       selector: (row) => row.employer,
//       sortable: true,
//       key: 'employer',
//       reorder: true
//     },
//     {
//       name: 'No. of coins',
//       selector: (row) => row.noOfCoin,
//       sortable: true,
//       key: 'noOfCoin',
//       reorder: true
//     },
//     {
//       name: 'Actions',
//       cell: (row) => {
//         return (
//           <div>
//             <button className='text-white bg-green-600 p-2 rounded-lg dark:text-white'>Credit</button>
//           </div>
//         );
//       }
//     }
//   ];

//   return (
//     <PrivatePageWrapper>
//       <>
//         <div className='px-4 pt-2 space-y-4'>
//           <span className='font-bold text-2xl dark:text-white'>Special Database Credit to Employer</span>
//           <div className='shadow-csm p-1 rounded-md spay-3 dark:text-white'>
//             <div className='flex items-center flex-wrap justify-between '>
//               <div className='flex justify-between'>
//                 <div className='dark:text-white my-2 mx-3'>
//                   <CustomInput type='text' placeholder='Search by employer' value={nameQuery} onChange={(e) => setNameQuery(e.target.value)} className='border border-gray-300 rounded px-2 py-1' />
//                 </div>
//               </div>
//             </div>
//             <UserSpecialDB columns={columns} data={data} loading={loading} />
//             <div></div>
//           </div>
//         </div>
//       </>
//     </PrivatePageWrapper>
//   );
// };

// export default SpecialDbCredit;
