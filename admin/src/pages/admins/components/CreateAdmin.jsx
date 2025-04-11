// import CustomButton from '@/components/custom-components/CustomButton';
// import CustomDropDown from '@/components/custom-components/CustomDropDown';
// import { CustomFilePicker } from '@/components/custom-components/CustomFilePicker';
// import CustomInput from '@/components/custom-components/CustomInput';
// import { Label } from '@/components/ui/label';
// import { Switch } from '@/components/ui/switch';
// import { AdminsContext } from '@/contexts/AdminsContext';

// // import NotAuthorizedPage from '@/pages/NotAuthorized';
// import { useContext, useRef, useState } from 'react';
// import toast from 'react-hot-toast';
// import { IoMdArrowRoundBack } from 'react-icons/io';

// export default function CreateAdmin({ setAdmin, setShowProfile }) {
//   const { createAdmins, createAdminLoading } = useContext(AdminsContext);
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [gender, setGender] = useState(null);
//   const [profileImg, setProfileImg] = useState(null);
//   const [idProof, setIdProof] = useState(null);
//   const [isWriteAccess, setIsWriteAccess] = useState(false);

//   const profileImgInputRef = useRef();
//   const idProofInputRef = useRef();

//   const genderColumns = [
//     {
//       value: 'Male',
//       name: 'Male'
//     },
//     {
//       value: 'Female',
//       name: 'Female'
//     },
//     {
//       value: 'Other',
//       name: 'Other'
//     }
//   ];

//   const handleName = (e) => {
//     setName(e.target.value);
//   };
//   const handleUsername = (e) => {
//     setUsername(e.target.value);
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };
//   const handlePhone = (e) => {
//     setPhone(e.target.value);
//   };
//   const handleGenderChange = (value) => {
//     setGender(value);
//   };
//   const handleProfileImg = (e) => {
//     setProfileImg(e.target.files[0]);
//   };
//   const handleIdProof = (e) => {
//     setIdProof(e.target.files[0]);
//   };
//   const handleIsWriteAccess = (value) => {
//     setIsWriteAccess(value);
//   };
//   const fields = [
//     {
//       id: 'name',
//       type: 'text',
//       label: 'Name',
//       value: name,
//       onChange: handleName,
//       placeholder: 'Enter admin name'
//     },
//     {
//       id: 'phone',
//       type: 'number',
//       label: 'Mobile Number',
//       value: phone,
//       onChange: handlePhone,
//       placeholder: '123-456-7890'
//     },
//     {
//       id: 'email',
//       type: 'email',
//       label: 'Username',
//       value: username,
//       onChange: handleUsername,
//       placeholder: 'username@example.com'
//     },
//     {
//       id: 'password',
//       type: 'password',
//       label: 'Password',
//       value: password,
//       onChange: handlePassword,
//       placeholder: 'Enter admin password'
//     }
//   ];

//   const isValidInput = () => {
//     if (!name) {
//       toast.error('Name is required');
//       return false;
//     }
//     if (!username) {
//       toast.error('Username is required');
//       return false;
//     }
//     if (!password) {
//       toast.error('Password is required');
//       return false;
//     }
//     if (!phone) {
//       toast.error('Phone is required');
//       return false;
//     }
//     if (!gender) {
//       toast.error('Gender is required');
//       return false;
//     }
//     if (!profileImg) {
//       toast.error('Profile Image is required');
//       return false;
//     }
//     if (!idProof) {
//       toast.error('ID Proof is required');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!isValidInput()) return;
//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('username', username);
//       formData.append('password', password);
//       formData.append('phone', phone);
//       formData.append('gender', gender);
//       formData.append('profileImg', profileImg);
//       formData.append('idProof', idProof);
//       formData.append('isWriteAccess', isWriteAccess);
//       const updateAdmin = await createAdmins(formData);
//       setAdmin(updateAdmin);
//       handleClear();
//       setShowProfile(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleClear = () => {
//     setName('');
//     setUsername('');
//     setPassword('');
//     setPhone('');
//     setProfileImg(null);
//     setIdProof(null);
//     setIsWriteAccess(false);
//     profileImgInputRef.current.value = '';
//     idProofInputRef.current.value = '';
//   };

//   const [step, setStep] = useState(0);

//   return (
//     <div className='w-full sm:px-4 overflow-auto max-h-svh'>
//       {step === 1 && (
//         <span className='inline-block mb-4 sm:hidden cursor-pointer' onClick={() => setStep(0)}>
//           <IoMdArrowRoundBack className='text-2xl' />
//         </span>
//       )}
//       <div className='rounded-md'>
//         <form>
//           <div className={`${step === 1 && 'hidden'} sm:flex flex-wrap justify-between sm:flex-row flex-col`}>
//             {fields.map((field) => (
//               <div key={field.id} className='sm:w-[45%] mb-4'>
//                 <CustomInput key={field.id} label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
//               </div>
//             ))}
//           </div>
//           <div className={`${step === 0 && 'hidden'} sm:flex flex-col sm:flex-row gap-4`}>
//             <CustomFilePicker label='Profile Image' id='profileImg' accept='image/*' inputRef={profileImgInputRef} onChange={handleProfileImg} />
//             <CustomFilePicker label='ID Proof' id='idProof' accept='image/*' inputRef={idProofInputRef} onChange={handleIdProof} />
//           </div>
//           <div className={`${step === 0 && 'hidden'} sm:flex gap-3 pt-3 justify-between flex-wrap items-end`}>
//             <CustomDropDown placeholder={'Choose Gender'} columns={genderColumns} onChange={handleGenderChange} label={'Gender'} id='gender' />
//             <div className='flex gap-3 pt-3 items-center'>
//               <Switch id='isWriteAccess' checked={isWriteAccess} onCheckedChange={handleIsWriteAccess} className='bg-indigo-600' />
//               <Label className='text-black dark:text-white cursor-pointer' htmlFor='isWriteAccess'>
//                 {!isWriteAccess ? 'Read Only' : 'Read And Write'} Access
//               </Label>
//             </div>
//           </div>
//           <CustomButton
//             btnText='Next'
//             handleSubmit={() => {
//               setStep(1);
//             }}
//             loading={createAdminLoading}
//             className={`mt-4 ${step === 1 && 'hidden'} sm:hidden`}
//           />

//           <CustomButton btnText='Create' handleSubmit={handleSubmit} loading={createAdminLoading} className={`mt-4 ${step === 0 && 'hidden'} sm:block`} />
//         </form>
//       </div>
//     </div>
//   );
// }
