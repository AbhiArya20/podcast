import CustomButton from './CustomButton';
import '@/assets/css/login.css';
import { AnimatePresence, motion } from 'framer-motion';

function FormWrapper({ children, btnText, handleSubmit, label, loading, title, subTitle }) {
  const variants = {
    initial: () => ({
      opacity: 0
    }),
    animate: {
      opacity: 1
    },
    exit: () => ({
      opacity: 0
    })
  };

  return (
    <div className='flex items-center justify-center gradient-background w-full h-full'>
      <div className='flex justify-between md:min-h-[80vh] sm:max-w-[70%] overflow-hidden relative  bg-[#5d4ef3] rounded-3xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] md:flex-row flex-col-reverse'>
        <div className='circle-ripple'></div>
        <div className='hidden md:block'>
          <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-white text-3xl font-bold'>Edudoor</h1>
            <p className='text-sm text-white font-roboto'>Door of all academic solution</p>
            <div className='w-[60%] h-[60%]'>
              <lottie-player
                src='https://lottie.host/38642ee2-f784-4b05-bfef-924bbd3ca873/wR1n07IA3c.json'
                background='##fff'
                speed='3'
                style={{ width: '100%', height: '100%' }}
                loop
                autoplay
                mode='normal'
              ></lottie-player>
            </div>
            <p className='text-sm text-white font-roboto px-4'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
          </div>
        </div>
        <AnimatePresence>
          <motion.div className='px-8 py-6 md:w-1/2 bg-white dark:bg-slate-950 sm:flex-shrink-0 flex-2' variants={variants} initial='initial' animate='animate' transition={{ duration: 1 }}>
            <h1 className='text-2xl font-bold text-center mb-4 dark:text-gray-200'>{label}</h1>
            <form>
              <div className='flex justify-center flex-col'>
                <div className='flex justify-center mb-4'>
                  <img src='/edudoorlogo.png' alt='login' className='object-cover h-16 w-20' />
                </div>

                <h1 className='text-gray-600 dark:text-white text-center font-bold text-2xl'>{title}</h1>
                <p className='text-gray-600 dark:text-gray-400 text-center mb-4'>{subTitle}</p>
              </div>
              {children}
              <CustomButton loading={loading} btnText={btnText} handleSubmit={handleSubmit} />
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FormWrapper;
