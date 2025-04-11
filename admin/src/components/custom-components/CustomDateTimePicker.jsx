// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
// import { StaticDateTimePicker } from '@mui/x-date-pickers';

// export default function CustomDateTimePicker({ label, type = 'popover', ...props }) {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['MobileDateTimePicker']}>
//         <DemoItem label={label} className='font-bold'>
//           {type === 'popover' ? (
//             <MobileDateTimePicker defaultValue={dayjs()} disableHighlightToday={false} disablePast {...props} />
//           ) : (
//             <StaticDateTimePicker defaultValue={dayjs()} disableHighlightToday={false} disablePast {...props} />
//           )}
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
