// import { useState, useEffect } from "react";
// import { getTextResume, getVideoResume, getVisualResume } from "@/http";
// import PrivatePageWrapper from "@/wrappers/PrivatePageWrapper";

// const ResumeServices = () => {
//     const [textResumeData, setTextResumeData] = useState({
//         freshersAmount: "",
//         exp1to3Amount: "",
//         exp4to10Amount: "",
//         regularDays: "",
//         expressDays: "",
//         expressAmount: "",
//         specialDiscount: "",
//         weeks: "",
//     });

//     const [videoResumeData, setVideoResumeData] = useState({
//         freshersAmount: "",
//         exp1to3Amount: "",
//         exp4to10Amount: "",
//         regularDays: "",
//         expressDays: "",
//         expressAmount: "",
//         specialDiscount: "",
//         weeks: "",
//     });

//     const [visualResumeData, setVisualResumeData] = useState({
//         freshersAmount: "",
//         exp1to3Amount: "",
//         exp4to10Amount: "",
//         regularDays: "",
//         expressDays: "",
//         expressAmount: "",
//         specialDiscount: "",
//         weeks: "",
//     });

//     const fetchTextResumeData = async () => {
//         try {
//             const response = await getTextResume("65ddb533c811c7e8dd4a86e9");
//             const textResumeData = response.data || {};
//             setTextResumeData({
//                 freshersAmount: textResumeData.fresherAmount || "",
//                 exp1to3Amount: textResumeData.oneToThreeYearExperienceAmount || "",
//                 exp4to10Amount: textResumeData.fourToTenYearExperienceAmount || "",
//                 regularDays: textResumeData.regularWorkingDay || "",
//                 expressDays: textResumeData.expressWorkingDay || "",
//                 expressAmount: textResumeData.expressAmount || "",
//                 specialDiscount: textResumeData.discountPercentage || "",
//                 weeks: textResumeData.forWeeks || "",
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const fetchVideoResumeData = async () => {
//         try {
//             const response = await getVideoResume("6627a0e31e65bd7be3d298e8");
//             const VideoResumeData = response.data || {};
//             setVideoResumeData({
//                 freshersAmount: VideoResumeData.fresherAmount || "",
//                 exp1to3Amount: VideoResumeData.oneToThreeYearExperienceAmount || "",
//                 exp4to10Amount: VideoResumeData.fourToTenYearExperienceAmount || "",
//                 regularDays: VideoResumeData.regularWorkingDay || "",
//                 expressDays: VideoResumeData.expressWorkingDay || "",
//                 expressAmount: VideoResumeData.expressAmount || "",
//                 specialDiscount: VideoResumeData.discountPercentage || "",
//                 weeks: VideoResumeData.forWeeks || "",
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const fetchVisualResumeData = async () => {
//         try {
//             const response = await getVisualResume("65ddb6ee66ce8f6d206f96cd");
//             const VisualResumeData = response.data || {};
//             setVisualResumeData({
//                 freshersAmount: VisualResumeData.fresherAmount || "",
//                 exp1to3Amount: VisualResumeData.oneToThreeYearExperienceAmount || "",
//                 exp4to10Amount: VisualResumeData.fourToTenYearExperienceAmount || "",
//                 regularDays: VisualResumeData.regularWorkingDay || "",
//                 expressDays: VisualResumeData.expressWorkingDay || "",
//                 expressAmount: VisualResumeData.expressAmount || "",
//                 specialDiscount: VisualResumeData.discountPercentage || "",
//                 weeks: VisualResumeData.forWeeks || "",
//             });
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     const handleTextSubmit = async (e) => {
//         try {
//             const data = {
//                 fresherAmount: textResumeData.freshersAmount,
//                 oneToThreeYearExperienceAmount: textResumeData.exp1to3Amount,
//                 fourToTenYearExperienceAmount: textResumeData.exp4to10Amount,
//                 regularWorkingDay: textResumeData.regularDays,
//                 expressWorkingDay: textResumeData.expressDays,
//                 expressAmount: textResumeData.expressAmount,
//                 discountPercentage: textResumeData.specialDiscount,
//                 forWeeks: textResumeData.weeks,
//             };
//             const response = await updateTextResume(id, data);
//             console.log(response);
//         } catch (error) {
//             console.error(error);
//         }
// };

//     useEffect(() => {
//         fetchTextResumeData();
//         fetchVideoResumeData();
//         fetchVisualResumeData();
//     }, []);

//     return (
//         <PrivatePageWrapper>
//         <div className="flex justify-center space-x-4">
//             <ResumeCard title="Text Resume Data" data={textResumeData} />
//             <ResumeCard title="Video Resume Data" data={videoResumeData} />
//             <ResumeCard title="Visual Resume Data" data={visualResumeData} />
//         </div>
//         </PrivatePageWrapper>
//     );
// };

// const ResumeCard = ({ title, data }) => {
//     return (
//         <div className="max-w-md p-6 bg-white rounded-md shadow-md">
//             <h2 className="text-lg font-bold mb-4">{title}</h2>
//             <ResumeFields data={data} />
//         </div>
//     );
// };

// const ResumeFields = ({ data }) => {
//     return (
//         <div>
//             <InputField label="Freshers Amount (Rs)" value={data.freshersAmount} />
//             <InputField label="1-3 Yr Exp Amount (Rs)" value={data.exp1to3Amount} />
//             <InputField label="4-10 Yr Exp Amount (Rs)" value={data.exp4to10Amount} />
//             <InputField label="Regular Working Days" value={data.regularDays} />
//             <InputField label="Express Working Days" value={data.expressDays} />
//             <InputField label="Express Working Amount (Rs)" value={data.expressAmount} />
//             <InputField label="Special Discount" value={data.specialDiscount} />
//             <InputField label="Weeks" value={data.weeks} />
//         </div>
//     );
// };

// const InputField = ({ label, value }) => {
//     return (
//         <div className="mb-4">
//             <label htmlFor={label} className="block font-medium mb-1">
//                 {label}:
//             </label>
//             <input type="text" id={label} name={label} value={value} className="form-input w-full" readOnly />
//         </div>
//     );
// };

// export default ResumeServices;
