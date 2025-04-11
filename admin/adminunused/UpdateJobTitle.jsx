// import { useState } from "react";
// import CustomTextEditor from "../../components/custom-components/CustomTextEditor";
// import { jobTypes } from "../../constants/options";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
// import { updateJobTitle } from "../../http/index";
// import { useParams } from "react-router-dom";
// import Loader from "@/components/Loader";

// const UpdateJobTitle = () => {
//     const [jobType, setJobType] = useState("Teaching");
//     const [jobTitle, setJobTitle] = useState("Academic Coordinator");
//     const [description, setDescription] = useState("");
//     const [isActive, setIsActive] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const { jobtitleId } = useParams();

//     const handleJobTitleChange = (e) => {
//         setJobTitle(e.target.value);
//     };

//     const handleSubmit = async () => {
//         try {
//             setLoading(true);

//             await new Promise((resolve) => setTimeout(resolve, 5000));
//             const data = {
//                 jobType,
//                 jobTitle,
//                 description,
//                 isActive,
//             };
//             const response = await updateJobTitle(jobtitleId, data);
//             console.log(response);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleGoBack = () => {
//         window.history.back();
//     };

//     const handleJobTypeChange = (value) => {
//         setJobType(value);
//     };
//     const handleIsActiveChange = (value) => {
//         setIsActive(value);
//     };

//     return (
//         <div className=" p-8 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4">Edit Job Title</h2>
//             <div className="mb-4">
//                 <label className="block font-semibold mb-2">Job Type:</label>
//                 <Select onValueChange={handleJobTypeChange}>
//                     <SelectTrigger>
//                         <SelectValue placeholder="Teaching" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         {jobTypes.map((type) => (
//                             <SelectItem key={type} value={type}>
//                                 {type}
//                             </SelectItem>
//                         ))}
//                     </SelectContent>
//                 </Select>
//             </div>
//             <div className="mb-4">
//                 <label className="block font-semibold mb-2">Job Title:</label>
//                 <input type="text" className="w-full bg-white border border-gray-300 rounded-md p-2" placeholder="Enter Job Title" value={jobTitle} onChange={handleJobTitleChange} />
//             </div>
//             <div className="mb-4">
//                 <label className="block font-semibold mb-2">Job Description:</label>
//                 <CustomTextEditor content={description} setContent={setDescription} />
//             </div>
//             <div className="flex gap-3 items-center mb-4">
//                 <Switch id="isActive" checked={isActive} onCheckedChange={handleIsActiveChange} />
//                 <Label htmlFor="isActive">{isActive ? "Active" : "Inactive"}</Label>
//             </div>
//             <div className="flex justify-between">
//                 {loading ? (
//                     <Loader />
//                 ) : (
//                     <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">
//                         Submit
//                     </button>
//                 )}
//                 <button onClick={handleGoBack} className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300">
//                     ← Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default UpdateJobTitle;
