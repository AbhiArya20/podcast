// import { getJobTitles } from '../src/http';
// import JobTitle from '../src/components/JobTitle';
// import Table from '../src/components/custom-components/CustomTable';
// import { useState, useEffect, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import CustomInput from '@/components/custom-components/CustomInput';
// import debounce from 'lodash.debounce';

// const CreateJobTitle = () => {
//   const [rowDataOnEdit, setRowData] = useState(null);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [nameQuery, setNameQuery] = useState('');

//   const handleEditClick = (rowData) => {
//     console.log(rowData);
//     setRowData(rowData);
//   };

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
//       name: 'Job Title',
//       selector: (row) => row.jobTitle
//     },
//     {
//       name: 'Job Type',
//       selector: (row) => row.jobType
//     },
//     {
//       name: 'Actions',
//       cell: (row) => (
//         <Link to='/option/update/jobTitleId'>
//           <div>
//             <button className='text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-700 hover:font-bold ' onClick={() => handleEditClick(row)}>
//               EDIT {}
//             </button>
//           </div>
//         </Link>
//       )
//     }
//   ];
//   const [loading, setLoading] = useState(true);
//   const [JobTitles, setJobTitles] = useState([]);

//   const getJobTitle = useCallback(async () => {
//     const queryParams = `page=${page}&limit=${limit}&jobTitle=${nameQuery}`;
//     try {
//       const response = await getJobTitles(queryParams);
//       setJobTitles(response?.data?.jobTitles);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }, [page, limit, nameQuery]);

//   const debouncedData = useCallback(
//     debounce(() => {
//       getJobTitle();
//     }, 1000),
//     [getJobTitle]
//   );

//   useEffect(() => {
//     debouncedData();
//     return () => {
//       debouncedData.cancel();
//     };
//   }, [debouncedData]);

//   return (
//     <PrivatePageWrapper>
//       <div className='px-4 pt-2 w-full'>
//         <h1 className='mb-4 text-2xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-3xl dark:text-white'>Create Job Title</h1>
//         <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 bg-white '>
//           <div className='w-full md:w-1/3 shadow-csm p-2 rounded-md'>
//             <JobTitle />
//           </div>

//           <div className='w-full overflow-auto max-h-[500px] md:w-2/3 shadow-csm ml-3'>
//             <div className='flex justify-between'>
//               <div className='dark:text-white my-2 mx-3'>
//                 <CustomInput type='text' placeholder='Search Subject' value={nameQuery} onChange={(e) => setNameQuery(e.target.value)} className='border border-gray-300 rounded px-2 py-1' />
//               </div>
//             </div>
//             <Table columns={columns} data={JobTitles} expandableRowsComponent={expandableRowsComponent} />
//           </div>
//         </div>
//       </div>
//     </PrivatePageWrapper>
//   );
// };

// function expandableRowsComponent() {
//   return <div></div>;
// }

// export default CreateJobTitle;
