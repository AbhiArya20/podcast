// import CustomButton from '@/components/custom-components/CustomButton';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import { CustomMessageCardType1 } from '@/components/custom-components/CustomMessageCardType1';
// import {
//   addTermsConditionsOtherPoints,
//   deleteTermsConditionsOtherPoints,
//   getSingleTermsConditions,
//   updateTermsConditionsOtherPoints,
//   updateTermsConditionsPoints
// } from '@/http/terms-conditions-service';
// import { capitalizeWords, errorHandler } from '@/lib/utils';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import CreateOrUpdatePointSectionCard from './components/CreateOrUpdatePointSectionCard';
// import OtherPointsList from './components/OtherPointsList';
// import CustomLoading from '@/components/custom-components/CustomLoading';

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//   return result;
// };

// export default function SingleTermsConditions() {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [termAndCondition, setTermAndCondition] = useState(null);
//   const { termsConditionsId } = useParams();
//   const [openCreateSection, setOpenCreateSection] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await getSingleTermsConditions(termsConditionsId);
//         const termsConditions = response.data;
//         setTermAndCondition(termsConditions);
//       } catch (error) {
//         setError(error);
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   const onCreateSection = async (section) => {
//     const response = await addTermsConditionsOtherPoints(termsConditionsId, section);
//     setTermAndCondition(response.data);
//     setOpenCreateSection(false);
//   };

//   const onDeleteSection = async (pointId) => {
//     const response = await deleteTermsConditionsOtherPoints(termsConditionsId, pointId);
//     setTermAndCondition(response.data);
//   };

//   const onUpdateSection = async (section, pointId) => {
//     const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, section);
//     setTermAndCondition(response.data);
//   };

//   const onOrderChange = async (result) => {
//     const reorderedList = reorder(termAndCondition.otherPoints, result.source.index, result.destination.index);
//     setTermAndCondition((prev) => {
//       return {
//         ...prev,
//         otherPoints: reorderedList
//       };
//     });
//     try {
//       await updateTermsConditionsPoints(termsConditionsId, { otherPoints: reorderedList });
//     } catch (error) {
//       errorHandler(error);
//     }
//   };

//   const createNewPoint = async (point, pointId) => {
//     const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
//     points.push(point);
//     const formData = new FormData();
//     points.forEach((value, index) => {
//       formData.append(`points[${index}]`, value);
//     });
//     const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
//     setTermAndCondition(response.data);
//   };

//   const updatePoint = async (point, pointId) => {
//     const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
//     const index = points.indexOf(point);
//     points[index] = point;
//     const formData = new FormData();
//     points.forEach((value, index) => {
//       formData.append(`points[${index}]`, value);
//     });
//     const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
//     setTermAndCondition(response.data);
//   };

//   const deletePoint = async (point, pointId) => {
//     const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
//     const index = points.indexOf(point);
//     points.splice(index, 1);
//     const formData = new FormData();
//     points.forEach((value, index) => {
//       formData.append(`points[${index}]`, value);
//     });
//     const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
//     setTermAndCondition(response.data);
//   };

//   const onPointOrderChange = async (result, pointId) => {
//     const points = termAndCondition.otherPoints?.filter((point) => point._id === pointId)[0]?.points || [];
//     const reorderedList = reorder(points, result.source.index, result.destination.index);
//     const formData = new FormData();
//     reorderedList.forEach((value, index) => {
//       formData.append(`points[${index}]`, value);
//     });
//     const response = await updateTermsConditionsOtherPoints(termsConditionsId, pointId, formData);
//     setTermAndCondition(response.data);
//   };

//   return (
//     <PrivatePageWrapper>
//       <div className='flex flex-col h-full p-4'>
//         {error ? (
//           <div className='w-full h-full items-center justify-center'>
//             <CustomMessageCardType1 message={'No Internet Connection'} description={'Please check your internet connection and try again.'} />;
//           </div>
//         ) : (
//           <>
//             {loading ? (
//               <CustomLoading />
//             ) : (
//               <div className='flex flex-wrap gap-4 justify-center'>
//                 <div className='flex justify-between items-center w-full'>
//                   <h1 className='font-bold leading-none tracking-tight text-gray-600 text-base sm:text-xl dark:text-white'>{capitalizeWords(termAndCondition.termsConditionsName)}</h1>
//                   <CustomDialogBox
//                     open={openCreateSection}
//                     onOpenChange={setOpenCreateSection}
//                     trigger={
//                       <div>
//                         <CustomButton btnText={'Create Section'} className={'max-w-36'} />
//                       </div>
//                     }
//                     title={capitalizeWords(termAndCondition.termsConditionsName)}
//                     description={
//                       'Use this form to create a new section for the Terms and Conditions or Privacy Policy. Please provide the necessary details to ensure that the information is clear and comprehensive for users.'
//                     }
//                   >
//                     <CreateOrUpdatePointSectionCard onCreateOrUpdateSection={onCreateSection} />
//                   </CustomDialogBox>
//                 </div>
//                 <OtherPointsList
//                   createNewPoint={createNewPoint}
//                   onUpdate={onUpdateSection}
//                   onDelete={onDeleteSection}
//                   onUpdatePoint={updatePoint}
//                   onDeletePoint={deletePoint}
//                   onOrderChange={onOrderChange}
//                   onPointOrderChange={onPointOrderChange}
//                   otherPoints={termAndCondition.otherPoints}
//                 />
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </PrivatePageWrapper>
//   );
// }

import CustomButton from '@/components/custom-components/CustomButton';
import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
import { CustomMessageCardType1 } from '@/components/custom-components/CustomMessageCardType1';
import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
import { capitalizeWords, formatDate } from '@/lib/utils';
import { useParams } from 'react-router';
import CreateOrUpdatePointSectionCard from './components/CreateOrUpdatePointSectionCard';
import OtherPointsList from './components/OtherPointsList';
import CustomLoading from '@/components/custom-components/CustomLoading';
import { useTermsConditions } from '@/hooks/useTermsConditions';

export default function SingleTermsConditions() {
  const { termsConditionsId } = useParams();
  const {
    error,
    loading,
    termAndCondition,
    openCreateSection,
    setOpenCreateSection,
    onCreateSection,
    onDeleteSection,
    onUpdateSection,
    onOrderChange,
    createNewPoint,
    updatePoint,
    deletePoint,
    onPointOrderChange
  } = useTermsConditions(termsConditionsId);

  return (
    <PrivatePageWrapper>
      <div className='flex flex-col h-full p-4'>
        {error ? (
          <div className='w-full h-full items-center justify-center'>
            <CustomMessageCardType1 message={'No Internet Connection'} description={'Please check your internet connection and try again.'} />
          </div>
        ) : (
          <>
            {loading ? (
              <CustomLoading />
            ) : (
              <div className='flex flex-wrap gap-4 justify-center'>
                <div className='flex justify-between items-center w-full'>
                  <div>
                    <h1 className='font-bold leading-none tracking-tight text-gray-600 text-base sm:text-xl dark:text-white'>{capitalizeWords(termAndCondition.termsConditionsName)}</h1>
                    <h1 className='font-bold tracking-tight text-blue-500 sm:text-center text-xs'>Updated On: {formatDate(termAndCondition.updatedAt)}</h1>
                  </div>
                  <CustomDialogBox
                    open={openCreateSection}
                    onOpenChange={setOpenCreateSection}
                    trigger={
                      <div>
                        <CustomButton btnText={'Create Section'} className={'max-w-36'} />
                      </div>
                    }
                    title={capitalizeWords(termAndCondition.termsConditionsName)}
                    description={
                      'Use this form to create a new section for the Terms and Conditions or Privacy Policy. Please provide the necessary details to ensure that the information is clear and comprehensive for users.'
                    }
                  >
                    <CreateOrUpdatePointSectionCard onCreateOrUpdateSection={onCreateSection} />
                  </CustomDialogBox>
                </div>
                <OtherPointsList
                  onUpdate={onUpdateSection}
                  onDelete={onDeleteSection}
                  onOrderChange={onOrderChange}
                  createNewPoint={createNewPoint}
                  onUpdatePoint={updatePoint}
                  onDeletePoint={deletePoint}
                  onPointOrderChange={onPointOrderChange}
                  points={termAndCondition.otherPoints}
                />
              </div>
            )}
          </>
        )}
      </div>
    </PrivatePageWrapper>
  );
}
