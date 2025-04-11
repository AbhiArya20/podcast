// import CustomChip from '@/components/custom-components/CustomChip';
// import CustomToolTip from '@/components/custom-components/CustomToolTip';
// import { useLocation, useNavigate } from 'react-router-dom/dist';
// import { nanoid } from 'nanoid';
// import { useEffect, useState } from 'react';
// import { handleQueryParamChange, handleQueryParamRemove } from '@/lib/utils';
// import { MdCategory } from "react-icons/md";

// const CourseCategoryChipFilter = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const searchParams = new URLSearchParams(location.search);

//   const isActiveFilterFromQuery = searchParams.get('isWriteAccess') === null ? null : searchParams.get('isWriteAccess') === 'true';

//   const [isActiveFilter, setIsActiveFilter] = useState(isActiveFilterFromQuery);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const isActiveFilterFromQuery = searchParams.get('isWriteAccess') === null ? null : searchParams.get('isWriteAccess') === 'true';

//     setIsActiveFilter(isActiveFilterFromQuery);
//   }, [location]);

//   const returnValue = (value) => (value === true ? false : value === false ? null : true);

//   const handleIsActiveFilter = () => {
//     const returnedValue = returnValue(isActiveFilter);
//     if (returnedValue !== null) {
//       handleQueryParamChange('isActive', returnedValue, location, navigate);
//     } else {
//       handleQueryParamRemove('isActive', location, navigate);
//     }
//     setIsActiveFilter(returnedValue);
//   };

//   const chips = [
//     {
//       id: nanoid(),
//       label: isActiveFilter === null ? 'Status' : isActiveFilter ? 'Enabled' : 'Disabled',
//       color: isActiveFilter === null ? 'gray' : isActiveFilter ? 'warning' : 'primary',
//       avatar: <MdCategory className='text-white text-base' />,
//       value: isActiveFilter,
//       handleClick: handleIsActiveFilter
//     }
//   ];
//   return (
//     <>
//       {chips.map((chip) => (
//         <CustomToolTip key={chip.id} tooltip={chip.value ? 'Clear' : chip.label}>
//           <div className={`select-none `} onClick={chip.handleClick}>
//             <CustomChip avatar={chip.avatar} label={chip.label} color={chip.color} subColor={''} />
//           </div>
//         </CustomToolTip>
//       ))}
//     </>
//   );
// };

// export default CourseCategoryChipFilter;
