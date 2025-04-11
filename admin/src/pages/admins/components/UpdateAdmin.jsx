// import { useState, useRef, useContext } from 'react';
// import CustomButton from '../../../components/custom-components/CustomButton';
// import { CustomFilePicker } from '../../../components/custom-components/CustomFilePicker';
// import CustomDropDown from '../../../components/custom-components/CustomDropDown';
// import CustomInput from '../../../components/custom-components/CustomInput';
// import { FaPenToSquare } from 'react-icons/fa6';
// import CustomChip from '../../../components/custom-components/CustomChip';
// import { capitalizeWords, errorHandler } from '@/lib/utils';
// import toast from 'react-hot-toast';
// import { AdminsContext } from '@/contexts/AdminsContext';
// import { MdPersonOff } from 'react-icons/md';

// export default function UpdateAdmin({ admin }) {
//   const { updateAdmins, updateAdminLoading } = useContext(AdminsContext);

//   const id = admin?._id;
//   const [name, setName] = useState(admin?.name ?? '');
//   const [phone, setPhone] = useState(admin?.phone ?? '');
//   const [gender, setGender] = useState(admin?.gender);
//   const [profileImg, setProfileImg] = useState(null);
//   const [idProof, setIdProof] = useState(null);
//   const [status, setStatus] = useState(admin?.status);
//   const [isWriteAccess, setIsWriteAccess] = useState(admin?.isWriteAccess);

//   const profileImgInputRef = useRef();
//   const idProofInputRef = useRef();

//   const handleName = (e) => {
//     setName(e.target.value);
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
//   const handleIsWriteAccess = () => {
//     setIsWriteAccess(!isWriteAccess);
//   };
//   const handleStatus = () => {
//     setStatus(status === 'active' ? 'blocked' : status === 'blocked' ? 'deleted' : 'active');
//   };

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

//   const fields = [
//     {
//       id: 'name',
//       type: 'text',
//       label: 'Name',
//       value: capitalizeWords(name),
//       onChange: handleName,
//       placeholder: 'Enter admin name'
//     },
//     {
//       id: 'phone',
//       type: 'number',
//       label: 'Phone Number',
//       value: phone,
//       onChange: handlePhone,
//       placeholder: '123-456-7890'
//     }
//   ];

//   const isValidInput = () => {
//     if (!phone) {
//       errorHandler({ message: 'Phone number must be a valid Indian phone number.' });
//       return false;
//     }

//     if (!name) {
//       errorHandler({ message: 'Name cannot be empty' });
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!isValidInput()) return;
//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('phone', phone);
//       formData.append('gender', gender);
//       if (idProof) {
//         formData.append('idProof', idProof);
//       }
//       if (profileImg) {
//         formData.append('profileImg', profileImg);
//       }
//       formData.append('isWriteAccess', isWriteAccess);
//       formData.append('status', status);
//       await updateAdmins(id, formData);
//       toast.success(`Admin: ${capitalizeWords(name)}'s Details updated successfully!`);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const chips = [
//     {
//       label: isWriteAccess ? 'Read & Write Access' : 'Read Only Access',
//       color: isWriteAccess ? 'secondary' : 'primary',
//       onClick: handleIsWriteAccess,
//       avatar: <FaPenToSquare className='text-white text-base' />
//     },
//     {
//       label: status == null ? 'Status' : capitalizeWords(status),
//       color: status == 'active' ? 'primary' : status == 'blocked' ? 'warning' : status == 'deleted' ? 'error' : 'gray',
//       onClick: handleStatus,
//       avatar: <MdPersonOff className='text-white text-base' />
//     }
//   ];

//   return (
//     <>
//       <div className='w-full sm:px-4'>
//         <div className='rounded-md'>
//           <form>
//             {fields.map((field) => (
//               <div key={field.id} className='mb-3'>
//                 <CustomInput key={field.id} label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
//               </div>
//             ))}
//             <div className='flex flex-col sm:flex-row gap-4'>
//               <CustomFilePicker label='Profile Image' id='profileImg' accept='image/*' inputRef={profileImgInputRef} onChange={handleProfileImg} />
//               <CustomFilePicker label='ID Proof' id='idProof' accept='image/*' inputRef={idProofInputRef} onChange={handleIdProof} />
//             </div>

//             <div className='flex justify-between flex-wrap items-end gap-4'>
//               <CustomDropDown placeholder={'Choose Gender'} defaultValue={gender} columns={genderColumns} onChange={handleGenderChange} label={'Gender'} id='gender' />
//               <div className='flex gap-2 justify-start items-end flex-wrap'>
//                 {chips.map((chip, idx) => (
//                   <div key={idx} onClick={chip.onClick}>
//                     {<CustomChip avatar={chip.avatar} label={chip.label} color={chip.color} />}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <CustomButton btnText='Update' handleSubmit={handleSubmit} loading={updateAdminLoading} className='mt-4' />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
