// import CustomButton from '@/components/custom-components/CustomButton';
// import CreateEvent from './CreateEvent';
// import EventChipFilter from './EventChipFilter';
// import { useLocation, useNavigate } from 'react-router';
// import { useEffect, useState } from 'react';
// import { handleQueryParamChange, handleQueryParamRemove } from '@/lib/utils';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import { FaRegCalendarAlt } from 'react-icons/fa';
// import CustomDateRangePicker from '@/components/custom-components/CustomDateRangePicker';
// import CustomInput from '@/components/custom-components/CustomInput';
// import { SearchOutlined } from '@mui/icons-material';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import CustomLocationPicker from '@/components/custom-components/CustomLocationPicker';
// import { FaLocationDot } from 'react-icons/fa6';

// const datePickerTrigger = (
//   <button
//     id='date'
//     className={'w-[1.40rem] group-hover:w-14 group-hover:m-2 bg-transparent transition-all duration-300 border-none outline-none flex items-center justify-between text-black dark:text-white'}
//   >
//     <CustomToolTip tooltip={'Date Filter'}>
//       <span>
//         <FaRegCalendarAlt />
//       </span>
//     </CustomToolTip>
//   </button>
// );

// export default function ListAdmins() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);
//   const [date, setDate] = useState({
//     from: searchParams.get('startDate'),
//     to: searchParams.get('endDate')
//   });

//   const onDateChange = (newDate) => {
//     if (!newDate) {
//       setDate({
//         from: undefined,
//         to: undefined
//       });
//       handleQueryParamRemove(['startDate', 'endDate'], location, navigate);
//     } else if (newDate.from && !newDate.to) {
//       setDate({
//         from: newDate.from,
//         to: newDate.from
//       });
//       handleQueryParamChange(['startDate', 'endDate'], [newDate.from.toISOString(), newDate.from.toISOString()], location, navigate);
//     } else if (!newDate.from && newDate.to) {
//       setDate({
//         from: newDate.to,
//         to: newDate.to
//       });
//       handleQueryParamChange(['startDate', 'endDate'], [newDate.to.toISOString(), newDate.to.toISOString()], location, navigate);
//     } else {
//       setDate(newDate);
//       handleQueryParamChange(['startDate', 'endDate'], [newDate.from.toISOString(), newDate.to.toISOString()], location, navigate);
//     }
//   };
//   const clearDate = () => {
//     setDate({
//       from: undefined,
//       to: undefined
//     });
//     handleQueryParamRemove(['startDate', 'endDate'], location, navigate);
//   };
//   const [searchValue, setSearchValue] = useState(searchParams.get('search') ?? '');

//   const onSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchValue(value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchValue) {
//       handleQueryParamChange('search', searchValue, location, navigate);
//     } else {
//       handleQueryParamRemove('search', location, navigate);
//     }
//   };

//   const handleLocationSelect = (address, lat, lng) => {
//     if (!address && !lat && !lng) {
//       handleQueryParamRemove(['lat', 'lng'], location, navigate);
//     } else {
//       handleQueryParamChange(['lat', 'lng'], [lat, lng], location, navigate);
//     }
//   };

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     setSearchValue(searchParams.get('search') ?? '');
//   }, [location]);

//   const [openMap, setOpenMap] = useState(false);

//   return (
//     <div className='border-gray-300 dark:border-gray-700 rounded-2xl border overflow-hidden mx-2 sm:mx-10'>
//       <div className='flex gap-4 justify-between flex-col sm:flex-row flex-wrap items-center border-gray-300 dark:border-gray-700 px-1 py-4 sm:px-4 w-auto'>
//         <div className='flex gap-1 sm:gap-2 justify-center md:justify-between items-center '>
//           <EventChipFilter />
//         </div>

//         <div className='flex items-center justify-between gap-2 self-end'>
//           <CustomDialogBox
//             open={openMap}
//             onOpenChange={() => setOpenMap((prev) => !prev)}
//             trigger={
//               <span className='mr-3 cursor-pointer'>
//                 <FaLocationDot className='text-red-500 text-lg' />
//               </span>
//             }
//             title={'Choose Address'}
//             description={"Choose address do you want to search for events. Click on 'Done' when you're done."}
//           >
//             <CustomLocationPicker onSelect={handleLocationSelect} setOpenMap={setOpenMap} />
//           </CustomDialogBox>
//           <CustomDateRangePicker trigger={datePickerTrigger} date={date} onDateChange={onDateChange} clearDate={clearDate} />
//           <div className='relative dark:text-white flex gap-2 group outline-0'>
//             <form onSubmit={handleSearchSubmit}>
//               <CustomInput
//                 type='text'
//                 placeholder='Search'
//                 className='border border-gray-300 rounded px-2 py-0 text-base opacity-0 group-hover:opacity-100 max-w-4 group-hover:max-w-32 sm:group-hover:max-w-52 focus:max-w-32 sm:focus:max-w-52 focus:opacity-100 transition-all duration-300 pr-9'
//                 value={searchValue}
//                 onChange={onSearchChange}
//               />
//               <div className='absolute top-1/2 group-hover:top-[1/2] right-2 -translate-y-1/2 cursor-pointer text-black dark:text-white font-light text-2xl' onClick={handleSearchSubmit}>
//                 <SearchOutlined />
//               </div>
//             </form>
//           </div>

//           <CustomDialogBox
//             trigger={
//               <span>
//                 <CustomButton btnText='Create Event' className='w-24 sm:w-32' />
//               </span>
//             }
//             title={'Create Event'}
//             description={"Add event details here. Click on create when you're done."}
//             onInteractOutside={(e) => e.preventDefault()}
//           >
//             <CreateEvent />
//           </CustomDialogBox>
//         </div>
//       </div>
//     </div>
//   );
// }
