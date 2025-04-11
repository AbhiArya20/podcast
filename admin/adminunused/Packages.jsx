// import Sidebar from '../src/components/custom-components/Sidebar';
// import Navbar from '../src/components/custom-components/Navbar';
// import HorizontalTabs from '../src/components/custom-components/HorizontalTabs';
// import PostJobPackageCard from '../src/components/PostJobPackageCard';
// import { useState } from 'react';
// import ResumePackage from '../src/components/ResumePackage';
// import IHSPackage from '../src/components/IHSPackage';
// import IHSList from '../src/components/IHSList';

// const tabs = ['Post Job Packages', 'Resume Package', 'IHS Package'];

// const Packages = () => {
//   const [selectedPackage, setSelectedPackage] = useState(0);
//   const handlePackage = (tab) => {
//     setSelectedPackage(tab);
//   };

//   return (
//     <div className='flex w-screen mb-10 lg:mb-0 '>
//       <Sidebar />
//       <div className='w-full h-screen overflow-scroll'>
//         <Navbar />
//         <div className='px-4 pt-2 space-y-4  pb-5 '>
//           <HorizontalTabs tabs={tabs} onClick={handlePackage} />

//           <div className={`${selectedPackage === 0 ? 'visible' : 'hidden'} space-y-10`}>
//             <div className={` flex flex-col md:flex-row w-full justify-center py-2 space-y-4 md:space-y-0 space-x-0 md:space-x-4`}>
//               <PostJobPackageCard packageName='Small' />
//               <PostJobPackageCard packageName='Standard' />
//               <PostJobPackageCard packageName='Large' />
//             </div>
//             <div>Banner Code if available .</div>
//           </div>

//           <div className={`${selectedPackage === 1 ? 'visible' : 'hidden'} space-y-10`}>
//             <div className={` flex flex-col w-full justify-center py-2 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4`}>
//               <ResumePackage packageName={'Individual Pack'} />
//               <ResumePackage packageName={'Small Organization Pack'} />
//               <ResumePackage packageName={'Large Organization Pack'} />
//             </div>
//             <div>Banner Code if available .</div>
//           </div>

//           <div className={`${selectedPackage === 2 ? 'visible' : 'hidden'}  flex flex-col md:flex-row md:space-x-5`}>
//             <div className='space-y-10 flex flex-col'>
//               <div className={` flex flex-col  md:flex-row w-full justify-center py-2 space-y-4 md:space-y-0 space-x-0 md:space-x-4 `}>
//                 <IHSPackage packageName={'General'} />
//               </div>
//               <div>Banner Code if available .</div>
//             </div>

//             <div className='w-full'>
//               <IHSList />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Packages;
