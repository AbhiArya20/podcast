// import { useEffect, useState, useCallback } from 'react';
// import AddIcon from '@mui/icons-material/Add';
// import CustomTable from '../src/components/custom-components/CustomTable';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import CustomInput from '@/components/custom-components/CustomInput';
// import { getJobSeekers } from '@/http';
// import debounce from 'lodash.debounce';

// const JobSeekerList = () => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [totalData, setTotalData] = useState(0);
//   const [page, setPage] = useState(1);
//   const [nameQuery, setNameQuery] = useState('');
//   const [limit, setLimit] = useState(20);

//   const getJobSeeker = useCallback(async () => {
//     const queryParams = `limit=${limit}&page=${page}&fullName=${nameQuery}`;
//     try {
//       const response = await getJobSeekers(queryParams);
//       console.log(response.data);
//       setData(response?.data?.jobseekers);
//       setTotalData(response?.data?.jobseekerCount);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   }, [limit, page, nameQuery]);

//   const debouncedData = useCallback(
//     debounce(() => {
//       getJobSeeker();
//     }, 1000),
//     [getJobSeeker]
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
//       name: 'Name',
//       // selector: (row)=> row.name

//       cell: (row) => (
//         <div className='flex space-x-1'>
//           {/* <img className="rounded-[100%] w-6" src={row.flags.svg} alt="flag" /> */}
//           <div className='w-auto'>{row.fullName ?? 'empty'}</div>
//         </div>
//       )
//     },
//     {
//       name: 'id',
//       selector: (row) => row._id,
//       sortable: true
//     },
//     {
//       name: 'Phone',
//       selector: (row) => row.phone
//     },
//     {
//       name: 'Email',
//       cell: (row) => (
//         <div className='flex space-x-1'>
//           {/* <img className="rounded-[100%] w-6" src={row.flags.svg} alt="flag" /> */}
//           <div className='w-auto'>{row.email ?? 'empty'}</div>
//         </div>
//       )
//     },
//     {
//       // name: "Actions",
//       // cell: (row) => (
//       //   <div>
//       //     <button className="text-white bg-red-500 p-2 rounded-lg">
//       //       Delete
//       //     </button>
//       //   </div>
//       // ),
//     }
//   ];

//   return (
//     <PrivatePageWrapper>
//       <>
//         <div className='px-4 pt-2 space-y-4'>
//           <span className='font-bold text-2xl dark:text-white'>Jobseeker List</span>
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

// export default JobSeekerList;
