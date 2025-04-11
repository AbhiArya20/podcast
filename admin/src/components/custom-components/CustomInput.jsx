import { useState } from 'react';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';

function CustomInput({ label, id, type = 'text', placeholder, value, className, currentLength, maxLength, onChange, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      {label && (
        <label htmlFor={id} className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
          {label}
        </label>
      )}
      <div className='relative'>
        <input
          value={value}
          type={type.toLocaleLowerCase() === 'password' ? (showPassword ? 'text' : type) : type}
          id={id}
          className={`shadow-sm dark:bg-slate-900 dark:text-white rounded-md w-full px-3 py-2 border border-gray-300 dark:border-slate-700 focus:outline-none autofill:bg-white dark:autofill:bg-slate-950 bg-light dark:bg-dark ${type.toLocaleLowerCase() === 'password' && 'pr-8'} ${currentLength > maxLength && 'border-red-500'} ${className}`}
          placeholder={placeholder}
          onChange={(e) => {
            if (e.target.value.length > maxLength) return;
            onChange(e);
          }}
          {...rest}
        ></input>
        {type.toLocaleLowerCase() === 'password' && (
          <span className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer dark:text-gray-500' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEye /> : <IoEyeOff />}
          </span>
        )}
      </div>
      {maxLength ? <span className='text-xs flex justify-end mr-2 text-gray-400'>{`${currentLength}/${maxLength}`}</span> : <></>}
    </div>
  );
}

export default CustomInput;
