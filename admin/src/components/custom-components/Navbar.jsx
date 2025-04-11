import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, toggleDarkMode } from '../../store/slices/GlobalAppSettingSlice';
import { LightModeOutlined } from '@mui/icons-material';
import { useState } from 'react';
import CustomImg from './CustomImg';
import ProfileCard from './ProfileCard';
import CustomPopOver from './CustomPopOver';
import { IoIosChatbubbles } from 'react-icons/io';
import CustomChatModal from '@/components/custom-components/CustomChatModal';

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const admin = useSelector((state) => state.auth.admin);
  const isDarkMode = useSelector((state) => state.globalSetting.isDarkMode);

  const profileImg = admin?.profileImg ?? 'https://www.bing.com/th?id=OIP.87rC-vQdkf1I5qv74_2LjwHaHp&w=111&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2';
  const profileImgBlurHash = admin?.profileImgBlurHash;
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className='navbar h-14 sticky z-10 py-2 px-2 flex items-center shadow-md lg:shadow-none lg:border-b-2 lg:border-gray lg:dark:border-gray-800 w-full top-0 left-0 justify-between bg-white dark:bg-slate-950'>
      <div className='left flex space-x-2 items-center py-1 lg:py-0'>
        <div className='cursor-pointer lg:hidden' onClick={() => handleToggleSidebar()}>
          <MenuIcon className=' text-[#0c748f] ' />
        </div>
        <div className='Logo font-bold'>
          <span className=' text-[#0c748f] text-xl lg:hidden'>Edudoor</span>
        </div>
      </div>
      <div className='right flex items-center px-2 w-full justify-end py-1 '>
        <div className='navItems flex items-center space-x-5 md:space-x-10 lg:space-x-14 '>
          <CustomPopOver
            trigger={
              <div className='relative cursor-pointer text-black dark:text-white'>
                <IoIosChatbubbles className='text-black dark:text-white text-2xl' />
                <div className='h-4 w-4 text-sm font-bold text-white flex items-center justify-center bg-red-600 rounded-[50%] absolute -top-1 -right-1 select-none'>2</div>
              </div>
            }
          >
            <CustomChatModal />
          </CustomPopOver>

          <div className='relative cursor-pointer text-black dark:text-white' onClick={handleToggleDarkMode}>
            {!isDarkMode ? <DarkModeOutLinedIcon /> : <LightModeOutlined />}
          </div>
          <div onClick={handleShowProfile} className='w-7 h-7 cursor-pointer text-black dark:text-white select-none'>
            <CustomImg src={profileImg} blurHash={profileImgBlurHash} alt='profileImg' className='rounded-[50%] w-full aspect-square object-cover' />
          </div>
          <div className={`fixed top-12 overflow-hidden ${showProfile ? 'right-5 md:right-10 opacity-100' : '-right-[300%] md:-right-[100%] opacity-100'}  transition-all duration-500`}>
            <ProfileCard close={handleShowProfile} data={admin} />
          </div>
        </div>
      </div>
    </div>

    //   <ChatAdminsProvider>
    //     <ChatProvider>
    //  </ChatProvider>
    // </ChatAdminsProvider>
  );
};

export default Navbar;
