// import { useContext, useState } from 'react';
// import { Switch } from '@/components/ui/switch';
// import { Label } from '@/components/ui/label';
// import { toast } from 'react-hot-toast';
// import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
// import { IconButton } from '@mui/material';
// import { nanoid } from 'nanoid';
// import { FaPenToSquare } from 'react-icons/fa6';
// import { Edit } from '@mui/icons-material';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import UpdateAdmin from '@/pages/admins/components/UpdateAdmin';
// import { AdminsContext } from '@/contexts/AdminsContext';
// import { useSelector } from 'react-redux';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Eye } from 'lucide-react';

// const AdminActionsMenu = ({ admin, onViewClick }) => {
//   const { updateAdmins } = useContext(AdminsContext);
//   const isDarkMode = useSelector((state) => state.globalSetting.isDarkMode);

//   const id = admin._id;
//   const [isWriteAccess, setIsWriteAccess] = useState(admin.isWriteAccess);
//   const status = admin.status;

//   const handleEdit = async (data) => {
//     try {
//       setIsWriteAccess(!isWriteAccess);
//       await updateAdmins(id, data);
//       toast.success(`Successfully ${data.isWriteAccess ? 'give write access to' : 'remove write access from'} ${admin.name}`);
//     } catch (error) {
//       setIsWriteAccess(isWriteAccess);
//       toast.error(`Failed to ${data.isWriteAccess ? 'give write access to' : 'remove write access from'} ${admin.name}`);
//     }
//   };

//   const options = [
//     {
//       id: nanoid(),
//       label: isWriteAccess ? 'Read & Write Access' : 'Read Only Access',
//       onChange: setIsWriteAccess,
//       value: isWriteAccess,
//       avatar: <FaPenToSquare style={{ color: 'rgb(225, 160, 236)' }} />,
//       onUpdate: () => handleEdit({ isWriteAccess: !isWriteAccess }, isWriteAccess, setIsWriteAccess)
//     }
//   ];

//   return (
//     <>
//       <Popover>
//         <PopoverTrigger asChild>
//           <IconButton
//             aria-label='more'
//             aria-controls='actions-menu'
//             aria-haspopup='true'
//             sx={{
//               background: `${status === 'deleted' ? 'rgb(233, 67, 67)' : status === 'blocked' ? 'rgb(252, 134, 38)' : isWriteAccess ? 'rgb(240, 168, 253)' : isDarkMode ? 'rgb(34, 34, 36)' : 'rgb(248, 239, 239)'}`
//             }}
//           >
//             <MoreVertRoundedIcon className='dark:text-white' />
//           </IconButton>
//         </PopoverTrigger>
//         <PopoverContent className='w-50' side='left' align='center'>
//           {options.map((option) => (
//             <div key={option.id} className='flex gap-3 p-4 items-center' onClick={option.onUpdate}>
//               <span className={`${option.color}`}>{option.avatar}</span>
//               <Switch id={option.id} checked={option.value} onCheckedChange={() => {}} className='bg-indigo-600' />
//               <Label className='text-black dark:text-white cursor-pointer' htmlFor={option.id}>
//                 {option.label}
//               </Label>
//             </div>
//           ))}
//           <CustomDialogBox trigger={editTrigger} title={'Edit Admin'} description={"Make changes to admin here. Click update when you're done."}>
//             <UpdateAdmin admin={admin} />
//           </CustomDialogBox>

//           <ViewTrigger onClick={() => onViewClick(admin)} />
//         </PopoverContent>
//       </Popover>
//     </>
//   );
// };

// const editTrigger = (
//   <div className='flex items-center justify-center place-self-end w-full rounded-lg p-3 shadow-lg cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white'>
//     <Edit className='mr-4' /> Edit
//   </div>
// );
// const ViewTrigger = ({ onClick }) => (
//   <div className='flex items-center justify-center place-self-end w-full rounded-lg p-3 mt-3 shadow-lg cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white' onClick={onClick}>
//     <Eye className='mr-4' /> View
//   </div>
// );

// export default AdminActionsMenu;
