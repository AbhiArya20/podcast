import { nanoid } from 'nanoid';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../ui/input-otp';

export default function CustomOtpInput({ label, length, onChange, separator }) {
  const items = [];
  for (let i = 0; i < length; i++) {
    const id = nanoid();
    items.push(id);
  }
  return (
    <>
      <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>{label}</label>
      <InputOTP maxLength={length} onChange={onChange}>
        {items.map((item, idx) => (
          <>
            <InputOTPGroup key={item}>
              <InputOTPSlot index={idx} className='border-gray-300 dark:border-slate-700 text-black dark:text-white dark:bg-slate-900' />
            </InputOTPGroup>
            {idx < length - 1 && separator && <InputOTPSeparator className='text-black dark:text-white' />}
          </>
        ))}
      </InputOTP>
    </>
  );
}
