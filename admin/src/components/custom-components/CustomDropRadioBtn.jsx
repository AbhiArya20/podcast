// import { Button } from '@/components/ui/button';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// export default function CustomDropRadioBtn({ trigger, columns, label, value, onChange, triggerValue }) {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>{trigger ?? <Button variant='outline'>{triggerValue}</Button>}</DropdownMenuTrigger>
//       <DropdownMenuContent className='w-56'>
//         <DropdownMenuLabel>{label}</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
//           {columns.map((col) => (
//             <DropdownMenuRadioItem key={col.value} value={col.value}>{col.name}</DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
