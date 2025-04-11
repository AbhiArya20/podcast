import GeneralRoute from '@/components/routes-wrapper/GeneralRoute';

import { Toaster } from 'react-hot-toast';

export default function GeneralPageWrapper({ children }) {
  return (
    <GeneralRoute>
      <div className='h-full w-full'>{children}</div>
      <Toaster position='top-center' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
    </GeneralRoute>
  );
}
