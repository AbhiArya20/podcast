// import { useLocation } from 'react-router';
// import { motion } from 'framer-motion';
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { errorHandler } from '@/lib/utils';
// import { getEvents } from '@/http/event-service';
// import { CustomMessageCardType1 } from '@/components/custom-components/CustomMessageCardType1';
// import { RiSignalWifiErrorFill } from 'react-icons/ri';
// import EventCardLoading from './EventCardLoading';
// import EventCard from './EventCard';
// import EventAction from './EventAction';
// import { debounce } from 'lodash';

// export default function CardEvents() {
//   const location = useLocation();
//   const [events, setEvents] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef();
//   const isFetching = useRef(false);

//   const cardContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1
//     }
//   };

//   const fetchEvents = async () => {
//     try {
//       const searchParams = new URLSearchParams(location.search);
//       console.log('Actual', searchParams.toString() + `&page=${page}`);
//       setLoading(true);
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       const response = await getEvents(searchParams.toString() + `&page=${page}`);
//       setEvents((prevEvents) => [...prevEvents, ...response.data.events]);
//       setHasMore(response.data.events.length > 0);
//       isFetching.current = false;
//     } catch (error) {
//       errorHandler(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const debouncedFetchEvents = useCallback(
//     debounce(() => {
//       fetchEvents();
//     }, 500),
//     [location, page]
//   );

//   // useEffect(() => {
//   //   setPage(1);
//   // }, [location]);

//   useEffect(() => {
//     debouncedFetchEvents();
//   }, [page]);

//   const lastEventRef = useCallback(
//     (node) => {
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting && hasMore && !loading && !isFetching.current) {
//           isFetching.current = true;
//           setPage((prevPage) => prevPage + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [hasMore, setPage, loading]
//   );

//   const onUpdate = (event) => {
//     const updatedEvents = events.map((e) => {
//       if (e._id === event._id) {
//         return event;
//       }
//       return e;
//     });
//     setEvents(updatedEvents);
//   };

//   return (
//     <div className='w-full'>
//       <EventAction />
//       <motion.div variants={cardContainerVariants} className='flex flex-wrap justify-center gap-8 mb-16 mt-8 px-8' initial='hidden' animate='visible'>
//         {events.length === 0 && !loading && !hasMore ? <NoEventsMessage /> : <EventsList events={events} onUpdate={onUpdate} lastEventRef={lastEventRef} hasMore={hasMore} />}
//       </motion.div>
//     </div>
//   );
// }

// const NoEventsMessage = () => (
//   <div className='flex justify-center items-center'>
//     <CustomMessageCardType1
//       message={'No Events'}
//       description={'There are currently no events scheduled. create a new event or check back later for updates.'}
//       icon={
//         <span className='text-2xl'>
//           <RiSignalWifiErrorFill />
//         </span>
//       }
//     />
//   </div>
// );

// const EventsList = ({ events, onUpdate, lastEventRef, hasMore }) => (
//   <>
//     {events.map((event, index) => (
//       <EventCard key={event._id} event={event} reference={index === events.length - 1 ? lastEventRef : null} onUpdate={onUpdate} />
//     ))}
//     {hasMore && (
//       <>
//         {Array.from({ length: 10 }).map((_, index) => (
//           <EventCardLoading key={index} />
//         ))}
//       </>
//     )}
//   </>
// );
