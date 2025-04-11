import { SocketContext } from '@/web-socket/SocketContext';
import { ONLINE_USERS } from '@/web-socket/events';
import { createContext, useContext, useState } from 'react';

export const OnlineContext = createContext();

const OnlineProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { socket } = useContext(SocketContext);
  socket?.on(ONLINE_USERS, (onlineAdmins) => {
    setOnlineUsers(onlineAdmins);
  });
  return <OnlineContext.Provider value={{ onlineUsers }}>{children}</OnlineContext.Provider>;
};

export default OnlineProvider;
