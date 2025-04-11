// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// import CustomToolTip from './CustomToolTip';

// const Widget = ({ widgetValues }) => {
//   const [count, setCount] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [percentage, setPercentage] = useState(0);

//   const title = widgetValues.title;
//   const linkTo = widgetValues.linkTo;
//   const linkTag = widgetValues.linkTag;
//   const icon = widgetValues.icon;
//   const prefix = widgetValues.prefix;
//   const suffix = widgetValues.suffix;
//   const callBack = widgetValues.callBack;

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const { count, percent } = await callBack();
//       setPercentage(percent);
//       setCount(count);
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className='widget flex justify-between p-3 shadow-md rounded-lg bg-white dark:bg-slate-900'>
//       {loading ? (
//         <div className='h-20 w-full flex items-center justify-center'>Loading...</div>
//       ) : (
//         <>
//           <div className='widgetLeft flex flex-col justify-between space-y-2'>
//             <span className='widgetTitle font-bold text-base text-gray-400'>{title}</span>
//             {percentage && (
//               <span className='widgetCounter text-2xl font-light text-black dark:text-gray-300'>
//                 {prefix}
//                 {count}
//                 {suffix}
//               </span>
//             )}
//             <Link to={linkTo}>
//               <span className='widgetLink inline-block text-sm border-b border-gray-300 text-black dark:text-gray-300'>{linkTag}</span>
//             </Link>
//           </div>
//           {percentage ? (
//             <div className='widgetRight flex flex-col justify-between '>
//               <CustomToolTip tooltip='From last month'>
//                 <div className={`widgetPercentage cursor-pointer positive flex items-center ml-auto text-base ${percentage < 0 ? 'text-red-500' : 'text-green-500'}`}>
//                   {percentage.toFixed(2)}%{percentage < 0 ? <KeyboardArrowUpIcon style={{ transform: 'rotate(180deg)' }} /> : <KeyboardArrowUpIcon />}
//                 </div>
//               </CustomToolTip>
//               {icon}
//             </div>
//           ) : (
//             <></>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Widget;
