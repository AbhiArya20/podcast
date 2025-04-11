// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/custom-components/Navbar";
// import EmployerTable from "../../components/UserTable";
// import { REACT_APP_API_URL } from "../../envConfig";

// const api = axios.create({
//   baseURL: REACT_APP_API_URL,
//   withCredentials: true,
// });

// const FraudAlert = () => {
//   const [inputData, setInputData] = useState({
//     isJobSeeker: "true",
//     message: "",
//   });

//   const handleData = (e) => {
//     const { name, value } = e.target;
//     setInputData({ ...inputData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     api
//       .post("/fraud-alerts", inputData)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const [fraud, setFraud] = useState([]);
//   const getFraud = async () => {
//     try {
//       const eResponse = await api.get("/fraud-alerts");
//       setFraud(eResponse.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getFraud();
//   }, []);

//   // Function to format date-time to Indian standard
//   const formatIndianDateTime = (dateTimeString) => {
//     const options = {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//       timeZone: "Asia/Kolkata",
//     };
//     return new Date(dateTimeString).toLocaleString("en-IN", options);
//   };

//   const columns = [
//     {
//       name: "Message",

//       cell: (row) => (
//         <div className="flex space-x-1">
//           <div className="w-auto">{row.message ?? "empty"}</div>
//         </div>
//       ),
//     },
//     {
//       name: "id",
//       selector: (row) => row._id,
//       sortable: true,
//     },
//     {
//       name: "Reported On",
//       selector: (row) => formatIndianDateTime(row.createdAt),
//     },
//   ];

//   return (
//     <div className="flex w-screen mb-10 lg:mb-0">
//       <Sidebar />
//       <div className="w-full h-screen overflow-scroll">
//         <Navbar />
//         <div className="w-full h-screen text-black">
//           <h1 className="mt-2 ml-3 text-2xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-3xl dark:text-white">
//             Fraud Alerts
//           </h1>

//           <div className="p-3">
//             <div className="mb-5 mt-0">
//               <label
//                 htmlFor="status"
//                 className="block text-lg mb-2 border-black"
//               >
//                 Status:
//               </label>
//               <select
//                 name="isJobSeeker"
//                 value={inputData.isJobSeeker}
//                 onChange={handleData}
//                 className="w-full overflow:hidden border-black border-2 rounded p-2 bg-white"
//               >
//                 <option value="true">Job Seeker</option>
//                 <option value="false">Employer</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-lg mb-2">
//                 Message:
//               </label>
//               <textarea
//                 name="message"
//                 value={inputData.message}
//                 onChange={handleData}
//                 className="w-full border-black border-2 rounded p-2"
//                 rows="6"
//               ></textarea>
//             </div>
//             <button
//               onClick={handleSubmit}
//               className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//             <h3 className="mt-2 mb-2 ml-3 text-lg font-bold leading-none text-center tracking-tight text-gray-600 md:text-2xl lg:text-2xl dark:text-white">
//               Reported Fraud Alerts
//             </h3>

//             <EmployerTable column={columns} data={fraud} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FraudAlert;
