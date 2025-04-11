// import { getEvent } from '@/http/event-service';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { motion } from 'framer-motion';
// import CustomImg from '@/components/custom-components/CustomImg';
// import StatusDisplay from './components/EventStatus';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import { FaCalendarPlus, FaLocationDot } from 'react-icons/fa6';
// import { FaCalendarTimes } from 'react-icons/fa';
// import { IconButton } from '@mui/material';
// import { IoCall } from 'react-icons/io5';
// import PriceDisplay from './components/PriceDisplay';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import ContactCard from './components/ContactCard';
// import { BroadcastOnHomeTwoTone, Edit } from '@mui/icons-material';

// import UpdateEvent from './components/UpdateEvent';
// import { DeleteIcon, EditIcon } from 'lucide-react';
// import { MdDelete, MdEdit } from 'react-icons/md';

// export default function Event() {
//   const cardVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { eventId } = useParams();

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         const response = await getEvent(eventId);
//         setEvent(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchEvent();
//   }, [eventId]);

//   const timeFormate = (date) => {
//     const eventDate = new Date(date);
//     return eventDate.toLocaleString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true
//     });
//   };

//   const handleAnchorClick = (e) => {
//     e.stopPropagation();
//   };

//   const redirectToGoogleMaps = (e) => {
//     e.stopPropagation();
//     const googleMapsUrl = `https://www.google.com/maps?q=${event.lat},${event.lng}`;
//     window.open(googleMapsUrl, '_blank');
//   };

//   const onUpdate = (event) => {
//     setEvent(event);
//   };

//   return (
//     <PrivatePageWrapper>
//       <div className='flex w-full h-full p-4'>
//         {loading ? (
//           <div className='flex justify-center items-center w-full h-full'>
//             <div className='flex justify-center items-center h-96 relative'>
//               <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-200'></div>
//               <div className='text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-blue-400'>
//                 <span>Edudoor</span>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <motion.div variants={cardVariants} initial='hidden' animate='visible' transition={{ duration: 1 }} className='flex w-full h-full'>
//             <div>
//               <div className='flex flex-col md:flex-row overflow-hidden w-full h-fit'>
//                 <div className='flex overflow-hidden rounded-2xl relative md:w-7/12 '>
//                   <CustomImg src={event.bannerImage} alt={event.eventName} className='w-full md:h-full object-cover hover:scale-105 transition' blurHash={event.bannerImageBlurHash} />
//                   <div className='flex items-center absolute right-2 top-2'>
//                     <a target='_blank' rel='noreferrer' href={event.websiteUrl} onClick={handleAnchorClick} className='ml-2 bg-gray-200 p-2 rounded-full'>
//                       <CustomToolTip tooltip={'Visit Website'}>
//                         <OpenInNewIcon className='text-gray-700' />
//                       </CustomToolTip>
//                     </a>
//                   </div>
//                 </div>

//                 <div className='flex flex-col p-4 w-full md:w-5/12'>
//                   <div className='flex justify-between flex-wrap gap-3 items-start mb-4'>
//                     <div>
//                       <h2 className='text-xl font-bold text-gray-900 dark:text-white'>{event.eventName}</h2>
//                       <p className='text-sm text-gray-400'>{event.tagLine}</p>
//                       <span className='text-sm font-bold text-violet-500'>
//                         {event.status === 'completed' ? `${event.attendedParticipants}/${event.participants} attended` : `${event.participants ?? 0} participants`}
//                       </span>
//                     </div>

//                     {event.status === 'unpublished' ||
//                       (event.status === 'published' && (
//                         <div className='flex gap-3 flex-row items-center justify-end'>
//                           <div className='flex items-center'>
//                             <CustomDialogBox
//                               trigger={
//                                 <IconButton
//                                   color='error'
//                                   sx={{
//                                     bgcolor: 'secondary.main',
//                                     opacity: 0.8,
//                                     '&:hover': {
//                                       backgroundColor: 'secondary.dark'
//                                     }
//                                   }}
//                                 >
//                                   <Edit className='text-white' />
//                                 </IconButton>
//                               }
//                               title={'Update Event'}
//                               description={"Update event details here. Click on create when you're done."}
//                             >
//                               <UpdateEvent event={event} onUpdate={onUpdate} />
//                             </CustomDialogBox>
//                           </div>
//                           <div className='flex items-center'>
//                             <CustomToolTip tooltip={'Go Live'}>
//                               <button className='bg-red-500 text-white font-bold py-2 px-4 rounded-full flex items-center transition-transform duration-300 hover:bg-red-600 active:scale-95 gap-2 text-xs sm:text-base'>
//                                 <BroadcastOnHomeTwoTone />
//                                 <span className='hidden sm:inline-block'>Go Live</span>
//                               </button>
//                             </CustomToolTip>
//                           </div>
//                         </div>
//                       ))}
//                   </div>

//                   <div className='flex flex-col md:flex-row 2xl:flex-col flex-wrap gap-2 justify-between'>
//                     <div className='mb-4 md:mb-0'>
//                       <PriceDisplay originalPrice={event.eventAmount} discount={event.discount} discountEndDate={event.discountEndDate} />
//                       <div className='flex gap-2 mt-2'>
//                         <div className='bg-gray-200 text-gray-800 px-2 py-1 rounded'>{event.eventType}</div>
//                         {event.targetAudience !== 'Both' && (
//                           <div className={`${event.targetAudience === 'Jobseeker' ? 'bg-violet-200 text-violet-800' : 'bg-amber-200 text-amber-800'} px-2 py-1 rounded`}>{event.targetAudience}</div>
//                         )}
//                       </div>
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                       <div className='flex items-center text-gray-400 text-sm'>
//                         <FaCalendarPlus className='mr-2 text-blue-500' />
//                         <span>Starts: {timeFormate(event.startDate)}</span>
//                       </div>
//                       <div className='flex items-center text-gray-400 text-sm'>
//                         <FaCalendarTimes className='mr-2 text-red-500' />
//                         <span>Ends: {timeFormate(event.endDate)}</span>
//                       </div>
//                       <div className='flex items-center text-gray-400 text-sm'>
//                         <FaLocationDot className='mr-2 text-red-500' />
//                         <span>{event.address}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='flex justify-between flex-wrap items-center mt-4'>
//                     <div className='flex items-center'>
//                       <IconButton onClick={redirectToGoogleMaps}>
//                         <FaLocationDot className='text-red-500' />
//                       </IconButton>

//                       <IconButton onClick={handleAnchorClick}>
//                         <CustomDialogBox
//                           trigger={
//                             <span>
//                               <IoCall className='text-blue-500' />
//                             </span>
//                           }
//                           title={'Contact'}
//                           description={'You can contact the below admin for more details about the event.'}
//                         >
//                           <ContactCard event={event} onUpdate={onUpdate} />
//                         </CustomDialogBox>
//                       </IconButton>
//                     </div>

//                     <StatusDisplay event={event} onUpdate={onUpdate} />
//                   </div>
//                 </div>
//               </div>
//               <div className='flex justify-start'>
//                 <ExpertList experts={event.experts} />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </PrivatePageWrapper>
//   );
// }

// const ExpertCard = ({ expert }) => {
//   return (
//     <div className='relative bg-white dark:bg-slate-900 shadow-2xl rounded-2xl overflow-hidden max-w-80 sm:min-w-80 w-full p-4 transform transition-transform hover:scale-95'>
//       <div className='flex'>
//         <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start flex-wrap gap-4 w-full'>
//           <CustomImg src={expert.expertImage} alt={expert.expertName} className='w-24 h-24 object-cover rounded-full' blurHash={expert.expertImageBlurHash} />
//           <div className='text-sm flex flex-col item-start justify-between h-full'>
//             <div className='pt-3 leading-4'>
//               <p className='text-gray-700'>
//                 <span className='text-gray-900 dark:text-white font-bold uppercase'>{expert.expertName}</span>
//               </p>
//               <p className='text-gray-700'>
//                 <span className='text-gray-400 capitalize'>{expert.expertDesignation}</span>
//               </p>
//             </div>
//             <div className='flex gap-4 justify-start items-center self-end'>
//               <CustomImg src={expert.expertOrganizationLogo} alt={expert.expertOrganization} className='h-8 object-cover rounded-md' blurHash={expert.expertOrganizationLogoBlurHash} />
//               <span className='text-gray-500 font-bold uppercase'>{expert.expertOrganization}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='absolute top-2 right-2'>
//         <IconButton aria-label='edit' size='small'>
//           <MdEdit />
//         </IconButton>
//         <IconButton aria-label='delete' size='small'>
//           <MdDelete />
//         </IconButton>
//       </div>
//     </div>
//   );
// };

// const AddNewExpertCard = () => {
//   return (
//     <div className='bg-gray-100 shadow-md rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 m-3 flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg cursor-pointer'>
//       <div className='text-center'>
//         <svg className='w-16 h-16 text-gray-500 mb-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//           <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4'></path>
//         </svg>
//         <h3 className='text-lg font-bold text-gray-600'>Add New Expert</h3>
//       </div>
//     </div>
//   );
// };

// const ExpertList = ({ experts }) => {
//   return (
//     <div className='mx-auto sm:px-4 py-8'>
//       <h1 className='text-xl font-bold leading-none tracking-tight text-gray-800 md:text-3xl lg:text-3xl dark:text-white mb-4'>Our Experts</h1>
//       <div className='flex flex-wrap justify-center gap-3'>
//         {experts.map((expert) => (
//           <ExpertCard key={expert._id} expert={expert} />
//         ))}
//         <AddNewExpertCard />
//       </div>
//     </div>
//   );
// };
