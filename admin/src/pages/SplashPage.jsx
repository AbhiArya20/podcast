import { Box, LinearProgress } from '@mui/material';

function SplashPage() {
  return (
    <div className='flex justify-center items-center bg-blue-200 h-screen select-none'>
      <div className='w-1/4'>
        <img src='/edudoorlogo.png'></img>
        <h1 className='text-2xl font-semibold text-center text-blue-900'>Edudoor</h1>
        <p className='text-center text-blue-900 font-medium text-xs md:text-sm mb-4'>Door Of All Academic Solution</p>
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      </div>
    </div>
  );
}

export default SplashPage;
