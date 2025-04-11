// import Sidebar from '../src/components/custom-components/Sidebar';
// import Navbar from '../src/components/custom-components/Navbar';
// import TableSearch from '../src/components/TableSearch';
// import JobsList from '../src/components/custom-components/CustomTable';
// import AddIcon from '@mui/icons-material/Add';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import HorizontalTabs from '../src/components/custom-components/HorizontalTabs';
// import RadioButton from '../src/components/RadioButton';

// const tabs = ['Total Jobs', 'Underprocess', 'Approved', 'Not Approved', 'Hold', 'Deleted'];

// const Jobs = () => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [seletedRadioBtn, setSelectedRadio] = useState(1);

//   console.log(selectedTab, seletedRadioBtn);

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
//       setSearch('');
//       console.error(error);
//       setLoading(false);
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
//             <button className='text-white bg-red-500 p-2 rounded-lg'>Delete</button>
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

//   const handleTabClick = (selected) => {
//     setSelectedTab(selected);
//   };

//   const handleRadioBtnClick = (selected) => {
//     setSelectedRadio(selected);
//   };

//   return (
//     <div className='flex w-screen mb-10 lg:mb-0'>
//       <Sidebar />
//       <div className='w-full h-screen overflow-scroll'>
//         <Navbar />
//         <div className=' px-3'>
//           <div className='mt-6 mb-6  flex justify-between flex-col lg:flex-row space-y-3'>
//             <HorizontalTabs tabs={tabs} onClick={handleTabClick} />

//             <RadioButton onClick={handleRadioBtnClick} />
//           </div>

//           <section className=' w-full mt-6 py-4 '>
//             <div className='w-full flex justify-between flex-wrap items-center'>
//               <TableSearch data={countries} onSearch={handleSearch} />
//             </div>
//           </section>

//           <JobsList column={columns} data={filteredCountries} loading={loading} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;
