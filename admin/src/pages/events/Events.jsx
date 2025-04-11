// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import { useEffect, useState } from 'react';

// import CardEvents from './components/CardEvents';
// import { getEventCount } from '@/http/event-service';

// export default function Events() {
//   const label = 'Events';

//   return (
//     <PrivatePageWrapper>
//       <div className='flex justify-between items-center flex-wrap gap-4 p-4'>
//         <h1 className='text-xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-3xl dark:text-white'>{label}</h1>
//         <EventCount />
//       </div>
//       <div className='relative flex flex-col lg:flex-row bg-white-200 flex-grow overflow-hidden'>
//         <div className={`w-full`}>
//           <CardEvents />
//         </div>
//       </div>
//     </PrivatePageWrapper>
//   );
// }

// const EventCount = () => {
//   // get event counts
//   const [eventCounts, setEventsCounts] = useState(0);
//   const fetchEventsCounts = async () => {
//     try {
//       const response = await getEventCount('');
//       setEventsCounts(response.data.eventCount);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchEventsCounts();
//   }, []);
//   return (
//     <div className='flex flex-wrap items-center mr-6'>
//       {eventCounts > 0 && <h2 className='text-xs text-center font-bold leading-none tracking-tight text-blue-700 dark:text-blue-400'>Total Events = {eventCounts}</h2>}
//     </div>
//   );
// };
