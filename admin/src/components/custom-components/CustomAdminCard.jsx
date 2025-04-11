// import CustomChip from './CustomChip';
// import { useContext } from 'react';
// import { capitalizeWords } from '@/lib/utils';
// import { Call, Edit, PrintRounded } from '@mui/icons-material';
// import { FaPenToSquare } from 'react-icons/fa6';
// import { MdPersonOff } from 'react-icons/md';
// import { useSelector } from 'react-redux';
// import ReactToPrint from 'react-to-print';
// import { BiMaleFemale } from 'react-icons/bi';
// import { MdPerson, MdPerson3 } from 'react-icons/md';
// import toast from 'react-hot-toast';
// import { useRef } from 'react';
// import CustomDialogBox from './CustomDialogBox';
// import UpdateAdmin from '../../pages/admins/components/UpdateAdmin';
// import { profileTypes } from '@/constants/options';
// import { IoClose } from 'react-icons/io5';
// import { nanoid } from 'nanoid';
// import React from 'react';
// import { OnlineContext } from '@/contexts/OnlineContext';
// import CustomImg from './CustomImg';

// const CustomAdminCard = ({ type, close, data }) => {
//   const curAdmin = useSelector((state) => state.auth.admin);
//   const editAccess = curAdmin?.isRootAdmin;
//   const { onlineUsers } = useContext(OnlineContext);
//   const isOnline = onlineUsers.includes(data?._id);

//   const name = data?.name;
//   const username = data?.username;
//   const phone = data?.phone;
//   const profileImg = data?.profileImg;
//   const profileImgBlurHash = data?.profileImgBlurHash;
//   const idProof = data?.idProof;
//   const idProofBlurHash = data?.idProofBlurHash;
//   const isWriteAccess = data?.isWriteAccess ?? false;
//   const status = data?.status;
//   const gender = data?.gender;

//   const chips = [
//     {
//       id: nanoid(),
//       isRootView: true,
//       label: isWriteAccess ? 'Read & Write Access' : 'Read Only Access',
//       color: isWriteAccess ? 'secondary' : 'primary',
//       avatar: <FaPenToSquare className='text-white text-base' />
//     },
//     {
//       id: nanoid(),
//       isRootView: curAdmin?.isRootAdmin,
//       label: capitalizeWords(status ?? ''),
//       color: status == 'active' ? 'primary' : status == 'blocked' ? 'warning' : 'error',
//       avatar: <MdPersonOff className='text-white text-base' />
//     }
//   ];

//   const copyPhone = () => {
//     console.log('Phone Number copied successfully');
//     navigator.clipboard.writeText(phone);
//     toast.success('Phone Number copied successfully');
//   };

//   const componentRef = useRef();

//   return (
//     <div className={`${profileTypes.list ? 'sticky left-0' : 'relative'} bg-slate-900 max-w-[95vw] sm:max-w-md bg-white dark:bg-slate-900 rounded-xl overflow-hidden`}>
//       {type === profileTypes.card && (
//         <div className='absolute right-2 top-2 cursor-pointer' onClick={close}>
//           <span className='text-3xl'>
//             <IoClose className={`text-gray-600 dark:text-white`} />
//           </span>
//         </div>
//       )}

//       <div className={`p-3`}>
//         <div ref={componentRef} className={type !== profileTypes.card ? `m-1 sm:m-3 max-w-md sm:w-auto` : ''}>
//           <div className='w-full'>
//             <div className='flex 4 flex-wrap justify-start items-center'>
//               <div className='relative select-none'>
//                 <CustomImg src={profileImg} blurHash={profileImgBlurHash} className='w-16 h-16 rounded-full mr-4 ring-2 ring-white' alt='Profile' />
//                 <div className={`w-4 h-4 rounded-full absolute bottom-2 right-4 ring-2 ring-white ${isOnline ? 'bg-green-600' : 'bg-blue-600'}`}></div>
//               </div>
//               <div>
//                 <div className='flex items-center gap-2 text-black dark:text-white font-extrabold text-xl text-center sm:text-start capitalize'>
//                   <span className={'dark:text-white text-black'}>{name}</span>
//                   <span>{gender === 'Male' ? <MdPerson className='text-blue-700' /> : gender === 'Female' ? <MdPerson3 className='text-pink-700' /> : <BiMaleFemale className='text-gray-500' />}</span>
//                 </div>
//                 <p className='text-slate-600 dark:text-slate-400 font-semibold'>{username}</p>
//               </div>
//             </div>
//             <div className='flex gap-2 my-3 justify-start items-center flex-wrap'>
//               {chips.map((chip) => (
//                 <React.Fragment key={chip.id}>{chip.isRootView && <CustomChip key={chip.id} avatar={chip.avatar} label={chip.label} color={chip.color} />}</React.Fragment>
//               ))}
//             </div>

//             <div className={`w-full flex items-center justify-between rounded-lg p-3 mb-3 shadow-lg cursor-pointer bg-slate-950 text-white`} onClick={copyPhone}>
//               <span className='text-base ml-4 lg:ml-2'>{phone}</span>
//               <Call />
//             </div>
//           </div>
//           <div className='rounded-lg overflow-hidden mb-2'>
//             <CustomImg src={idProof} blurHash={idProofBlurHash} className='object-fit w-full aspect-video' alt='idProof' />
//           </div>
//         </div>
//         <div className={`flex items-center gap-4 justify-end pr-6`}>
//           <ReactToPrint
//             trigger={() => (
//               <div className='flex items-center justify-center place-self-end text-2xl rounded-lg p-3 shadow-lg cursor-pointer bg-orange-600 hover:bg-orange-700 text-white'>
//                 <PrintRounded />
//               </div>
//             )}
//             documentTitle='Print Admin'
//             content={() => componentRef.current}
//           />
//           {editAccess && (
//             <CustomDialogBox trigger={editTrigger} title={'Edit Admin'} description={"Make changes to admin here. Click update when you're done."}>
//               <UpdateAdmin admin={data} />
//             </CustomDialogBox>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const editTrigger = (
//   <div className='flex items-center justify-center place-self-end text-2xl rounded-lg p-3 shadow-lg cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white'>
//     <Edit />
//   </div>
// );

// export default CustomAdminCard;
