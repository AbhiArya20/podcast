// import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const Chart = ({ aspect, title, data, loading }) => {
//   return (
//     <div className='chart dark:bg-slate-900 lg:w-8/12 p-4  m-2 shadow-md text-gray-500 rounded-md'>
//       <div className='chartTitle mb-5'>{title}</div>
//       {loading ? (
//         <div className='h-full w-full flex items-center justify-center'>Loading...</div>
//       ) : (
//         <ResponsiveContainer width='100%' aspect={aspect}>
//           <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//             <defs>
//               <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
//                 <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
//                 <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
//               </linearGradient>
//             </defs>
//             <XAxis dataKey='month' stroke='gray' />

//             <CartesianGrid strokeDasharray='3 3' className='chartGrid stroke-238' />
//             <Tooltip />
//             <Area type='monotone' dataKey='amount' stroke='#8884d8' fillOpacity={1} fill='url(#total)' />
//           </AreaChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   );
// };

// export default Chart;
