// import { useEffect, useState, useCallback } from "react";

// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// //import { Label, Select } from "@windmill/react-ui";

// import { getTeachingSubject, updateTeachingSubject } from "../../http";
// import { createTeachingSubject } from "../../http";
// import { toast } from "react-hot-toast";
// import PrivatePageWrapper from "@/wrappers/PrivatePageWrapper";
// import CustomTable from "@/components/custom-components/CustomTable";
// import CustomInput from "@/components/custom-components/CustomInput";
// import debounce from "lodash.debounce";

// function MyComponent() {
//     const [data, setData] = useState([]);
//     const [subject, setSubject] = useState("");
//     const [isActive, setIsActive] = useState(true);
//     const [id, setId] = useState(0);
//     const [isUpdate, setIsUpdate] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [entriesToShow, setEntriesToShow] = useState(20);
//     const [subjectQuery, setSubjectQuery] = useState("");
//     const [selectedPage, setSelectedPage] = useState(1);
//     const [totalSubjects, setTotalSubjects] = useState(20);

//     const handleEditClick = (row) => {
//         setIsUpdate(true);
//         setSubject(row.subject);
//         setIsActive(row.isActive);
//         setId(row._id);
//     };

//     const handleSave = async () => {
//         try {
//             const response = await createTeachingSubject({ subject, isActive });
//             if (response.status === 200) {
//                 toast.success("Subject created successfully!");
//                 getSubjects();
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Something went wrong!😔 ,Try again");
//         }
//     };

//     const handleUpdate = async (id, subject) => {
//         try {
//             const response = await updateTeachingSubject(id, { subject, isActive });
//             if (response.status === 200) {
//                 toast.success("Subject updated successfully!");
//                 getSubjects();
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Something went wrong!😔 ,Try again");
//         }
//     };

//     const handleIsActiveChange = (value) => {
//         setIsActive(value);
//     };

//     const columns = [
//         {
//             name: "S.no",
//             cell: (row, index) => (
//                 <div className="flex space-x-3 items-center">
//                     <span>{index + (selectedPage - 1) * entriesToShow + 1}</span>
//                 </div>
//             ),
//             width: "100px",
//         },
//         {
//             name: "Subjects",
//             selector: (row) => row.subject,
//             key: "subject",
//         },
//         {
//             name: "Actions",
//             cell: (row) => (
//                 <div>
//                     <button className="text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-700 hover:font-bold " onClick={() => handleEditClick(row)}>
//                         EDIT
//                     </button>
//                 </div>
//             ),
//         },
//     ];

//     const [teachingSubject, setTeachingSubject] = useState([]);

//     const getSubjects = useCallback(async () => {
//         try {
//             const response = await getTeachingSubject(`page=${selectedPage}&limit=${entriesToShow}&subject=${subjectQuery}`);
//             setTeachingSubject(response?.data?.teachingSubjects);
//             setTotalSubjects(response?.data?.teachingSubjectCount);
//             setLoading(false);
//         } catch (error) {
//             console.error(error);
//             setLoading(false);
//         } finally {
//             setLoading(false);
//         }
//     },[selectedPage, entriesToShow, subjectQuery]);

//     const debouncedData = useCallback(debounce(() => {
//         getSubjects();
//     }, 1000), [getSubjects]);

//     useEffect(() => {
//         debouncedData();
//         return () => {
//             debouncedData.cancel();
//         };
//     }, [debouncedData]);

//     return (
//         <PrivatePageWrapper>
//             <div className="flex flex-col lg:flex-row bg-white-200">
//                 {/* Left Side */}
//                 <div className="w-full lg:w-1/2 p-2">
//                     <div className="bg-white rounded-md p-2 ">
//                         <h1 className="mb-2 text-2xl font-bold leading-none tracking-tight text-gray-600 md:text-3xl lg:text-3xl dark:text-white">{isUpdate ? "Edit Teaching Subject" : "Create Teaching Subjects"}</h1>

//                         <h2 className="text-black-600">Teaching Subjects</h2>
//                         <div className="mt-4 flex">
//                             <input type="text" className="border border-red-600 rounded-md px-2 py-1 mr-2 flex-grow width-80%" onChange={(e) => setSubject(e.target.value)} value={subject} />
//                         </div>
//                         <div className="flex gap-3 items-center mt-3">
//                             <Switch id="isActive" checked={isActive} onCheckedChange={handleIsActiveChange} />
//                             <Label htmlFor="isActive">{isActive ? "Active" : "Inactive"}</Label>
//                         </div>
//                         <div>
//                             {!isUpdate ? (
//                                 <button className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-4 " onClick={handleSave}>
//                                     Submit
//                                 </button>
//                             ) : (
//                                 <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 lg:mt-4 " onClick={() => handleUpdate(id, subject)}>
//                                     Update
//                                 </button>
//                             )}
//                             &nbsp;
//                         </div>
//                     </div>
//                 </div>
//                 {/* Right Side */}
//                 <div className="w-full overflow-auto max-h-[500px] md:w-2/3 shadow-csm ml-3">
//                 <div className="flex justify-between">

//                         <div className="dark:text-white my-2 mx-3">
//                             <CustomInput type="text" placeholder="Search Subject"  value={subjectQuery} onChange={(e) => setSubjectQuery(e.target.value)} className="border border-gray-300 rounded px-2 py-1" />
//                         </div>
//                     </div>
//                     <CustomTable columns={columns} data={teachingSubject} expandableRowsComponent={expandableRowsComponent} totalPage={Math.ceil(totalSubjects / entriesToShow)} />
//                 </div>
//             </div>
//         </PrivatePageWrapper>
//     );
// }

// function expandableRowsComponent() {
//     return <div></div>;
// }

// export default MyComponent;
