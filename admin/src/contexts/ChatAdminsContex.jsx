// import { getAdmins } from '@/http/admin-service';
// import { errorHandler } from '@/lib/utils';
// import { createContext, useEffect, useRef, useState } from 'react';
// // import { useInfiniteScroll } from 'react-infinite-scroll-hook';

// export const ChatAdminsContext = createContext();

// const ChatAdminsProvider = ({ children }) => {
//   const [chatAdmins, setChatAdmins] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [searchValue, setSearchValue] = useState('');

//   const addNewChatRef = useRef(null);
//   const addNewGroupRef = useRef(null);

//   const fetchData = async () => {
//     try {
//       const searchParams = new URLSearchParams({
//         search: searchValue,
//         page: page
//       });
//       const response = await getAdmins(searchParams.toString());
//       if (response.data.admins.length === 0) {
//         setHasMore(false);
//       } else {
//         setChatAdmins((prev) => [...prev, ...response.data.admins]);
//         setPage((prev) => prev + 1);
//       }
//     } catch (error) {
//       errorHandler(error);
//     }
//   };

//   const addNewChatInfiniteScrollRef1 = '';

//   // useInfiniteScroll({
//   //   loading: true, // Set to true if you are loading more items
//   //   hasNextPage: hasMore, // Set to false if there are no more items to load
//   //   onLoadMore: fetchData,
//   //   scrollContainer: addNewChatRef
//   // });

//   const addNewGroupInfiniteScrollRef2 = '';

//   // useInfiniteScroll({
//   //   loading: true, // Set to true if you are loading more items
//   //   hasNextPage: hasMore, // Set to false if there are no more items to load
//   //   onLoadMore: fetchData,
//   //   scrollContainer: addNewGroupRef
//   // });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <ChatAdminsContext.Provider value={{ chatAdmins, fetchData, hasMore, addNewChatRef, addNewGroupRef, addNewChatInfiniteScrollRef1, addNewGroupInfiniteScrollRef2 }}>
//       {children}
//     </ChatAdminsContext.Provider>
//   );
// };

// export default ChatAdminsProvider;
