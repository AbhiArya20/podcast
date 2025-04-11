// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import DropDownMenu from '../src/components/DropDown';
// import { useNavigate } from 'react-router';
// import AlertDialogSlide from './AlertDialogSlide';

// const jobDetails = {
//   title: 'TGT Teacher',
//   type: 'Full Time',
//   Organization: 'Edudoor School',
//   employer: '',
//   logo: 'https://imgs.search.brave.com/F_EFbxlVZw6MuD__U9loGDDPvRlf4ltPIFta7Id-UVQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/NjExMjY4OS9waG90/by95b3VuZy1tdWx0/aXJhY2lhbC1ncm91/cC1zdGFja2luZy1o/YW5kcy10b2dldGhl/ci1oYXBweS1kaXZl/cnNlLWZyaWVuZHMt/dW5pdGVkLWF0LWNv/bW11bml0eS53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz1GWjF3ZnZnU1BE/eDlhSXdYVVZka0xW/OC1ZLVgwWlI5V0R1/ZTBreWlncjdVPQ',
//   email: 'Edudoor@gmail.com',
//   phone: '1234567890',
//   location: 'Azamnagar, Darbhanga',
//   salary: {
//     from: '12000',
//     to: '20000'
//   },
//   teachingSubject: ['Biology', 'Math'],
//   teachingClass: ['', ''],
//   teachingDegree: ['', ''],
//   teachingMode: '',
//   gender: 'Female',

//   description:
//     ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, velit saepe maxime tenetur minima cum sed, distinctio perferendis, deserunt voluptates quidem laudantium optio consectetur. Fugiat quos magni molestiae maiores nisi odio ipsum atque blanditiis. Sit neque numquam deleniti perferendis, ea nisi voluptatem in cumque magnam! Mollitia assumenda earum facere doloribus.',
//   category: 'Teaching',
//   qualification: 'B.Ed',
//   experience: '5 Years',
//   facilities: ['Food', 'Apartment', 'Security'],
//   vacancy: '10',
//   status: {
//     status: 'Approved',
//     statusMenu: ['Approved', 'Under Process', 'Not Approved', 'Deleted']
//   },
//   remarks: 'Add or show added'
// };
// const JobDetails = () => {
//   const navigate = useNavigate();

//   const statusSelected = (selected) => {
//     jobDetails.status.status = selected;
//   };

//   return (
//     <div className='flex flex-col h-screen w-screen overflow-y-scroll space-y-2'>
//       <div className='header_ sticky top-0 p-2 flex shadow-sm bg-white w-full justify-between items-center'>
//         <div className='flex space-x-3 items-center'>
//           <div onClick={() => navigate(-1)}>
//             <KeyboardBackspaceIcon className='' />
//           </div>
//           <span className='text-2xl font-bold'>Job Details</span>
//         </div>

//         <AlertDialogSlide />
//       </div>
//       <div className='px-3 lg:mx-40 h-full rounded-lg lg:bg-slate-100 space-y-3'>
//         <div className='body_ flex  space-x-2 items-center'>
//           <span className='font-bold text-xl'>{jobDetails.title}</span>
//           <span className='text-xs'>({jobDetails.type})</span>
//         </div>
//         <div className='flex py-2'>
//           <img className='w-24 rounded-lg' src={jobDetails.logo} alt='' />
//           <div className='flex flex-col space-y-3'>
//             <div className='flex items-center flex-wrap text-md ml-3'>
//               <span className='text-blue-500 font-bold mr-6'>{jobDetails.Organization}</span>
//               <div className='flex space-x-1 items-center'>
//                 <LocationOnIcon fontSize='' />
//                 <span>{jobDetails.location}</span>
//               </div>
//             </div>

//             <div className='flex text-xs ml-3'>
//               <div className=' px-1 bg-fuchsia-200 rounded-sm'>
//                 <span>{jobDetails.type}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=' email mt-2  text-md '>
//           <span className='font-bold text-[#808080] mr-2'>Email :</span>
//           <span className='text-sm'>{jobDetails.email}</span>
//         </div>
//         <div className='phone  text-md '>
//           <span className='font-bold text-[#808080] mr-2'>Phone :</span>
//           <span className='text-sm'>{jobDetails.phone}</span>
//         </div>
//         <div className='salary text-sm flex items-center'>
//           <span className='font-bold text-[#808080] mr-2'>Salary :</span>
//           <div className='text-sm space-x-2'>
//             <span>{jobDetails.salary.from}</span>
//             <span>to</span>
//             <span>{jobDetails.salary.to}</span>
//             <span>/month</span>
//           </div>
//         </div>

//         <div className='phone  text-sm '>
//           <span className='font-bold text-[#808080] mr-2'>Category :</span>
//           <span className='text-sm'>{jobDetails.category}</span>
//         </div>

//         <div className='phone  text-sm '>
//           <span className='font-bold text-[#808080] mr-2'>Qualification :</span>
//           <span className='text-sm'>{jobDetails.qualification}</span>
//         </div>

//         <div className='phone  text-sm '>
//           <span className='font-bold text-[#808080] mr-2'>Experience :</span>
//           <span className='text-sm'>{jobDetails.experience}</span>
//         </div>
//         <div className='phone  text-sm '>
//           <span className='font-bold text-[#808080] mr-2'>Vacancy :</span>
//           <span className='text-sm'>{jobDetails.vacancy}</span>
//         </div>

//         <div className='phone  text-sm flex '>
//           <span className='font-bold text-[#808080] mr-2'>Facilities :</span>
//           <div className='flex text-sm flex-wrap space-x-1 items-center'>
//             {jobDetails.facilities.map((facility, index) => (
//               <div key={index} className=' bg-orange-200 rounded-md px-1.5 py-0.5 flex items-center'>
//                 <span className='text-sm'>{facility}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='job_desc  text-sm flex flex-col space-y-2'>
//           <span className='text-md font-bold text-[#808080]'>Description</span>
//           <span className='text-sm'>{jobDetails.description}</span>
//         </div>

//         <div className='Job_Status w-full flex flex-wrap justify-between lg:space-x-5 items-center '>
//           <div className='flex flex-col w-[48%] space-y-1 min-w-6 mb-4'>
//             <span className='text-sm font-bold  text-green-500'>Status</span>

//             <DropDownMenu menu={jobDetails.status} onSelect={statusSelected} />
//           </div>

//           <div className='flex flex-col w-[48%]  space-y-1 min-w-2 mb-4'>
//             <span className='text-sm font-bold'>Remarks</span>
//             <div className='border-2 text-sm bg-white px-2 h-8  flex justify-between items-center'>
//               <input className='border-none p-1 outline-none w-full' placeholder='Search...' />
//             </div>
//           </div>

//           <div className='update_btn text-center border-2 shadow-csm p-2 border-green-500 bg-green-500 rounded-lg cursor-default w-full items-center mr-10 ml-10 mb-5'>
//             <span className='text-white  font-bold '>Update</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetails;
