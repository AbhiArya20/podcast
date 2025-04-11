// import { Button } from '@/components/ui/button';
// import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// export default function CustomMultiSelectDropDown({ trigger, triggerValue, label, columns, onChanges }) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         {trigger ?? (
//           <Button variant='outline' className='bg-white dark:bg-slate-900 transition-none border border-gray-300 dark:border-slate-700 rounded-md'>
//             {triggerValue}
//           </Button>
//         )}
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className='min-w-56 max-h-[50vh] overflow-auto'>
//         <DropdownMenuLabel className='bg-white z-10 mt-0'>{label}</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {columns.map((col) => (
//           col.name && <DropdownMenuCheckboxItem key={col.name} checked={!col.omit} onCheckedChange={(value) => onChanges(col.name, value)}>
//             {col.name}
//           </DropdownMenuCheckboxItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
