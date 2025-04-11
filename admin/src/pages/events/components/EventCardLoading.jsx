// import { Skeleton } from '@/components/ui/skeleton';
// import { motion } from 'framer-motion';
// import { nanoid } from 'nanoid';
// const EventCardLoading = () => {
//   const cardVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   return (
//     <motion.div variants={cardVariants} initial='hidden' animate='visible' transition={{ duration: 1 }} className='flex'>
//       <div className='flex justify-center items-center sm:min-x-80 max-w-80 cursor-pointer shadow-2xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out group h-full w-full'>
//         <div className='bg-white dark:bg-slate-900 overflow-hidden h-full w-full'>
//           <div className='relative overflow-hidden'>
//             <Skeleton className='w-full h-40 aspect-video rounded-xl' />
//           </div>
//           <div className='p-4'>
//             <div className='flex justify-between items-center gap-2'>
//               <Skeleton className='h-4 w-3/5' />
//               <Skeleton className='h-4 w-2/5' />
//             </div>
//             <Skeleton className='h-4 w-full mt-2' />
//             <div className='my-3 flex flex-col gap-2'>
//               <div className='flex items-center text-gray-600 text-sm mt-2 dark:text-gray-400'>
//                 <Skeleton className='h-4 w-4/5' />
//               </div>
//               <div className='flex items-center text-gray-600 text-sm dark:text-gray-400'>
//                 <Skeleton className='h-4 w-4/5' />
//               </div>
//               <div className='flex items-center text-gray-600 text-sm dark:text-gray-400'>
//                 <Skeleton className='h-4 w-4/5' />
//               </div>
//             </div>
//             <div>
//               <div>
//                 <div className='relative'>
//                   <Skeleton className='h-8 w-3/5' />
//                   <Skeleton className='h-8 w-3/5 mt-2' />
//                   <div className='flex -space-x-2 my-3 absolute right-0 bottom-0'>
//                     {[nanoid(), nanoid(), nanoid()].map((item) => (
//                       <Skeleton key={item} className='w-8 h-8 rounded-full' />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='flex justify-between items-center mt-2'>
//               <div className='flex gap-2'>
//                 <Skeleton className='w-10 h-10 rounded-full' />
//                 <Skeleton className='w-10 h-10 rounded-full' />
//               </div>

//               <div className={`px-2 py-1 rounded-full flex items-center justify-center font-bold`}>
//                 <Skeleton className='w-28 h-10 rounded-full' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default EventCardLoading;
