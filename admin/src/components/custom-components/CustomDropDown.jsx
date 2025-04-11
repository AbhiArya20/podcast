// import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Label } from '../ui/label';

// export default function CustomDropDown({ placeholder, onChange, columns, defaultValue, className, label }) {
//   return (
//     <div>
//       {label && (
//         <Label htmlFor={label} className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
//           {label}
//         </Label>
//       )}
//       <Select onValueChange={onChange} defaultValue={defaultValue} id={label}>
//         <SelectTrigger className={`w-[180px] text-black dark:text-white select-none border border-gray-300 dark:border-slate-700 rounded-md ${className}`}>
//           <SelectValue placeholder={placeholder} />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup className='bg-white dark:bg-slate-900'>
//             {columns.map((col) => (
//               <SelectItem key={col.value} value={col.value} className='bg-white dark:bg-slate-900'>
//                 {col.name}
//               </SelectItem>
//             ))}
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// }
