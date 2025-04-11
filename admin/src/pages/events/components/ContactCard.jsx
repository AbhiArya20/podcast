// import CustomButton from '@/components/custom-components/CustomButton';
// import { CustomFilePicker } from '@/components/custom-components/CustomFilePicker';
// import CustomImg from '@/components/custom-components/CustomImg';
// import CustomInput from '@/components/custom-components/CustomInput';
// import { updateEvent } from '@/http/event-service';
// import { errorHandler } from '@/lib/utils';
// import { useRef, useState } from 'react';
// import toast from 'react-hot-toast';

// const ContactCard = ({ event, onUpdate }) => {
//   const isContactAvailable = event.contactPerson ? true : false;

//   const [contactPerson, setContactPerson] = useState(event.contactPerson ?? '');
//   const [contactMobile, setContactMobile] = useState(event.contactMobile ?? '');
//   const [contactEmail, setContactEmail] = useState(event.contactEmail ?? '');
//   const [contactCompanyName, setContactCompanyName] = useState(event.contactCompanyName ?? '');
//   const [contactDesignation, setContactDesignation] = useState(event.contactDesignation ?? '');
//   const [contactProfileImage, setContactProfileImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [isEdit, setIsEdit] = useState(false);

//   const isValidInput = () => {
//     if (!contactPerson || !contactMobile || !contactEmail || !contactCompanyName || !contactDesignation) {
//       toast.error('Please fill all the fields');
//       return false;
//     }
//     if (!isContactAvailable && !contactProfileImage) {
//       toast.error('Please upload profile image');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!isValidInput()) return;
//     try {
//       const formData = new FormData();
//       formData.append('contactPerson', contactPerson);
//       formData.append('contactMobile', contactMobile);
//       formData.append('contactEmail', contactEmail);
//       formData.append('contactCompanyName', contactCompanyName);
//       formData.append('contactDesignation', contactDesignation);
//       if (contactProfileImage) {
//         formData.append('contactProfileImage', contactProfileImage);
//       }
//       setLoading(true);
//       const response = await updateEvent(event._id, formData);
//       onUpdate(response.data);
//       setIsEdit(false);
//       toast.success('Contact updated successfully');
//     } catch (error) {
//       errorHandler(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fields = [
//     {
//       id: 'person',
//       type: 'text',
//       label: 'Name',
//       value: contactPerson,
//       onChange: (e) => setContactPerson(e.target.value),
//       placeholder: 'Enter name'
//     },
//     {
//       id: 'phone',
//       type: 'number',
//       label: 'Mobile Number',
//       value: contactMobile,
//       onChange: (e) => setContactMobile(e.target.value),
//       placeholder: '123-456-7890'
//     },
//     {
//       id: 'email',
//       type: 'email',
//       label: 'Email',
//       value: contactEmail,
//       onChange: (e) => setContactEmail(e.target.value),
//       placeholder: 'username@example.com'
//     },
//     {
//       id: 'company',
//       type: 'text',
//       label: 'Company',
//       value: contactCompanyName,
//       onChange: (e) => setContactCompanyName(e.target.value),
//       placeholder: 'Enter name'
//     },
//     {
//       id: 'designation',
//       type: 'text',
//       label: 'Designation',
//       value: contactDesignation,
//       onChange: (e) => setContactDesignation(e.target.value),
//       placeholder: 'Enter designation'
//     }
//   ];

//   const profileImgInputRef = useRef();

//   return (
//     <div className=' rounded overflow-hidden bg-white flex items-center justify-center flex-wrap w-full relative'>
//       {isEdit ? (
//         <div className='rounded-md'>
//           <form>
//             <div className={`sm:flex flex-wrap justify-between sm:flex-row flex-col`}>
//               {fields.map((field) => (
//                 <div key={field.id} className='sm:w-[45%] mb-4'>
//                   <CustomInput key={field.id} label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
//                 </div>
//               ))}
//             </div>
//             <div className={`sm:flex flex-col sm:flex-row`}>
//               <CustomFilePicker label='Profile Image' id='profileImg' accept='image/*' inputRef={profileImgInputRef} onChange={(e) => setContactProfileImage(e.target.files[0])} />
//             </div>

//             <CustomButton btnText='Create' handleSubmit={handleSubmit} loading={loading} className={`mt-4`} />
//           </form>
//         </div>
//       ) : (
//         <>
//           {!event.contactPerson ? (
//             <div className='flex flex-col items-center justify-center flex-wrap gap-4 h-56 w-full bg-gray-500 rounded-2xl overflow-hidden'>
//               <div>
//                 <p className='text-slate-950 text-base tex'>No Contact Information Available</p>
//               </div>
//               <div className='flex flex-wrap gap-3 items-center justify-center'>
//                 {event.status === 'unpublished' ||
//                   (event.status === 'published' && (
//                     <button
//                       className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
//                       onClick={() => {
//                         console.log('Add Contact');
//                         setIsEdit(true);
//                       }}
//                     >
//                       Add Contact
//                     </button>
//                   ))}
//               </div>
//             </div>
//           ) : (
//             <div className='flex items-center justify-center flex-col gap-3'>
//               <div className='flex items-center justify-center flex-wrap gap-3'>
//                 <CustomImg className='w-32 h-32 object-cover rounded-full' src={event.contactProfileImage} blurHash={event.contactProfileImageBlurHash} alt='Contact Image' />
//                 <div>
//                   <p className='text-gray-700 text-base'>
//                     <strong>Name:</strong> <span className='text-gray-900'>{event.contactPerson}</span>
//                     <br />
//                     <strong>Mobile:</strong> <span className='text-gray-900'>{event.contactMobile}</span>
//                     <br />
//                     <strong>Email:</strong> <span className='text-gray-900'>{event.contactEmail}</span>
//                     <br />
//                     <strong>Company:</strong> <span className='text-gray-900'>{event.contactCompanyName}</span>
//                     <br />
//                     <strong>Designation:</strong> <span className='text-gray-900'>{event.contactDesignation}</span>
//                   </p>
//                 </div>
//               </div>

//               {event.status === 'unpublished' ||
//                 (event.status === 'published' && (
//                   <div className='flex flex-wrap gap-3 items-center justify-center self-end'>
//                     <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => setIsEdit(true)}>
//                       Edit Contact
//                     </button>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ContactCard;
