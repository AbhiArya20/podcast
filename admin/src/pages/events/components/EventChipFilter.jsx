// import CustomChip from '@/components/custom-components/CustomChip';
// import { FaPenToSquare } from 'react-icons/fa6';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import { useLocation, useNavigate } from 'react-router-dom/dist';
// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';
// import { capitalizeWords, handleQueryParamChange, handleQueryParamRemove } from '@/lib/utils';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import { MdOutlinePublishedWithChanges } from 'react-icons/md';

// const EventChipFilter = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);

//   const eventTypeFromQuery = searchParams.get('eventType');
//   const statusFromQuery = searchParams.get('status');
//   const targetAudienceFromQuery = searchParams.get('targetAudience');

//   const [eventType, setEventType] = useState(eventTypeFromQuery);
//   const [status, setStatus] = useState(statusFromQuery);
//   const [targetAudience, setTargetAudience] = useState(targetAudienceFromQuery);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const eventTypeFromQuery = searchParams.get('eventType');
//     const statusFromQuery = searchParams.get('status');
//     const targetAudienceFromQuery = searchParams.get('targetAudience');

//     setEventType(eventTypeFromQuery);
//     setStatus(statusFromQuery);
//     setTargetAudience(targetAudienceFromQuery);
//   }, [location]);

//   const handleEventTypeFilter = () => {
//     const returnedValue = eventType === null ? 'Online' : eventType === 'Online' ? 'Offline' : null;
//     if (returnedValue !== null) {
//       handleQueryParamChange('eventType', returnedValue, location, navigate);
//     } else {
//       handleQueryParamRemove('eventType', location, navigate);
//     }
//     setEventType(returnedValue);
//   };

//   const handleStatusFilter = () => {
//     const returnedValue = status === null ? 'unpublished' : status === 'unpublished' ? 'published' : status === 'published' ? 'cancelled' : status === 'cancelled' ? 'completed' : null;
//     if (returnedValue !== null) {
//       handleQueryParamChange('status', returnedValue, location, navigate);
//     } else {
//       handleQueryParamRemove('status', location, navigate);
//     }
//     setStatus(returnedValue);
//   };

//   const handleTargetAudienceFilter = () => {
//     const returnedValue = targetAudience === null ? 'Jobseeker' : targetAudience === 'Jobseeker' ? 'Employer' : targetAudience === 'Employer' ? 'Both' : null;
//     if (returnedValue !== null) {
//       handleQueryParamChange('targetAudience', returnedValue, location, navigate);
//     } else {
//       handleQueryParamRemove('targetAudience', location, navigate);
//     }
//     setTargetAudience(returnedValue);
//   };

//   const chips = [
//     {
//       id: nanoid(),
//       label: eventType === null ? 'Type' : eventType,
//       color: eventType === null ? 'gray' : eventType === 'Online' ? 'success' : 'primary',
//       avatar: <FaPenToSquare className='text-white text-base' />,
//       value: eventType,
//       handleClick: handleEventTypeFilter
//     },
//     {
//       id: nanoid(),
//       label: status == null ? 'Status' : capitalizeWords(status),
//       color: status == 'unpublished' || status === null ? 'gray' : status == 'published' ? 'success' : status == 'cancelled' ? 'error' : 'primary',
//       avatar: <MdOutlinePublishedWithChanges className='text-white text-base' />,
//       value: status,
//       handleClick: handleStatusFilter
//     },
//     {
//       id: nanoid(),
//       label: targetAudience == null ? 'Target' : targetAudience,
//       color: targetAudience === null ? 'gray' : targetAudience == 'Jobseeker' ? 'secondary' : targetAudience == 'Employer' ? 'warning' : 'primary',
//       avatar: <Diversity3Icon className='text-white text-base' />,
//       value: targetAudience,
//       handleClick: handleTargetAudienceFilter
//     }
//   ];
//   return (
//     <>
//       {chips.map((chip) => (
//         <CustomToolTip key={chip.id} tooltip={chip.value ?? chip.label}>
//           <div className={`select-none `} onClick={chip.handleClick}>
//             <CustomChip avatar={chip.avatar} label={chip.label} color={chip.color} subColor={''} />
//           </div>
//         </CustomToolTip>
//       ))}
//     </>
//   );
// };

// export default EventChipFilter;
