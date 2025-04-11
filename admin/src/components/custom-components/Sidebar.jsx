import CloseIcon from '@mui/icons-material/Close';

import HomeIcon from '@mui/icons-material/HomeOutlined';
import MainDashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../store/slices/GlobalAppSettingSlice';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '@/http/admin-service';
import { setAuth } from '@/store/slices/AuthSlice';
import { errorHandler } from '@/lib/utils';
import { useContext, useState } from 'react';
import { SocketContext } from '@/web-socket/SocketContext';
import WorkIcon from '@mui/icons-material/Work';
import { MdSupportAgent } from 'react-icons/md';
import CategoryIcon from '@mui/icons-material/Category';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import { IoContract } from 'react-icons/io5';
import { FaPeopleRoof } from 'react-icons/fa6';
import TaskIcon from '@mui/icons-material/Task';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const Sidebar = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSidebarVisible = useSelector((state) => state.globalSetting.showSidebar);
  const isRootAdmin = useSelector((state) => state.auth?.admin?.isRootAdmin);

  const hideSidebar = (e) => {
    e.stopPropagation();
    dispatch(toggleSidebar());
  };

  const menus = [
    {
      to: '/',
      icon: isRootAdmin ? <MainDashboardIcon /> : <MdSupportAgent />,
      label: isRootAdmin ? 'Dashboard' : 'Supports',
      isSection: false
    },

    {
      isSection: true,
      label: 'EMPLOYER'
    },

    {
      to: '/employer',
      icon: <HomeIcon />,
      label: 'Home',
      isSection: false
    },
    {
      to: '/employer/list',
      icon: <PeopleAltOutlinedIcon />,
      label: 'Users',
      isSection: false
    },
    {
      to: '/employer/special_db_credit',
      icon: <AccountCircleRoundedIcon />, // change icon
      label: 'Special DB Credit',
      isSection: false
    },
    {
      to: '/employer/packages',
      icon: <AccountCircleRoundedIcon />, // change icon
      label: 'Packages',
      isSection: false
    },
    {
      to: '/employer/feedback',
      icon: <AccountCircleRoundedIcon />, // change icon
      label: 'All Feedbacks',
      isSection: false
    },
    {
      isSection: true,
      label: 'JOB SEEKER'
    },
    {
      to: '/jobseeker',
      icon: <HomeIcon />, // change icon
      label: 'Home',
      isSection: false
    },
    {
      to: '/jobseeker/list',
      icon: <PeopleAltOutlinedIcon />,
      label: 'Users',
      isSection: false
    },

    {
      to: '/jobseeker/resume-services',
      icon: <PeopleAltOutlinedIcon />,
      label: 'Resume Services',
      isSection: false
    },
    {
      isSection: true,
      label: 'OPTIONS'
    },
    {
      to: '/options/job-title',
      icon: <WorkIcon />,
      label: 'Job Title',
      isSection: false
    },
    {
      to: '/options/course-category',
      icon: <CategoryIcon />,
      label: 'Course Category',
      isSection: false
    },
    {
      to: '/options/facility',
      icon: <GppGoodRoundedIcon />,
      label: 'Facility',
      isSection: false
    },

    {
      isSection: true,
      label: 'OTHERS'
    },

    {
      to: '/events',
      icon: <Diversity3Icon />,
      label: 'Events',
      isSection: false
    },
    {
      to: '/others/fraud_alerts',
      icon: <AccountCircleRoundedIcon />,
      label: 'Fraud Alerts',
      isSection: false
    },
    {
      to: '/others/feedbacks',
      icon: <AccountCircleRoundedIcon />,
      label: 'Feedbacks',
      isSection: false
    },
    {
      to: '/terms-conditions-privacy-policy',
      icon: <TaskIcon />,
      label: 'Terms and Conditions',
      isSection: false
    },
    {
      isSection: true,
      label: 'ACTIONS'
    },
    {
      to: '/admins/change_password',
      icon: <AccountCircleRoundedIcon />,
      label: 'Change Password',
      isSection: false
    }
  ];

  if (isRootAdmin) {
    menus.splice(1, 0, {
      to: '/admins',
      icon: <AccountCircleRoundedIcon />,
      label: 'Admins',
      isSection: false
    });
  }

  const { disconnectSocket } = useContext(SocketContext);

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await logout();
      disconnectSocket();
      dispatch(setAuth(response.data));
      navigate('/login');
    } catch (error) {
      errorHandler(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`sidebar z-20 h-screen fixed whitespace-nowrap lg:relative lg:bg-transparent lg:dark:bg-transparent bg-white dark:bg-slate-950 top-0 ${isSidebarVisible ? 'left-0' : 'left-[-300px]'} lg:left-0 w-72 lg:w-72 overflow-y-auto overflow-x-hidden shadow-lg lg:shadow-none lg:border-r-2  lg:border-grey lg:dark:border-gray-800 transition-[left] duration-1000 ease-in-out no-scrollbar`}
    >
      <div className='sidebar_top sticky top-0 z-20'>
        <div className='flex items-center justify-between text-xl border-b-2 h-14 border-gray dark:border-gray-800 bg-white dark:bg-slate-950'>
          <Link to={'/'}>
            <div className='p-2.5 mt-1 flex items-center'>
              <img src={'/edudoorlogo.png'} alt='' className='w-6 h-6 mr-2 cursor-pointer ml-2' />
              <h1 className='font-bold text-[#0c748f] text-basic ml-3'>Edudoor</h1>
            </div>
          </Link>
          <div className='lg:hidden' onClick={(e) => hideSidebar(e)}>
            <CloseIcon className='text-[#0c748f] mr-5 cursor-pointer' />
          </div>
        </div>
      </div>

      <div className='sidebar_center text-base pl-2'>
        <ul>
          {menus.map((menu, idx) =>
            menu.isSection ? (
              <li key={idx}>
                <p className='text-[10px] font-bold text-[#999] mt-2 mb-1 pl-2.5 lg:pl-1'>{menu.label}</p>
              </li>
            ) : (
              <li key={menu.to} onClick={hideSidebar} className='group'>
                <Link to={menu.to}>
                  <div className='p-2.5 lg:p-1.5 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:pl-3 hover:bg-blue-100 text-[#0c748f]'>
                    {menu.icon}
                    <span className='text-xl lg:text-base text-black dark:text-blue-100 group-hover:dark:text-black ml-4 lg:ml-2'>{menu.label}</span>
                  </div>
                </Link>
              </li>
            )
          )}

          <li onClick={handleLogout} className='group'>
            <div className='p-2.5 mb-8 lg:p-1.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:pl-3 hover:bg-blue-100 text-[#0c748f]'>
              <LogoutOutlinedIcon />
              <span className='text-xl lg:text-base ml-4 lg:ml-2 text-black dark:text-blue-100 group-hover:dark:text-black'>{!loading ? 'Logout' : 'Logging out..'}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
