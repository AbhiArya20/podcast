// import { getChats } from '@/http';
// import { errorHandler, formatDateTime } from '@/lib/utils';
// import { createContext, useCallback, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// export const ChatContext = createContext();

// const ChatProvider = ({ children }) => {
//   const id = useSelector((state) => state.auth.admin?._id);

//   const [chats, setChats] = useState([]);
//   const [searchedChats, setSearchedChats] = useState([]);
//   const [searchValue, setSearchValue] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [chatMessageMap, setChatMessageMap] = useState({});

//   const transformChats = useCallback(
//     (chats) =>
//       chats.map((chat) => {
//         let oppositePerson = chat?.members?.filter((member) => member.id !== id);
//         if (oppositePerson.length) oppositePerson = oppositePerson[0];
//         else oppositePerson = null;

//         const isGroupChat = chat?.isGroupChat;
//         const avatars = isGroupChat ? chat?.members.slice(0, 3).map(({ profileImg }) => profileImg) : [oppositePerson?.profileImg];
//         const chatName = isGroupChat ? chat.chatName : oppositePerson?.name ?? 'Unknown';
//         const lastMessage = chat?.latestMessage
//           ? `${chat.isGroupChat ? `${`${chat.latestMessage?.sender?.name.split(' ')[0]}: ` ?? ''}` : ''}${chat.latestMessage.content ?? chat.latestMessage.attachment?.attachmentType ?? ''}`
//           : '';
//         let lastTime = chat?.latestMessage ? (chat.latestMessage.createdAt ? new Date(chat.latestMessage.createdAt) : '') : '';
//         lastTime = formatDateTime(lastTime);
//         const newChat = {
//           _id: chat._id,
//           chat: chat,
//           avatars,
//           chatName,
//           lastMessage,
//           lastTime
//         };
//         if (!isGroupChat) {
//           (newChat.username = oppositePerson?.username), (newChat.phone = oppositePerson?.phone), (newChat.oppositeUserId = oppositePerson._id), (newChat.oppositePerson = oppositePerson);
//         }
//         return newChat;
//       }),
//     []
//   );

//   const onSearchChange = (e) => {
//     setMessage('');
//     let newChats = transformChats(chats);
//     newChats = newChats.filter((chat) => {
//       let includes = false;

//       includes = includes || chat.chatName?.includes(e.target.value);

//       if (!chat.isGroupChat) {
//         includes = includes || chat.username?.includes(e.target.value);
//         includes = includes || chat.phone?.includes(e.target.value);
//       }
//       return includes;
//     });

//     if (newChats.length === 0) {
//       setMessage('No Chats Available');
//     }
//     setSearchValue(e.target.value);
//     setSearchedChats(newChats);
//   };

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setMessage('');
//         const response = await getChats();
//         setChats(response.data.chats);
//         setSearchedChats(transformChats(response.data.chats));
//         if (response.data.chats?.length == 0) {
//           setMessage('No Chats Available');
//         }
//       } catch (error) {
//         setMessage('Something went wrong');
//         errorHandler(error, setMessage);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return (
//     <ChatContext.Provider value={{ chats: searchedChats, setChats, chatLoading: loading, chatMessage: message, searchValue, onSearchChange, chatMessageMap, setChatMessageMap }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export default ChatProvider;
