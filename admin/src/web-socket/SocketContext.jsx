import { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '../envConfig';
import { useSelector } from 'react-redux';

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const disconnectSocket = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
    }
  };

  useEffect(() => {
    if (isAuth) {
      const newSocket = io(SOCKET_URL, { withCredentials: true }); // Replace with your socket server URL
      setSocket(newSocket);
    } else {
      disconnectSocket();
    }
    return () => {
      disconnectSocket();
    };
  }, [isAuth]);

  return <SocketContext.Provider value={{ socket, disconnectSocket, setSocket }}>{children}</SocketContext.Provider>;
};

export { SocketProvider, SocketContext };
