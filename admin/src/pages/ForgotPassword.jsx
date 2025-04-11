import CustomInput from '@/components/custom-components/CustomInput.jsx';
import FormWrapper from '@/components/custom-components/FormWrapper';
import GeneralPageWrapper from '@/wrappers/GeneralPageWrapper.jsx';
import { useState } from 'react';
import { forgotSentOtp, forgotVerifyOtp } from '../http/admin-service';
import { errorHandler } from '@/lib/utils';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuth } from '@/store/slices/AuthSlice.jsx';
import CustomOtpInput from '@/components/custom-components/CustomOtpInput.jsx';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [hashAndUsername, setHashAndUsername] = useState({});
  const [values, setValues] = useState({
    newPassword: '',
    confirmNewPassword: '',
    otp: null
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOTP = (value) => {
    setValues({ ...values, otp: +value });
  };

  const SendOtpFields = [
    {
      id: 'email',
      type: 'email',
      label: 'Username',
      value: username,
      onChange: (e) => setUsername(e.target.value),
      placeholder: 'username@example.com'
    }
  ];

  const VerifyOtpFields = [
    {
      id: 'newPassword',
      type: 'password',
      label: 'New Password',
      value: values.newPassword,
      onChange: (e) => setValues({ ...values, newPassword: e.target.value }),
      placeholder: 'Enter your new password'
    },
    {
      id: 'confirmNewPassword',
      type: 'password',
      label: 'Confirm Password',
      value: values.confirmNewPassword,
      onChange: (e) => setValues({ ...values, confirmNewPassword: e.target.value }),
      placeholder: 'Confirm your new password'
    }
  ];

  const isValidInputSendOtp = () => {
    if (!username) {
      errorHandler({ message: 'Username is required' });
      return false;
    }
    return true;
  };

  const handleSendOtpSubmit = async (e) => {
    e.preventDefault();

    if (!isValidInputSendOtp()) {
      return;
    }

    try {
      setLoading(true);
      const response = await forgotSentOtp({ username });
      setHashAndUsername(response.data);
      setIsOtpSent(!isOtpSent);
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  const isValidInputVerifyOtp = () => {
    if (!values.newPassword || !values.confirmNewPassword || !values.otp) {
      errorHandler({ response: { data: { message: 'Please fill all fields' } } });
      return false;
    }
    return true;
  };

  const handleVerifyOtpSubmit = async (e) => {
    e.preventDefault();

    if (!isValidInputVerifyOtp()) {
      return;
    }

    try {
      setLoading(true);
      const response = await forgotVerifyOtp({ ...hashAndUsername, ...values });
      dispatch(setAuth(response.data));
      navigate('/');
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GeneralPageWrapper>
      {!isOtpSent ? (
        <FormWrapper btnText={'Send OTP'} handleSubmit={handleSendOtpSubmit} label={'Forgot Password'} loading={loading} subTitle={'Enter your email associated with you account'}>
          {SendOtpFields.map((field) => (
            <div key={field.id} className='mb-4'>
              <CustomInput label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
            </div>
          ))}
        </FormWrapper>
      ) : (
        <FormWrapper
          btnText={'Verify OTP'}
          handleSubmit={handleVerifyOtpSubmit}
          label={'Forgot Password'}
          loading={loading} // title={'Enter Email'}
          subTitle={'We have sent a OTP to your email. Please enter the OTP to reset your password.'}
        >
          {hashAndUsername.username && (
            <p className='text-center font-semibold bg-gray-200 py-4 px-2 rounded-md text-gray-600 mb-2'>
              Enter OTP sent to <span className='font-extrabold text-gray-800'>{hashAndUsername.username}</span>
            </p>
          )}
          {VerifyOtpFields.map((field, idx) => (
            <div key={field.id} className={`${idx < VerifyOtpFields.length - 1 && 'mb-4'}`}>
              <CustomInput label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
            </div>
          ))}
          {values.newPassword !== values.confirmNewPassword ? <p className='text-red-500 mb-4 text-xs'>New Password and Confirm Password must be same.</p> : <div className='mb-4'></div>}

          <CustomOtpInput label={'OTP'} length={4} onChange={handleOTP} separator={true} />
          <div className='mb-4'></div>
        </FormWrapper>
      )}
    </GeneralPageWrapper>
  );
}

export default ForgotPassword;
