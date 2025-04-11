// import { getDateFormate } from '@/lib/utils';
// import { useEffect, useState } from 'react';

// const PriceDisplay = ({ originalPrice, discount, discountEndDate }) => {
//   const [discountEndDateText, setDiscountEndDateText] = useState('');
//   const [isDiscountEnd, setIsDiscountEnd] = useState(false);
//   const price = (originalPrice * (100 - discount)) / 100;
//   const currentPrice = price % 1 === 0 ? price : price.toFixed(2);
//   const saved = originalPrice - currentPrice;
//   const savings = saved % 1 == 0 ? saved : saved.toFixed(2);

//   // Function to update the countdown timer
//   const updateCountdown = () => {
//     const discountEnd = new Date(discountEndDate).getTime();
//     const now = new Date().getTime();
//     const distance = discountEnd - now;
//     const value = getDateFormate(distance);
//     if (value === null) {
//       setDiscountEndDateText(value);
//       setIsDiscountEnd(true);
//     } else {
//       setDiscountEndDateText(value);
//     }
//   };

//   useEffect(() => {
//     if (!discount || !discountEndDate) return;

//     const interval = setInterval(() => {
//       updateCountdown();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className='flex flex-col items-start justify-start my-2'>
//       <div className='flex items-baseline space-x-2'>
//         <div className='flex items-center gap-2'>
//           <span className='text-xl font-bold text-black dark:text-white leading-3'>₹{currentPrice}</span>
//           {discount ? (
//             <>
//               <span className='text-xs text-gray-500 line-through'>₹{originalPrice}</span>
//               <div className={`px-2 py-1 rounded-full flex items-center justify-center bg-green-500 bg-opacity-30 text-green-500 font-bold text-xs`}>
//                 <span className='text-opacity-90'>{discount}% Off</span>
//               </div>
//             </>
//           ) : (
//             <></>
//           )}
//         </div>
//       </div>
//       {discount ? (
//         <div className='text-green-600 text-sm font-semibold flex flex-col'>
//           <span>Discount ₹{savings}</span>
//           {isDiscountEnd ? (
//             <span className='font-bold text-red-500 text-xs'>
//               Ended on{' '}
//               {new Date(discountEndDate).toLocaleString('en-US', {
//                 month: 'short',
//                 day: 'numeric',
//                 year: 'numeric',
//                 hour: 'numeric',
//                 minute: 'numeric',
//                 hour12: true
//               })}
//             </span>
//           ) : (
//             <span className='font-bold text-red-500 text-xs'>Discount End in {discountEndDateText}</span>
//           )}
//         </div>
//       ) : (
//         <span className='font-bold text-red-500 text-xs mt-2'>No Discount</span>
//       )}
//     </div>
//   );
// };

// export default PriceDisplay;
