import { useContext } from 'react';
import { OnlineContext } from '@/contexts/OnlineContext';
import CustomImg from './CustomImg';

const CustomListChatTile = ({ id, avatar, title, subtitle, blurHash }) => {
  const { onlineUsers } = useContext(OnlineContext);
  const isOnline = onlineUsers.includes(id);

  return (
    <div className={`flex items-start justify-between p-2  bg-transparent cursor-pointer group`}>
      <div className='mr-4 relative flex items-start justify-center'>
        <CustomImg blurHash={blurHash} src={avatar} className={`min-w-12 max-w-12 h-12 rounded-full border-2 self-center border-gray-50 bg-red-100`} alt='Avatar' />
        <div className={`w-3 h-3 rounded-full -right-1 bottom-[12%] absolute ring-2 ring-white z-20  ${isOnline ? 'bg-green-600' : 'bg-blue-600'}`}></div>
      </div>
      <div className='overflow-x-hidden flex-grow justify-self-start'>
        <h2 className={`font-semibold text-lg`}>{title}</h2>
        <p className={`text-gray-600 truncate text-xs font-bold`}> {subtitle}</p>
      </div>
    </div>
  );
};

export default CustomListChatTile;
