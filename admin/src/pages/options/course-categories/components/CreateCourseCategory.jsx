// import { useContext } from 'react';
// import { Switch } from '@/components/ui/switch';
// import { Label } from '@/components/ui/label';
// import CustomInput from '@/components/custom-components/CustomInput';
// import CustomButton from '@/components/custom-components/CustomButton';
// import { CourseCategoriesContext } from '@/contexts/CourseCategoriesContext';
// import { CustomFilePicker } from '@/components/custom-components/CustomFilePicker';

// export default function CreateCourseCategory() {
//   const { fields, isActive, handleIsActive, handleSubmit, createLoading, iconInputRef, handleIcon } = useContext(CourseCategoriesContext);

//   return (
//     <div className='rounded-md p-2'>
//       <form>
//         {fields.map((field) => (
//           <div key={field.id}>
//             <CustomInput key={field.id} label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
//             <br />
//             <CustomFilePicker label='Icon' id='course-category' accept='image/*' inputRef={iconInputRef} onChange={handleIcon} />
//             <br />
//           </div>
//         ))}
//         <div className='flex gap-3 items-center'>
//           <Switch id='isWriteAccess' checked={isActive} onCheckedChange={handleIsActive} className='bg-indigo-600' />
//           <Label className='text-black dark:text-white' htmlFor='isWriteAccess'>
//             {!isActive ? 'Disabled' : 'Enabled'}
//           </Label>
//         </div>
//         <CustomButton btnText='Create' handleSubmit={handleSubmit} loading={createLoading} className='my-3' />
//       </form>
//     </div>
//   );
// }
