// import { errorHandler, getDateFormate } from '@/lib/utils';
// import { useEffect, useState } from 'react';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { updateEvent } from '@/http/event-service';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import CustomInput from '@/components/custom-components/CustomInput';
// import CustomButton from '@/components/custom-components/CustomButton';
// import toast from 'react-hot-toast';

// const StatusDisplay = ({ event, onUpdate }) => {
//   const status = event.status;
//   const eventType = event.eventType;
//   const startDate = event.startDate;
//   const [startDateText, setStartDateText] = useState('');
//   const [isStarted, setIsStarted] = useState(false);
//   const [openPopover, setOpenPopover] = useState(false);

//   const updateCountdown = () => {
//     const discountEnd = new Date(startDate).getTime();
//     const now = new Date().getTime();
//     const distance = discountEnd - now;
//     if (distance < 0) {
//       setIsStarted(true);
//       return;
//     }

//     const value = getDateFormate(distance);
//     if (value === null) {
//       setStartDateText(value);
//     } else {
//       setStartDateText(value);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateCountdown();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const statusStyles = {
//     unpublished: 'bg-gray-400 bg-opacity-30 text-gray-400',
//     published: 'bg-green-500 bg-opacity-30 text-green-500',
//     cancelled: 'bg-red-500 bg-opacity-30 text-red-500',
//     completed: 'bg-blue-500 bg-opacity-30 text-blue-500'
//   };

//   const statusText = {
//     unpublished: 'Unpublished',
//     published: 'Published',
//     cancelled: 'Cancelled',
//     completed: 'Completed'
//   };

//   const [loading, setLoading] = useState();
//   const updateStatus = async (status, remark) => {
//     try {
//       const formData = new FormData();
//       formData.append('status', status);
//       if (remark) {
//         formData.append('remark', remark);
//       }
//       setLoading(true);
//       const response = await updateEvent(event._id, formData);
//       toast.success('Event status updated successfully');
//       onUpdate(response.data);
//       setOpenPopover(false);
//     } catch (error) {
//       errorHandler(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const options = [
//     {
//       value: 'unpublished'
//     },
//     {
//       value: 'published'
//     },
//     {
//       value: 'cancelled'
//     },
//     {
//       value: 'completed'
//     }
//   ];

//   return (
//     <div className='flex gap-2 items-center cursor-pointer'>
//       {status === 'published' && (
//         <>
//           {isStarted ? (
//             <span className='text-[10px]  flex flex-col items-center bg-red-500 bg-opacity-30 text-red-500 px-2 py-1 rounded-full font-bold'>{eventType === 'Online' && <span>Live</span>}</span>
//           ) : (
//             <>
//               {startDateText && <span className='text-[10px]  flex flex-col items-center bg-green-500 bg-opacity-30 text-green-500 px-2 py-1 rounded-full'>{<span>{startDateText} left</span>}</span>}
//             </>
//           )}
//         </>
//       )}

//       {event.status === 'unpublished' || event.status === 'published' ? (
//         <Popover open={openPopover} onOpenChange={() => setOpenPopover(!openPopover)}>
//           <PopoverTrigger asChild>
//             <div className={`px-2 py-1 rounded-full flex items-center justify-center flex-col ${statusStyles[status]} font-bold`}>
//               <span className='text-opacity-90'>{statusText[status]}</span>
//             </div>
//           </PopoverTrigger>
//           <PopoverContent className='w-50 flex flex-col gap-3' side='left' align='center'>
//             {options.map((option) => (
//               <AlertDialog key={option.value} option={option} loading={loading} status={option.value} onAction={updateStatus} statusText={statusText} statusStyles={statusStyles} />
//             ))}
//           </PopoverContent>
//         </Popover>
//       ) : (
//         <div className={`px-2 py-1 rounded-full flex items-center justify-center flex-col ${statusStyles[status]} font-bold`}>
//           <span className='text-opacity-90'>{statusText[status]}</span>
//         </div>
//       )}
//     </div>
//   );
// };

// const AlertDialog = ({ option, onAction, status, loading, statusText, statusStyles }) => {
//   console.log(status);
//   const [remark, setRemark] = useState('');
//   const [handleOpen, setHandleOpen] = useState(false);
//   return (
//     <CustomDialogBox
//       open={handleOpen}
//       onOpenChange={() => {
//         setHandleOpen(!handleOpen);
//       }}
//       key={option.value}
//       title={'Are you absolutely sure?'}
//       description={`${option.value === 'unpublished' ? 'Unpublishing this event will make it unavailable to the public. Are you sure you want to continue?' : option.value === 'cancelled' ? 'You cannot make changes to event once it cancelled. Are you sure you want to continue?' : option.value === 'completed' ? 'You cannot make changes to event once it mark completed. Are you sure you want to continue?' : 'Publishing this event will make it available to the public. Are you sure you want to continue?'}`}
//       trigger={
//         <div className={`px-2 py-1 rounded-full flex items-center justify-center flex-col ${statusStyles[option.value]} font-bold cursor-pointer`}>
//           <span className='text-opacity-90'>{statusText[option.value]}</span>
//         </div>
//       }
//     >
//       <div className='flex flex-col'>
//         <CustomInput
//           label={'Remark'}
//           id={'remark'}
//           type={'text'}
//           placeholder={'Remark(Optional)'}
//           value={remark}
//           onChange={(e) => setRemark(e.target.value)}
//           maxLength={50}
//           currentLength={remark.length}
//         />
//         <div className='flex self-end gap-3'>
//           <CustomButton
//             btnText='Cancel'
//             handleSubmit={() => {
//               setHandleOpen((prev) => !prev);
//             }}
//             loading={false}
//             className={`mt-4 bg-gray-600 hover:bg-gray-700`}
//           />
//           <CustomButton
//             btnText='Continue'
//             handleSubmit={() => {
//               onAction(status, remark).then(() => setHandleOpen(false));
//             }}
//             loading={loading}
//             className={`mt-4`}
//           />
//         </div>
//       </div>
//     </CustomDialogBox>
//   );
// };

// export default StatusDisplay;
