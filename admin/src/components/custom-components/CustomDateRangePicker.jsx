// 'use client';
// import { CalendarIcon } from '@radix-ui/react-icons';
// import { format } from 'date-fns';
// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { IoMdClose } from 'react-icons/io';
// import CustomToolTip from './CustomToolTip';

// export default function CustomDateRangePicker({ className, trigger, date, onDateChange, clearDate }) {
//   return (
//     <div className={cn('grid gap-2 relative group hover:bg-gray-300 hover:dark:bg-slate-700 rounded-md', className)}>
//       <Popover>
//         <PopoverTrigger asChild>
//           {trigger ?? (
//             <Button
//               id='date'
//               variant={'outline'}
//               className={cn('w-[250px] justify-start text-left font-normal text-black dark:text-white bg-white dark:bg-slate-900 transition-none border-none', !date && 'text-muted-foreground')}
//             >
//               <CalendarIcon className='mr-2 h-4 w-4' />
//               {date?.from ? (
//                 date.to ? (
//                   <>
//                     {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
//                   </>
//                 ) : (
//                   format(date.from, 'LLL dd, y')
//                 )
//               ) : (
//                 <span>Pick a date</span>
//               )}
//             </Button>
//           )}
//         </PopoverTrigger>
//         <PopoverContent className='w-auto p-0' align='start'>
//           <Calendar initialFocus mode='range' defaultMonth={date?.from} selected={date} onSelect={onDateChange} numberOfMonths={2} />
//         </PopoverContent>
//       </Popover>
//       <CustomToolTip tooltip='Clear Date filter'>
//         <div onClick={clearDate} className='absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-black dark:text-white'>
//           <IoMdClose />
//         </div>
//       </CustomToolTip>
//     </div>
//   );
// }
