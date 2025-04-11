// import Sidebar from '../../components/Sidebar';
// import Navbar from '../../components/custom-components/Navbar';
// import TableSearch from '../../components/TableSearch';
// import AddIcon from '@mui/icons-material/Add';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import InstantHireTable from '../../components/custom-components/CustomTable';

// const InstantHirePurchased = () => {
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState('');
//   console.log(search);

//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const getCountries = async () => {
//     try {
//       const response = await axios.get('https://restcountries.com/v2/all');
//       setCountries(response.data);
//       setFilteredCountries(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//       setSearch('');
//     }
//   };

//   const columns = [
//     {
//       name: 'S.no',
//       cell: (row, index) => (
//         <div className='flex space-x-3 items-center'>
//           <div className=' text-[#E5E7EB] p-[0.5rem] outline-dashed h-3 w-3 flex  justify-center items-center'>
//             <AddIcon />
//           </div>
//           <span>{index + 1}</span>
//         </div>
//       ),
//       width: '100px'
//     },
//     {
//       name: 'Country Name',
//       // selector: (row)=> row.name

//       cell: (row) => (
//         <div className='flex space-x-1'>
//           <img className='rounded-[100%] w-6' src={row.flags.svg} alt='flag' />
//           <div className='w-auto'>{row.name}</div>
//         </div>
//       )
//     },
//     {
//       name: 'Country Native Name',
//       selector: (row) => row.nativeName,
//       sortable: true
//     },
//     {
//       name: 'Country Capital',
//       selector: (row) => row.capital
//     },
//     {
//       name: 'Country Flag',
//       selector: (row) => <img width={50} height={50} src={row.flag} />
//     },
//     {
//       name: 'Actions',
//       cell: (row) => {
//         console.log(row);
//         return (
//           <div>
//             <button className='text-white bg-green-600 p-2 rounded-lg'>Credit</button>
//           </div>
//         );
//       }
//     }
//   ];

//   useEffect(() => {
//     getCountries();
//   }, []);

//   const handleSearch = (filteredResults, searchTerm) => {
//     setFilteredCountries(filteredResults);
//     console.log(searchTerm);
//   };

//   // const handleRadioBtnClick = (selected) => {
//   //   setSelectedRadio(selected);
//   // };

//   return (
//     <div className='flex w-screen mb-10 lg:mb-0'>
//       <Sidebar />
//       <div className='w-full h-screen overflow-scroll'>
//         <Navbar />
//         <div className='px-4 pt-2 space-y-4'>
//           <span className='font-bold text-2xl'>Instant Hire Purchased by Employer</span>

//           <div className='shadow-csm p-1 rounded-md spay-3'>
//             <div className='flex items-center flex-wrap justify-between '>
//               <TableSearch data={countries} onSearch={handleSearch} />
//             </div>
//             <InstantHireTable column={columns} data={filteredCountries} loading={loading} />
//             <div></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstantHirePurchased;
