import Sidebar from '../components/custom-components/Sidebar';
import Navbar from '../components/custom-components/Navbar';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from '../components/routes-wrapper/PrivateRoute';
import { SocketProvider } from '../web-socket/SocketContext';
import OnlineProvider from '@/contexts/OnlineContext';
import { motion } from 'framer-motion';

export default function PrivatePageWrapper({ children }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };
  return (
    <PrivateRoute>
      <SocketProvider>
        <OnlineProvider>
          <div className='flex w-screen h-full mb-10 lg:mb-0'>
            <Sidebar />
            <div className='w-full h-screen no-scrollbar overflow-y-auto'>
              <Navbar />
              <motion.div initial='hidden' animate='visible' exit='exit' variants={variants} transition={{ duration: 1 }} className='flex'>
                <div className='w-full private-wrapper'>{children}</div>
              </motion.div>
            </div>
          </div>
          <Toaster position='top-center' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='dark' />
        </OnlineProvider>
      </SocketProvider>
    </PrivateRoute>
  );
}
