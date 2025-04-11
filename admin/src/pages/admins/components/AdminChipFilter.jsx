// import CustomChip from '@/components/custom-components/CustomChip';
// import { FaPenToSquare } from 'react-icons/fa6';
// import { MdPerson, MdPerson3, MdPersonOff } from 'react-icons/md';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import { useLocation, useNavigate } from 'react-router-dom/dist';
// import { BiMaleFemale } from 'react-icons/bi';
// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';
// import { capitalizeWords, handleQueryParamChange, handleQueryParamRemove } from '@/lib/utils';

// const AdminChipFilter = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);

//   const isWriteAccessFilterFromQuery = searchParams.get('isWriteAccess') === null ? null : searchParams.get('isWriteAccess') === 'true';
//   const statusFromQuery = searchParams.get('status');
//   const genderFilterFromQuery = searchParams.get('gender') === null ? null : searchParams.get('gender');

//   const [isWriteAccessFilter, setIsWriteAccessFilter] = useState(isWriteAccessFilterFromQuery);
//   const [status, setStatus] = useState(statusFromQuery);
//   const [genderFilter, setGenderFilter] = useState(genderFilterFromQuery);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const isWriteAccessFilterFromQuery = searchParams.get('isWriteAccess') === null ? null : searchParams.get('isWriteAccess') === 'true';
//     const statusFromQuery = searchParams.get('status');
//     const genderFilterFromQuery = searchParams.get('gender') === null ? null : searchParams.get('gender');

//     setIsWriteAccessFilter(isWriteAccessFilterFromQuery);
//     setStatus(statusFromQuery);
//     setGenderFilter(genderFilterFromQuery);
//   }, [location]);

//   const handleIsWriteAccessFilter = () => {
//     const returnedValue = isWriteAccessFilter === true ? false : isWriteAccessFilter === false ? null : true;
//     if (returnedValue !== null) {
//       handleQueryParamChange('isWriteAccess', returnedValue, location, navigate);
//     } else {
//       handleQueryParamRemove('isWriteAccess', location, navigate);
//     }
//     setIsWriteAccessFilter(returnedValue);
//   };

//   const handleStatusFilter = () => {
//     const returnedValue = status == null ? 'active' : status === 'active' ? 'blocked' : status === 'blocked' ? 'deleted' : null;
//     if (returnedValue !== null) {
//       handleQueryParamChange('status', returnedValue, location, navigate);
//     } else {
//       handleQueryParamRemove('status', location, navigate);
//     }
//     setStatus(returnedValue);
//   };

//   const handleGenderFilter = () => {
//     const returnedValue = genderFilter === null ? 'Male' : genderFilter === 'Male' ? 'Female' : genderFilter === 'Female' ? 'Other' : null;
//     if (returnedValue != null) {
//       handleQueryParamChange('gender', returnedValue, location, navigate);
//     } else {
//       handleQueryParamRemove('gender', location, navigate);
//     }
//     setGenderFilter(returnedValue);
//   };

//   const chips = [
//     {
//       id: nanoid(),
//       label: isWriteAccessFilter === null ? 'Access Level' : isWriteAccessFilter ? 'Read & Write' : 'Read Only',
//       color: isWriteAccessFilter === null ? 'gray' : isWriteAccessFilter ? 'secondary' : 'primary',
//       avatar: <FaPenToSquare className='text-white text-base' />,
//       value: isWriteAccessFilter,
//       handleClick: handleIsWriteAccessFilter
//     },
//     {
//       id: nanoid(),
//       label: status == null ? 'Status' : capitalizeWords(status),
//       color: status == 'active' ? 'primary' : status == 'blocked' ? 'warning' : status == 'deleted' ? 'error' : 'gray',
//       avatar: <MdPersonOff className='text-white text-base' />,
//       value: status,
//       handleClick: handleStatusFilter
//     },
//     {
//       id: nanoid(),
//       label: genderFilter === null ? 'Gender' : genderFilter,
//       color: genderFilter === null ? 'gray' : genderFilter === 'Male' ? 'primary' : genderFilter === 'Female' ? 'pink' : 'purple',
//       avatar:
//         genderFilter === null ? (
//           <MdPerson className='text-white text-base' />
//         ) : genderFilter === 'Male' ? (
//           <MdPerson className='text-white text-base' />
//         ) : genderFilter == 'Female' ? (
//           <MdPerson3 className='text-white text-base' />
//         ) : (
//           <BiMaleFemale className='text-white text-base' />
//         ),
//       value: genderFilter,
//       handleClick: handleGenderFilter
//     }
//   ];
//   return (
//     <>
//       {chips.map((chip) => (
//         <CustomToolTip key={chip.id} tooltip={chip.value ?? chip.label}>
//           <div className={`select-none `} onClick={chip.handleClick}>
//             <CustomChip avatar={chip.avatar} label={chip.label} color={chip.color} subColor={''} />
//           </div>
//         </CustomToolTip>
//       ))}
//     </>
//   );
// };

// export default AdminChipFilter;
