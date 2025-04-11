// import CustomButton from '@/components/custom-components/CustomButton';
// import CustomDropDown from '@/components/custom-components/CustomDropDown';
// import { CustomFilePicker } from '@/components/custom-components/CustomFilePicker';
// import CustomInput from '@/components/custom-components/CustomInput';
// import { Label } from '@/components/ui/label';
// import { useRef, useState } from 'react';
// import toast from 'react-hot-toast';
// import { IoMdArrowRoundBack } from 'react-icons/io';
// import CustomDateTimePicker from '@/components/custom-components/CustomDateTimePicker';
// import { Textarea } from '@/components/ui/textarea';
// import CustomDialogBox from '@/components/custom-components/CustomDialogBox';
// import CustomLocationPicker from '@/components/custom-components/CustomLocationPicker';
// import { discountPercentageColumnsPreCalc } from '@/lib/constants';
// import { createEvent } from '@/http/event-service';
// import { useNavigate } from 'react-router';
// import { errorHandler } from '@/lib/utils';

// export default function CreateEvent() {
//   const navigate = useNavigate();
//   const [eventName, setEventName] = useState('');
//   const [eventType, setEventType] = useState('');
//   const [eventAmount, setEventAmount] = useState('');
//   const [discount, setDiscount] = useState(0);
//   const [discountEndDate, setDiscountEndDate] = useState('');
//   const [showDiscountEndDate, setShowDiscountEndDate] = useState('');
//   const [websiteUrl, setWebsiteUrl] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [showStartDate, setShowStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [showEndDate, setShowEndDate] = useState('');
//   const [bannerImage, setBannerImage] = useState(null);
//   const [description, setDescription] = useState('');
//   const [tagLine, setTagLine] = useState('');
//   const [lat, setLat] = useState(0);
//   const [lng, setLng] = useState(0);
//   const [address, setAddress] = useState('');
//   const [targetAudience, setTargetAudience] = useState('');
//   const [loading, setLoading] = useState(false);

//   const bannerImgInputRef = useRef();

//   const discountPercentageColumns = discountPercentageColumnsPreCalc;

//   const eventTypeColumns = [
//     {
//       value: 'Online',
//       name: 'Online'
//     },
//     {
//       value: 'Offline',
//       name: 'Offline'
//     }
//   ];

//   const targetAudienceColumn = [
//     { value: 'Jobseeker', name: 'Jobseeker' },
//     { value: 'Employer', name: 'Employer' },
//     { value: 'Both', name: 'Both' }
//   ];

//   const fields = [
//     {
//       id: 'event-name',
//       type: 'text',
//       label: 'Event Name',
//       value: eventName,
//       onChange: (e) => setEventName(e.target.value),
//       placeholder: 'Enter event name',
//       maxlength: 20,
//       currentLength: eventName.length
//     },
//     {
//       id: 'tag-line',
//       type: 'text',
//       label: 'Tag Line',
//       value: tagLine,
//       onChange: (e) => setTagLine(e.target.value),
//       placeholder: 'Enter tag line',
//       maxlength: 50,
//       currentLength: tagLine.length
//     },
//     {
//       id: 'website-url',
//       type: 'text',
//       label: 'Website URL',
//       value: websiteUrl,
//       onChange: (e) => setWebsiteUrl(e.target.value),
//       placeholder: 'https://www.example.com'
//     }
//   ];
//   const fields2 = [
//     {
//       id: 'Event Amount',
//       type: 'number',
//       label: 'Event Amount',
//       value: eventAmount,
//       onChange: (e) => setEventAmount(e.target.value),
//       placeholder: 'Enter event amount'
//     }
//   ];

//   const isValidInput1 = () => {
//     if (!eventName) {
//       toast.error('Event Name is required');
//       return false;
//     }
//     if (!tagLine) {
//       toast.error('Tag Line is required');
//       return false;
//     }
//     if (!bannerImage) {
//       toast.error('Banner Image is required');
//       return false;
//     }

//     if (!targetAudience) {
//       toast.error('Target Audience is required');
//       return false;
//     }
//     if (!eventType) {
//       toast.error('Event Type is required');
//       return false;
//     }
//     return true;
//   };

//   const isValidInput2 = () => {
//     if (!eventAmount) {
//       toast.error('Event Amount is required');
//       return false;
//     }
//     if (!startDate) {
//       toast.error('Start Date is required');
//       return false;
//     }
//     if (!endDate) {
//       toast.error('End Date is required');
//       return false;
//     }
//     if (!address || !lat || !lng) {
//       toast.error('Location is required');
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     if (!isValidInput1() || !isValidInput2()) return;
//     try {
//       const formData = new FormData();
//       formData.append('eventName', eventName);
//       formData.append('tagLine', tagLine);
//       if (websiteUrl) {
//         formData.append('websiteUrl', websiteUrl);
//       }
//       formData.append('bannerImage', bannerImage);
//       if (description) {
//         formData.append('description', description);
//       }
//       formData.append('targetAudience', targetAudience);
//       formData.append('eventType', eventType);
//       formData.append('eventAmount', eventAmount);
//       formData.append('lat', lat);
//       formData.append('lng', lng);
//       formData.append('address', address);
//       formData.append('startDate', startDate);
//       formData.append('endDate', endDate);
//       if (discount && discountEndDate) {
//         formData.append('discount', discount);
//         formData.append('discountEndDate', discountEndDate);
//       }
//       setLoading(true);
//       const response = await createEvent(formData);
//       navigate(`/events/${response.data._id}`);
//     } catch (error) {
//       errorHandler(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const [openMap, setOpenMap] = useState(false);
//   const [step, setStep] = useState(0);
//   const handleLocationSelect = (address, lat, lng) => {
//     console.log(address, lat, lng);
//     setAddress(address);
//     setLat(lat);
//     setLng(lng);
//   };

//   const customOptions = {
//     month: 'short',
//     day: 'numeric',
//     year: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     hour12: true
//   };

//   const [openStartTime, setOpenStartTime] = useState(false);
//   const [openEndTime, setOpenEndTime] = useState(false);
//   const [openDiscountEndDate, setOpenDiscountEndDate] = useState(false);

//   return (
//     <div className='w-full sm:px-4 overflow-auto max-h-svh'>
//       {step === 1 && (
//         <span className='inline-block mb-4 cursor-pointer' onClick={() => setStep(0)}>
//           <IoMdArrowRoundBack className='text-2xl' />
//         </span>
//       )}
//       <div className={`${step === 1 ? 'hidden' : 'block'} rounded-md`}>
//         <form>
//           <div className={`${step === 1 && 'hidden'} sm:flex flex-wrap justify-between sm:flex-row flex-col`}>
//             {fields.map((field) => (
//               <div key={field.id} className='sm:w-[45%]'>
//                 <CustomInput
//                   key={field.id}
//                   label={field.label}
//                   id={field.id}
//                   type={field.type}
//                   placeholder={field.placeholder}
//                   value={field.value}
//                   onChange={field.onChange}
//                   maxLength={field.maxlength}
//                   currentLength={field.currentLength}
//                 />
//               </div>
//             ))}
//             <div className={`sm:flex flex-col sm:flex-row sm:w-[45%]`}>
//               <CustomFilePicker
//                 label='Banner Image'
//                 id='banner'
//                 accept='image/*'
//                 inputRef={bannerImgInputRef}
//                 onChange={(e) => {
//                   setBannerImage(e.target.files[0]);
//                 }}
//               />
//             </div>
//           </div>
//           <div className='grid w-full gap-1.5 mt-3'>
//             <Label htmlFor='description'>Event description</Label>
//             <Textarea
//               placeholder='Event description here.'
//               id='description'
//               row={3}
//               maxLength={200}
//               className='resize-none'
//               onChange={(e) => {
//                 setDescription(e.target.value);
//               }}
//             />
//             <span className='text-xs flex justify-end mr-2 text-gray-400'>{`${description.length}/${200}`}</span>
//           </div>
//           <div className={`flex gap-3 justify-between flex-wrap`}>
//             <CustomDropDown
//               placeholder={'Choose Target'}
//               columns={targetAudienceColumn}
//               onChange={(value) => {
//                 setTargetAudience(value);
//               }}
//               label={'Target Audience'}
//               id='target-audience'
//             />
//             <CustomDropDown
//               placeholder={'Choose Event Type'}
//               columns={eventTypeColumns}
//               onChange={(value) => {
//                 setEventType(value);
//               }}
//               label={'Event Type'}
//               id='event-type'
//             />
//           </div>
//           <CustomButton
//             btnText='Next'
//             handleSubmit={() => {
//               if (!isValidInput1()) return;
//               setStep(1);
//             }}
//             loading={false}
//             className={`mt-4`}
//           />
//         </form>
//       </div>
//       <div className={`${step === 1 ? 'block' : 'hidden'} rounded-md`}>
//         <form>
//           <div className={`flex flex-wrap justify-between sm:flex-row flex-col gap-3`}>
//             {fields2.map((field) => (
//               <div key={field.id} className='sm:w-[45%]'>
//                 <CustomInput
//                   key={field.id}
//                   label={field.label}
//                   id={field.id}
//                   type={field.type}
//                   placeholder={field.placeholder}
//                   value={field.value}
//                   onChange={field.onChange}
//                   maxLength={field.maxlength}
//                   currentLength={field.currentLength}
//                 />
//               </div>
//             ))}
//             <CustomDialogBox
//               open={openMap}
//               onOpenChange={() => setOpenMap((prev) => !prev)}
//               trigger={
//                 <div className='sm:w-[45%]'>
//                   <CustomInput label={'Location'} placeholder={'Location'} value={address} readOnly />
//                 </div>
//               }
//               title={'Choose Address'}
//               description={"Choose address do you want to search for events. Click on 'Done' when you're done."}
//             >
//               <CustomLocationPicker onSelect={handleLocationSelect} setOpenMap={setOpenMap} />
//             </CustomDialogBox>
//           </div>

//           <div className='flex flex-wrap justify-between sm:flex-row flex-col gap-3 mt-3'>
//             <CustomDialogBox
//               open={openStartTime}
//               onOpenChange={() => setOpenStartTime((prev) => !prev)}
//               trigger={
//                 <div className='sm:w-[45%]'>
//                   <CustomInput placeholder={'Start Time'} label={'Start Time'} value={showStartDate} readOnly />{' '}
//                 </div>
//               }
//               title={'Choose Event Start Time'}
//               description={"Choose start time of the event. Click on 'Done' when you're done."}
//             >
//               <CustomDateTimePicker
//                 type='static'
//                 onAccept={(value) => {
//                   setShowStartDate(value.toLocaleString('en-US', customOptions));
//                   setStartDate(value.toISOString());
//                 }}
//                 onClose={() => {
//                   setOpenStartTime(false);
//                 }}
//               />
//             </CustomDialogBox>
//             <CustomDialogBox
//               open={openEndTime}
//               onOpenChange={() => setOpenEndTime((prev) => !prev)}
//               trigger={
//                 <div className='sm:w-[45%]'>
//                   <CustomInput label={'End Time'} placeholder={'End Time'} value={showEndDate} readOnly />{' '}
//                 </div>
//               }
//               title={'Choose Event End Time'}
//               description={"Choose end time of the event. Click on 'Done' when you're done."}
//             >
//               <CustomDateTimePicker
//                 type='static'
//                 onAccept={(value) => {
//                   setShowEndDate(value.toLocaleString('en-US', customOptions));
//                   setEndDate(value.toISOString());
//                 }}
//                 onClose={() => {
//                   setOpenEndTime(false);
//                 }}
//               />
//             </CustomDialogBox>
//           </div>

//           <div className={`flex flex-wrap justify-between sm:flex-row flex-col gap-3 mt-3`}>
//             <CustomDropDown
//               placeholder={'Discount'}
//               columns={discountPercentageColumns}
//               onChange={(value) => {
//                 setDiscount(value);
//               }}
//               label={'Discount'}
//               id='discount'
//             />
//             <CustomDialogBox
//               open={openDiscountEndDate}
//               onOpenChange={() => setOpenDiscountEndDate((prev) => !prev)}
//               trigger={
//                 <div className='sm:w-[45%]'>
//                   <CustomInput label={'Discount End Time'} placeholder={'Discount End Time'} value={showDiscountEndDate} readOnly />{' '}
//                 </div>
//               }
//               title={'Choose Discount End Time'}
//               description={"Choose discount end time of the event. Click on 'Done' when you're done."}
//             >
//               <CustomDateTimePicker
//                 type='static'
//                 onAccept={(value) => {
//                   setShowDiscountEndDate(value.toLocaleString('en-US', customOptions));
//                   setDiscountEndDate(value.toISOString());
//                 }}
//                 onClose={() => {
//                   setOpenDiscountEndDate(false);
//                 }}
//               />
//             </CustomDialogBox>
//           </div>

//           <CustomButton btnText='Create' handleSubmit={handleSubmit} loading={loading} className={`mt-4 `} />
//         </form>
//       </div>
//     </div>
//   );
// }
