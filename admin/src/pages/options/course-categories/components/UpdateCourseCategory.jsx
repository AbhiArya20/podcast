// import { useContext } from 'react';
// import { Switch } from '@/components/ui/switch';
// import { Label } from '@/components/ui/label';
// import CustomInput from '@/components/custom-components/CustomInput';
// import CustomButton from '@/components/custom-components/CustomButton';
// import { CourseCategoriesContext } from '@/contexts/CourseCategoriesContext';

// export default function UpdateCourseCategory({ courseCategory }) {
//   const { fields, isActive, handleIsActive, handleSubmit, createLoading } = useContext(CourseCategoriesContext);

//   return (
//     <div className='rounded-md p-2'>
//       <form>
//         {fields.map((field) => (
//           <div key={field.id} className='mb-4'>
//             <CustomInput key={field.id} label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
//           </div>
//         ))}
//         <div className='flex gap-3 items-center'>
//           <Switch id='isWriteAccess' checked={isActive} onCheckedChange={handleIsActive} className='bg-indigo-600' />
//           <Label className='text-black dark:text-white' htmlFor='isWriteAccess'>
//             {!isActive ? 'Disabled' : 'Enabled'}
//           </Label>
//         </div>
//         <CustomButton btnText='Create' handleSubmit={handleSubmit} loading={createLoading} className='my-4' />
//       </form>
//     </div>
//   );
// }
