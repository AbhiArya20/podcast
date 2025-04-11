// import Navbar from '../src/components/custom-components/Navbar';
// import Sidebar from '../src/components/custom-components/Sidebar';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import AddIcon from '@mui/icons-material/Add';
// import TableView from '../src/components/TableView';

// const employerData = {
//   phone: { type: String, required: true, unique: true },
//   fullName: 'Mithila Stack',
//   email: 'sinhasriwastav@gmail.com',
//   isEmailVerified: true,
//   isActive: true,
//   DOB: '20/07/2023',
//   gender: 'Female',
//   profilePicLink: 'https://th.bing.com/th/id/OIP.dJc_IBOBoHTa4tToeHVKUgHaFG?w=89&h=90&c=1&rs=1&qlt=90&r=0&dpr=1.5&pid=InlineBlock',
//   designation: 'IT Company',
//   aadharNo: 78389333738,
//   aadharFrontImage: 'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-vhobga052m2s92bvuc37ca5556-20170807014459.Medi.jpeg',
//   aadharBackImage: 'https://i.ytimg.com/vi/CIVsnh2ohV0/maxresdefault.jpg',
//   currentOrganization: 'Edudoor Education'
// };

// const EmployerProfile = () => {
//   const [loading, setLoading] = useState(true);
//   // const [search, setSearch] = useState("");

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
//     }
//   };

//   console.log(countries);
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

//   // const handleSearch = (filteredResults, searchTerm) => {
//   //   setFilteredCountries(filteredResults);
//   // };

//   return (
//     <div className='flex w-screen mb-10 lg:mb-0'>
//       <Sidebar />
//       <div className='w-full h-screen overflow-scroll'>
//         <Navbar />
//         <div className=''>
//           <section id='widget' className='flex py-2  px-2 lg:px-5 space-x-4 lg:space-x-8 justify-between w-full overflow-x-scroll scrollbar-hide'>
//             <div className='p-2 flex justify-between cursor-default rounded-md items-center space-x-2 shadow-md'>
//               <div className='text-sm'>
//                 <span className='block'>Delete</span>
//                 <span className='block'>Account</span>
//               </div>
//               <div>
//                 <div
//                   className='px-1 flex border-[1px]
//                     border-red-600 rounded-md justify-center items-center'
//                 >
//                   <DeleteForeverIcon className='text-red-600' style={{ fontSize: 15 }} />
//                   <span className='text-sm text-red-600'>PROCEED</span>
//                 </div>
//               </div>
//             </div>

//             <div className='p-2 flex justify-between cursor-default rounded-md items-center space-x-2 shadow-md'>
//               <div className='text-sm'>
//                 <span className='block'>Block</span>
//                 <span className='block'>Account</span>
//               </div>
//               <div>
//                 <div
//                   className='px-1 flex border-[1px]
//                     border-orange-600 rounded-md justify-center items-center'
//                 >
//                   <DeleteForeverIcon className='text-orange-600' style={{ fontSize: 15 }} />
//                   <span className='text-sm text-orange-600'>PROCEED</span>
//                 </div>
//               </div>
//             </div>

//             <div className='p-2 flex justify-between cursor-default rounded-md items-center space-x-2 shadow-md'>
//               <div className='text-sm '>
//                 <span className='block'>Activate</span>
//                 <span className='block'>Account</span>
//               </div>
//               <div>
//                 <div
//                   className='px-1 flex border-[1px]
//                     border-blue-600 rounded-md justify-center items-center'
//                 >
//                   <DeleteForeverIcon className='text-blue-600' style={{ fontSize: 15 }} />
//                   <span className='text-sm text-blue-600'>PROCEED</span>
//                 </div>
//               </div>
//             </div>

//             <div className='p-2 flex justify-between  rounded-md items-center space-x-2 shadow-md'>
//               <div className='text-sm cursor-default'>
//                 <span className='block'>Edit</span>
//                 <span className='block'>Account</span>
//               </div>
//               <div>
//                 <div
//                   className='px-1 flex border-[1px]
//                     border-green-600 rounded-md justify-center items-center'
//                 >
//                   <DeleteForeverIcon className='text-green-600' style={{ fontSize: 15 }} />
//                   <span className='text-sm text-green-600 cursor-default'>PROCEED</span>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <div className='employerDetails flex flex-col lg:flex-row p-2 lg:p-5 gap-5 w-[100%]'>
//             <div className='left p-5 w-full lg:w-1/2 shadow-csm bg-white  h-80 relative'>
//               <div className={`active flex w-auto absolute items-center top-0 right-0 p-1 text-xs ${employerData.isActive ? 'text-[#7451f8] bg-[#7551f818]' : 'text-[#808080] bg-[#9f9f9f18]'}`}>
//                 <span>{employerData.isActive ? 'Active' : 'Disabled'}</span>
//                 <div className={`Mark rounded-md ml-1 w-2 h-2 ${employerData.isActive ? 'bg-[#7451f8]' : 'bg-[#9f9f9f]'}`}></div>
//               </div>

//               <h1 className='title w-full text-base mb-1 text-[#d3d3d3] '>Information</h1>
//               <div className='flex gap-5'>
//                 <img src={employerData.profilePicLink} alt='' className='w-24 h-24 rounded-[50%] object-cover' />

//                 <div className='Details w-full'>
//                   <h1 className='mb-4 text-[#555]'>Sriwastav Sinha</h1>
//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>Email:</span>
//                       <span className='ItemValue'>{employerData.email}</span>
//                     </div>
//                     <div className={`verified rounded-md p-[1.5px] ${employerData.isEmailVerified ? 'bg-[#abf8c178] text-green-600' : 'bg-[#ffbbbb] text-red-600'}`}>
//                       {employerData.isEmailVerified ? 'verified' : 'not verified'}
//                     </div>
//                   </div>

//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>Phone:</span>
//                       <span className='ItemValue'>9876543221</span>
//                     </div>
//                   </div>

//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>DOB:</span>
//                       <span className='ItemValue'>{employerData.DOB}</span>
//                     </div>
//                   </div>

//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>Gender:</span>
//                       <span className='ItemValue'>{employerData.gender}</span>
//                     </div>
//                   </div>

//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>Address:</span>
//                       <span className='ItemValue'>Boring road, Patna , Bihar</span>
//                     </div>
//                   </div>

//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>Country:</span>
//                       <span className='ItemValue'>India</span>
//                     </div>
//                   </div>

//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>Designation:</span>
//                       <span className='ItemValue'>{employerData.designation}</span>
//                     </div>
//                   </div>

//                   <div className='personalDetails mb-2 text-sm flex justify-between'>
//                     <div>
//                       <span className='ItemKey font-bold text-[#808080] mr-2'>Current Organization:</span>
//                       <span className='ItemValue'>{employerData.currentOrganization}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className='Right  shadow-csm p-2 relative lg:w-1/2 transform-style-3d transition-all duration-1000 ease-in-out hover:transform-rotate-y-180'>
//               <div className='ImgFront flex flex-col absolute backface-hidden'>
//                 <div className='flex justify-between px-2'>
//                   <span className='employerProfileTitle'>Aadhar Front</span>
//                   <ThreeSixtyIcon />
//                 </div>

//                 <img src={employerData.aadharFrontImage} alt='' className='w-full' />
//               </div>

//               <div className='ImgBack backface-hidden transform-rotate-y-180'>
//                 <div className='flex justify-between px-2'>
//                   <span className='employerProfileTitle'>Aadhar Back</span>
//                   <ThreeSixtyIcon />
//                 </div>
//                 <img src={employerData.aadharBackImage} alt='' className='employerAdhaar' />
//               </div>
//             </div>
//           </div>

//           <div className='company_name_emai px-2 lg:px-5'>
//             <div className='shadow-csm p-5'>
//               <div className='flex items-center '>
//                 <span className='font-bold text-[#808080]'>Website : </span>
//                 <a href='https://www.edudoor.in/home' className='text-blue-400 text-sm font-bold ' target='_blank' rel='noopener noreferrer'>
//                   www.edudoor.in
//                 </a>
//               </div>
//               <div className='flex flex-col space-y-2 mt-2'>
//                 <span className='font-bold text-[#808080]'> Company Description : </span>
//                 <span>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores qui doloremque quam perspiciatis quae voluptatem consectetur, officiis explicabo necessitatibus ipsum iure
//                   repellat aut eveniet! Veniam ad culpa inventore debitis illo tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nihil sit dolor nam odio veniam voluptatibus,
//                   nobis sed. Autem blanditiis ipsam sunt, doloribus tempore optio consequuntur eaque ipsa obcaecati a velit magni fuga veniam voluptates natus odio aliquid explicabo nulla!
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className='_tables px-2 lg:px-5 py-3 mb-5 space-y-3'>
//             <div className=' flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3'>
//               <section className=' w-full mt-6 py-4 '>
//                 <div className='w-full flex justify-between flex-wrap items-center'>{/* <TableSearch data={countries} onSearch={handleSearch} /> */}</div>
//               </section>
//               {/* <OrganizationTable column={columns} data={filteredCountries} loading={loading} />  */}
//               <TableView heading={'Jobs by Employer'} column={columns} data={filteredCountries} loading={loading} />
//               <TableView heading={'Admission Lead Query'} column={columns} data={filteredCountries} loading={loading} />
//             </div>

//             <div className=' flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3'>
//               <TableView heading={'IT Solution Query'} column={columns} data={filteredCountries} loading={loading} />
//               <TableView heading={'Database Purchased'} column={columns} data={filteredCountries} loading={loading} />
//             </div>

//             <div className=' flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3'>
//               <TableView heading={'Instant Hire Solution Purchased'} column={columns} data={filteredCountries} loading={loading} />
//               <TableView heading={'Faculty Development request'} column={columns} data={filteredCountries} loading={loading} />
//             </div>

//             <div className=' flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3'>
//               <TableView heading={'Join as an expert'} column={columns} data={filteredCountries} loading={loading} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerProfile;
