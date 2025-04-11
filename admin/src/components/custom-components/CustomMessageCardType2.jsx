// export const CustomMessageCardType2 = ({ type = 'info', message, description }) => {
//   const getTypeStyles = (type) => {
//     switch (type) {
//       case 'success':
//         return {
//           bgColor: 'bg-green-100',
//           borderColor: 'border-green-500',
//           textColor: 'text-green-700',
//           icon: (
//             <svg className='w-16 h-16 text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
//             </svg>
//           )
//         };
//       case 'error':
//         return {
//           bgColor: 'bg-red-100',
//           borderColor: 'border-red-500',
//           textColor: 'text-red-700',
//           icon: (
//             <svg className='w-16 h-16 text-red-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
//             </svg>
//           )
//         };
//       case 'warning':
//         return {
//           bgColor: 'bg-yellow-100',
//           borderColor: 'border-yellow-500',
//           textColor: 'text-yellow-700',
//           icon: (
//             <svg className='w-16 h-16 text-yellow-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4m0 4h.01M12 16h-.01m-1.732-2.732a4 4 0 105.464 0L12 3.293l-1.732 9.975z' />
//             </svg>
//           )
//         };
//       case 'info':
//         return {
//           bgColor: 'bg-blue-100',
//           borderColor: 'border-blue-500',
//           textColor: 'text-blue-700',
//           icon: (
//             <svg className='w-16 h-16 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M13 16h-1v-4h-1m0-4h.01M12 8v4m0 4v.01M20.84 4.61A9 9 0 1012 21a9 9 0 008.84-7.61M12 3v1m0 16v1m8.31-7H21m-16 0H3m8.31-7H12'
//               />
//             </svg>
//           )
//         };
//       default:
//         return {
//           bgColor: 'bg-gray-100',
//           borderColor: 'border-gray-500',
//           textColor: 'text-gray-700',
//           icon: (
//             <svg className='w-16 h-16 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M12 8v4m0 4h.01M12 16h-.01M3.055 11A7.972 7.972 0 0111 3.055M20.945 13A7.972 7.972 0 0113 20.945M3.055 13A7.972 7.972 0 0113 20.945M11 3.055A7.972 7.972 0 0120.945 13M11 20.945A7.972 7.972 0 013.055 13'
//               />
//             </svg>
//           )
//         };
//     }
//   };

//   const { bgColor, borderColor, textColor, icon } = getTypeStyles(type);

//   return (
//     <div className={`relative max-w-md w-full mx-auto ${bgColor} ${borderColor} border-l-4 p-4 rounded-md shadow-md mt-10`}>
//       <div className='absolute inset-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'></div>
//       <div className='flex items-center p-6'>
//         <div className='mr-4'>{icon}</div>
//         <div>
//           {message && <h2 className={`text-2xl font-semibold ${textColor}`}>{message}</h2>}
//           {description && <p className='text-gray-600'>{description}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };
