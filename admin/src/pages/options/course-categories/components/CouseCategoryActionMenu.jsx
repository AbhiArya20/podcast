// import { useContext, useState } from 'react';
// import { Switch } from '@/components/ui/switch';
// import { Label } from '@/components/ui/label';
// import { toast } from 'react-hot-toast';
// import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
// import { IconButton, Menu, MenuItem } from '@mui/material';
// import { nanoid } from 'nanoid';
// import { FaPenToSquare } from 'react-icons/fa6';
// import { Edit } from '@mui/icons-material';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import { errorHandler } from '@/lib/utils';
// import { CourseCategoriesContext } from '@/contexts/CourseCategoriesContext';
// import { updateCourseCategory } from '@/http/options-service';
// import UpdateCourseCategory from './UpdateCourseCategory';

// const CourseCategoryActionMenu = ({ courseCategory }) => {
//   const { setCourseCategories } = useContext(CourseCategoriesContext);

//   const id = courseCategory._id;
//   const [isActive, setIsActive] = useState(courseCategory.isActive);
//   const [opened, setOpened] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleEdit = async (data, value, setValue) => {
//     try {
//       setValue(!value);
//       const response = await updateCourseCategory(id, data);
//       const updatedData = response.data;
//       setCourseCategories((prevData) => {
//         const newData = prevData.map((oneData) => (oneData._id == updatedData._id ? updatedData : oneData));
//         return newData;
//       });
//       toast.success(`Successfully ${data.isActive ? 'Activate' : 'Disable'} ${courseCategory.category}`);
//     } catch (error) {
//       setValue(value);
//       errorHandler({
//         message: `Failed to ${data.isActive ? 'Activate' : 'Disable'} ${courseCategory.category}`
//       });
//     }
//   };

//   const options = [
//     {
//       id: nanoid(),
//       label: isActive ? 'Read & Write Access' : 'Read Only Access',
//       onChange: setIsActive,
//       value: isActive,
//       avatar: <FaPenToSquare style={{ color: 'rgb(225, 160, 236)' }} />,
//       onUpdate: () => handleEdit({ isWriteAccess: !isActive }, isActive, setIsActive)
//     },
//   ];

//   const handleOpened = (event) => {
//     setOpened(true);
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClosed = () => {
//     setOpened(false);
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <IconButton aria-label='more' aria-controls='actions-menu' aria-haspopup='true' onClick={handleOpened}>
//         <MoreVertRoundedIcon className='dark:text-white' />
//       </IconButton>
//       <Menu
//         id={'actions-menu'}
//         anchorEl={anchorEl}
//         open={opened}
//         onClose={handleClosed}
//         PaperProps={{
//           style: {
//             width: '30ch'
//           }
//         }}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'left'
//         }}
//         transformOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right'
//         }}
//       >
//         {options.map((option) => (
//           <MenuItem key={option.id} sx={{ paddingY: '10px' }} onClick={option.onUpdate}>
//             <div className='flex gap-3 items-center'>
//               <span className={`${option.color}`}>{option.avatar}</span>
//               <Switch id={option.id} checked={option.value} onCheckedChange={() => {}} className='bg-indigo-600' />
//               <Label className='text-black dark:text-white' htmlFor={option.id}>
//                 {option.label}
//               </Label>
//             </div>
//           </MenuItem>
//         ))}

//         <MenuItem>
//           <CustomDialogBox trigger={editTrigger} title={'Edit Course Category'} description={"Make changes to course category here. Click update when you're done."}>
//             <UpdateCourseCategory courseCategory={courseCategory} />
//           </CustomDialogBox>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// };

// const editTrigger = (
//   <div className='flex items-center justify-center place-self-end w-full rounded-lg p-3 shadow-lg cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white'>
//     <Edit className='mr-4' /> Edit
//   </div>
// );

// export default CourseCategoryActionMenu;
