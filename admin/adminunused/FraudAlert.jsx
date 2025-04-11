// import { useState, useEffect } from "react";
// import CustomTable from "@/components/custom-components/CustomTable";
// import PrivatePageWrapper from "@/wrappers/PrivatePageWrapper";
// import { createFraudAlert, getFraudAlert } from "@/http/index";
// import { toast } from "react-hot-toast";

// const FraudAlert = () => {
//     const [inputData, setInputData] = useState({
//         message: "",
//         isJobseeker: "true",
//     });

//     const handleData = (e) => {
//         const { name, value } = e.target;
//         setInputData({ ...inputData, [name]: value });
//     };

//     const handleSubmit = async () => {
//         try {
//             const response = await createFraudAlert(inputData);
//             console.log(response);
//             toast.success("Fraud Alert created successfully!");
//             getFraud();
//         } catch (error) {
//             toast.error("Something went wrong!😔 ,Try again");
//             console.error(error);
//         }
//     };

//     const [fraud, setFraud] = useState([]);
//     const getFraud = async () => {
//         try {
//             const response = await getFraudAlert();
//             console.log(response);
//             setFraud(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         getFraud();
//     }, []);

//     // Function to format date-time to Indian standard
//     const formatIndianDateTime = (dateTimeString) => {
//         const options = {
//             year: "numeric",
//             month: "short",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//             second: "2-digit",
//             hour12: true,
//             timeZone: "Asia/Kolkata",
//         };
//         return new Date(dateTimeString).toLocaleString("en-IN", options);
//     };

//     const columns = [
//         {
//             name: "Message",

//             cell: (row) => (
//                 <div className="flex space-x-1">
//                     <div className="w-auto">{row.message ?? "empty"}</div>
//                 </div>
//             ),
//             key: "message",
//         },
//         {
//             name: "Reported On",
//             selector: (row) => formatIndianDateTime(row.createdAt),
//             key: "createdAt",
//         },
//     ];

//     return (
//         <PrivatePageWrapper>
//             <div className="flex w-auto">
//                 <div className="w-auto overflow-scroll">
//                     <div className="w-full h-screen text-black">
//                         <h1 className="mt-2 ml-3 text-2xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-3xl dark:text-white">Fraud Alerts</h1>

//                         <div className="p-3">
//                             <div className="mb-4">
//                                 <label htmlFor="message" className="block text-lg mb-2  dark:text-white">
//                                     Message:
//                                 </label>
//                                 <textarea name="message" value={inputData.message} onChange={handleData} className="w-full border-black border-2 rounded p-2" rows="6"></textarea>
//                             </div>
//                             <button onClick={handleSubmit} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                                 Submit
//                             </button>
//                             <h3 className="mt-2 mb-2 ml-3 text-lg font-bold leading-none text-center tracking-tight text-gray-600 md:text-2xl lg:text-2xl dark:text-white">Reported Fraud Alerts</h3>

//                             <CustomTable columns={columns} data={fraud} expandableRowsComponent={expandableRowsComponent} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </PrivatePageWrapper>
//     );
// };

// function expandableRowsComponent() {
//     return <div></div>;
// }

// export default FraudAlert;
