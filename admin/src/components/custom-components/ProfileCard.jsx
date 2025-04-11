import CustomChip from './CustomChip';
import { useDispatch } from 'react-redux';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { logout } from '@/http/admin-service';
import { setAuth } from '@/store/slices/AuthSlice';
import { capitalizeWords, errorHandler } from '@/lib/utils';
import { Call } from '@mui/icons-material';
import { FaPenToSquare } from 'react-icons/fa6';
import { MdPersonOff } from 'react-icons/md';
import { BsPersonFillCheck } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { BiMaleFemale } from 'react-icons/bi';
import { MdPerson, MdPerson3 } from 'react-icons/md';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import React from 'react';
import { OnlineContext } from '@/contexts/OnlineContext';
import { SocketContext } from '@/web-socket/SocketContext';
import CustomImg from './CustomImg';

const ProfileCard = ({ close, data }) => {
  const curAdmin = useSelector((state) => state.auth.admin);
  const { onlineUsers } = useContext(OnlineContext);
  const isOnline = onlineUsers.includes(data?._id);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = data?.name;
  const username = data?.username;
  const phone = data?.phone;
  const profileImg = data?.profileImg;
  const profileImgBlurHash = data?.profileImgBlurHash;
  const idProof = data?.idProof;
  const idProofBlurHash = data?.idProofBlurHash;
  const isWriteAccess = data?.isWriteAccess ?? false;
  const status = data?.status;
  const gender = data?.gender;

  const chips = [
    {
      id: nanoid(),
      isRootView: curAdmin?.isRootAdmin,
      label: 'Admin',
      color: 'success',
      avatar: <BsPersonFillCheck className='text-white text-base' />
    },
    {
      id: nanoid(),
      isRootView: true,
      label: isWriteAccess ? 'Read & Write Access' : 'Read Only Access',
      color: isWriteAccess ? 'secondary' : 'primary',
      avatar: <FaPenToSquare className='text-white text-base' />
    },
    {
      id: nanoid(),
      isRootView: curAdmin?.isRootAdmin,
      label: capitalizeWords(status),
      color: status == 'active' ? 'primary' : status == 'blocked' ? 'warning' : 'error',
      avatar: <MdPersonOff className='text-white text-base' />
    }
  ];

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

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    toast.success('Phone Number copied successfully');
  };

  return (
    <div className={`relative max-w-[95vw] sm:max-w-md mx-auto bg-gray-200 shadow-2xl dark:bg-slate-900 rounded-xl overflow-hidden`} onMouseLeave={close}>
      <div className={`p-3`}>
        <div className='w-full'>
          <div className='flex 4 flex-wrap justify-start items-center'>
            <div className='relative select-none'>
              <CustomImg src={profileImg} blurHash={profileImgBlurHash} className='w-16 h-16 rounded-full mr-4 ring-2 ring-white' alt='Profile' />
              <div className={`w-4 h-4 rounded-full absolute bottom-2 right-4 ring-2 ring-white ${isOnline ? 'bg-green-600' : 'bg-blue-600'}`}></div>
            </div>
            <div>
              <div className='flex items-center gap-2 text-black dark:text-white font-extrabold text-xl text-center sm:text-start capitalize'>
                <span className={'dark:text-white text-black'}>{name}</span>
                <span>{gender === 'Male' ? <MdPerson className='text-blue-700' /> : gender === 'Female' ? <MdPerson3 className='text-pink-700' /> : <BiMaleFemale className='text-gray-500' />}</span>
              </div>
              <p className='text-slate-600 dark:text-slate-400 font-semibold'>{username}</p>
            </div>
          </div>
          <div className='flex gap-2 my-3 justify-start items-center flex-wrap'>
            {chips.map((chip) => (
              <React.Fragment key={chip.id}>{chip.isRootView && <CustomChip key={chip.id} avatar={chip.avatar} label={chip.label} color={chip.color} />}</React.Fragment>
            ))}
          </div>

          <div className={`w-full flex items-center justify-between rounded-lg p-3 mb-3 shadow-lg cursor-pointer bg-slate-950 text-white`} onClick={copyPhone}>
            <span className='text-base ml-4 lg:ml-2'>{phone}</span>
            <Call />
          </div>
        </div>
        <div className='rounded-lg overflow-hidden mb-2'>
          <CustomImg src={idProof} blurHash={idProofBlurHash} className='object-fit w-full aspect-video' alt='idProof' />
        </div>

        <div className='flex items-center rounded-lg p-3 shadow-lg cursor-pointer bg-red-600 hover:bg-red-700 text-white' onClick={handleLogout}>
          <LogoutOutlinedIcon />
          <span className='text-2xl lg:text-base ml-4 lg:ml-2'>{!loading ? 'Logout' : 'Logging out..'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
