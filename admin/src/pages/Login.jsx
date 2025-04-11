import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/slices/AuthSlice';
import { Link } from 'react-router-dom';
import CustomInput from '../components/custom-components/CustomInput';
import GeneralPageWrapper from '@/wrappers/GeneralPageWrapper';
import { errorHandler } from '@/lib/utils';
import { login } from '../http/admin-service';
import FormWrapper from '@/components/custom-components/FormWrapper';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemember = (value) => {
    setValues({ ...values, rememberMe: value });
  };

  const isValidInput = () => {
    if (!values.username || !values.password) {
      errorHandler({ message: 'Please fill all fields' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidInput()) {
      return;
    }

    setLoading(true);
    try {
      const response = await login(values);
      dispatch(setAuth(response.data));
      navigate('/');
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      id: 'email',
      type: 'email',
      label: 'Username',
      value: values.username,
      onChange: (e) => setValues({ ...values, username: e.target.value }),
      placeholder: 'username@example.com'
    },
    {
      id: 'password',
      type: 'password',
      label: 'Password',
      value: values.password,
      onChange: (e) => setValues({ ...values, password: e.target.value }),
      placeholder: 'Enter your password'
    }
  ];

  return (
    <GeneralPageWrapper>
      <FormWrapper btnText={'Login'} handleSubmit={handleSubmit} label={'Login'} loading={loading} title={'Welcome Back'} subTitle={'Please Sign in to continue'}>
        <>
          {fields.map((field, idx) => (
            <div key={field.id} className={`${idx < fields.length - 1 && 'mb-4'}`}>
              <CustomInput label={field.label} id={field.id} type={field.type} placeholder={field.placeholder} value={field.value} onChange={field.onChange} />
            </div>
          ))}

          <div className='flex justify-between items-center mt-4 mb-8 flex-wrap gap-4'>
            <div className='flex items-center justify-center space-x-2'>
              <Checkbox id='terms' checked={values.rememberMe} onCheckedChange={handleRemember} />
              <label htmlFor='terms' className='text-sm text-gray-600 dark:text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Remember Me
              </label>
            </div>
            <div>
              <Link to={'/forgot-password'} className='text-sm block  text-blue-600 dark:text-blue-400'>
                Forgot Password?
              </Link>
            </div>
          </div>
        </>
      </FormWrapper>
    </GeneralPageWrapper>
  );
};

export default Login;
