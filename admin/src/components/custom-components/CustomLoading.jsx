import { Box, LinearProgress } from '@mui/material';

export default function CustomLoading() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full gap-6'>
      <div className='flex justify-center items-center relative'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-900 dark:border-gray-200'></div>
        <div className='text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-blue-400 flex flex-col text-center'>
          <span>Edudoor</span>
          <span className='text-xs dark:text-gray-200 text-gray-900'>Loading...</span>
        </div>
      </div>
    </div>
  );
}
