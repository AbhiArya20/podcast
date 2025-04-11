// import CustomInput from '@/components/custom-components/CustomInput';
// import FormWrapper from '@/components/custom-components/FormWrapper';
// import { validateMessage } from '@/constants/options';
// import { changePassword } from '@/http/admin-service';
// import { errorHandler } from '@/lib/utils';
// import { setAuth } from '@/store/slices/AuthSlice';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';

// export default function ChangePassword() {
//   const [loading, setLoading] = useState(false);
//   const [values, setValues] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmNewPassword: ''
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleCurrentPassword = (e) => {
//     setValues({ ...values, oldPassword: e.target.value });
//   };

//   const handleNewPassword = (e) => {
//     setValues({ ...values, newPassword: e.target.value });
//   };

//   const handleConfirmNewPassword = (e) => {
//     setValues({ ...values, confirmNewPassword: e.target.value });
//   };

//   const fields = [
//     {
//       id: 'currentPassword',
//       type: 'password',
//       label: 'Current Password',
//       value: values.oldPassword,
//       onChange: handleCurrentPassword,
//       placeholder: 'Enter your current password'
//     },
//     {
//       id: 'newPassword',
//       type: 'password',
//       label: 'New Password',
//       value: values.newPassword,
//       onChange: handleNewPassword,
//       placeholder: 'Enter your new password'
//     },
//     {
//       id: 'confirmNewPassword',
//       type: 'password',
//       label: 'Confirm Password',
//       value: values.confirmNewPassword,
//       onChange: handleConfirmNewPassword,
//       placeholder: 'Confirm your new password'
//     }
//   ];

//   const isValidInput = () => {
//     if (!values.newPassword || !values.confirmNewPassword || !values.oldPassword) {
//       errorHandler({ response: { data: { message: validateMessage } } });
//       return false;
//     }
//     return true;
//   };

//   const handleVerifyOtpSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidInput()) {
//       return;
//     }
//     try {
//       setLoading(true);
//       const response = await changePassword(values);
//       dispatch(setAuth(response.data));
//       navigate('/');
//     } catch (error) {
//       errorHandler(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <PrivatePageWrapper>
//       <FormWrapper btnText={'Submit'} handleSubmit={handleVerifyOtpSubmit} label={'Change Password'} loading={loading} subTitle={'Update you password here'}>
//         {fields.map((field, idx) => (
//           <div key={field.id} className={`${idx < fields.length - 1 && 'mb-6'}`}>
//             <CustomInput key={field.id} label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
//           </div>
//         ))}
//         {values.newPassword !== values.confirmNewPassword ? <p className='text-red-500 mb-4 text-xs'>New Password and Confirm Password must be same.</p> : <div className='mb-6'></div>}
//       </FormWrapper>
//     </PrivatePageWrapper>
//   );
// }
