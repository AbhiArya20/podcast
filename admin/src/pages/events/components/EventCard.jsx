// import CustomImg from '@/components/custom-components/CustomImg';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import { FaCalendarPlus, FaLocationDot } from 'react-icons/fa6';
// import { FaCalendarTimes } from 'react-icons/fa';
// import { IconButton } from '@mui/material';
// import { IoCall } from 'react-icons/io5';
// import { useNavigate } from 'react-router';
// import { motion } from 'framer-motion';
// import PriceDisplay from './PriceDisplay';
// import StatusDisplay from './EventStatus';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import ContactCard from './ContactCard';

// const EventCard = ({ event, reference, onUpdate }) => {
//   const cardVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   const navigate = useNavigate();
//   const handleAnchorClick = (e) => {
//     e.stopPropagation();
//   };

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

//   const handleCardClick = (e) => {
//     e.stopPropagation();
//     navigate(`/events/${event._id}`);
//   };

//   const redirectToGoogleMaps = (e) => {
//     e.stopPropagation();
//     const googleMapsUrl = `https://www.google.com/maps?q=${event.lat},${event.lng}`;
//     window.open(googleMapsUrl, '_blank');
//   };

//   return (
//     <motion.div variants={cardVariants} initial='hidden' animate='visible' transition={{ duration: 1 }} className='flex'>
//       <div
//         className='flex justify-center items-center max-w-80 sm:min-w-80 cursor-pointer shadow-2xl rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out group h-full w-full'
//         onClick={handleCardClick}
//         ref={reference}
//       >
//         <div className='bg-white dark:bg-slate-900 rounded-2xl flex flex-col justify-between h-full w-full'>
//           <div>
//             <div className='relative overflow-hidden rounded-2xl'>
//               <CustomImg
//                 src={event.bannerImage}
//                 alt={event.eventName}
//                 className='w-full h-40 aspect-video object-cover  group-hover:scale-110 transition-all duration-300 ease-in-out'
//                 blurHash={event.bannerImageBlurHash}
//               />
//               <div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm font-bold rounded'>{event.eventType}</div>
//               {event.targetAudience != 'Both' && (
//                 <div
//                   className={`absolute bottom-2 right-2 ${event.targetAudience == 'Jobseeker' ? 'bg-violet-400 text-violet-800' : 'bg-amber-400 text-amber-800'} opacity-80 px-2 py-1 text-sm font-bold rounded`}
//                 >
//                   {event.targetAudience}
//                 </div>
//               )}
//               {
//                 <a
//                   target='_blank'
//                   rel='noreferrer'
//                   href={event.websiteUrl}
//                   onClick={handleAnchorClick}
//                   className='absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 text-sm font-bold rounded'
//                 >
//                   <CustomToolTip tooltip={'Visit Website'}>
//                     <OpenInNewIcon />
//                   </CustomToolTip>
//                 </a>
//               }
//             </div>
//             <div className='flex flex-col px-4 pt-4'>
//               <div className='flex justify-between items-center'>
//                 <h2 className='text-base text-black dark:text-white font-bold'>{event.eventName}</h2>
//                 <span className='text-xs font-bold text-violet-500'>
//                   {event.status === 'completed' ? `${event.attendedParticipants}/${event.participants} attended` : `${event.participants ?? 0} participants`}
//                 </span>
//               </div>
//               <p className='text-xs text-gray-400'>{event.tagLine}</p>
//             </div>
//           </div>

//           <div className='flex flex-col px-4'>
//             <div className='my-3 flex flex-col gap-2'>
//               <div className='flex items-center text-gray-600 text-sm mt-2 dark:text-gray-400'>
//                 <span className='mr-1'>
//                   <FaCalendarPlus className='text-blue-500' />
//                 </span>
//                 <span>Starts: {timeFormate(event.startDate)}</span>
//               </div>
//               <div className='flex items-center text-gray-600 text-sm dark:text-gray-400'>
//                 <span className='mr-1'>
//                   <FaCalendarTimes className='text-red-500' />
//                 </span>
//                 <span>Ends: {timeFormate(event.startDate)}</span>
//               </div>
//               <div className='flex items-center text-gray-600 text-sm dark:text-gray-400'>
//                 <span className='mr-1'>
//                   <FaLocationDot className='text-red-500' />
//                 </span>
//                 <span>Location: {event.address}</span>
//               </div>
//             </div>
//           </div>

//           <div className='px-4 pb-4 rounded-xl overflow-hidden flex flex-col'>
//             <div className='flex flex-col grow'>
//               <div className='flex items-start justify-start relative '>
//                 <PriceDisplay originalPrice={event.eventAmount} discount={event.discount} discountEndDate={event.discountEndDate} />
//                 <div className='flex -space-x-2 my-3 absolute right-0 bottom-0'>
//                   {event.experts.slice(0, 3).map((expert, index) => (
//                     <img key={index} src={expert.expertImage} alt={`Expert ${index + 1}`} className='w-8 h-8 rounded-full border-2 border-white' />
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className='flex justify-between flex-none'>
//               <div>
//                 <IconButton onClick={redirectToGoogleMaps}>
//                   <FaLocationDot className='text-red-500' />
//                 </IconButton>

//                 <IconButton onClick={handleAnchorClick}>
//                   <CustomDialogBox
//                     trigger={
//                       <span>
//                         <IoCall className='text-blue-500' />
//                       </span>
//                     }
//                     title={'Contact'}
//                     description={'You can contact with the below admin for more details about the event.'}
//                   >
//                     <ContactCard event={event} onUpdate={onUpdate} />
//                   </CustomDialogBox>
//                 </IconButton>
//               </div>
//               <StatusDisplay event={event} onUpdate={onUpdate} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default EventCard;
