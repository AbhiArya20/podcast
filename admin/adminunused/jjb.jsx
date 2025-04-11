// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/Navbar";
// import JobSeekerDashboardCard from "../../components/HomeCard";
// const JobSeekerDashboard = () => {
//   const data1 = [
//     {
//       title: "Employers",
//       count: "419",
//       link: "/employer/list",
//     },
//     {
//       title: "Organization Page",
//       count: "46",
//       link: "/employer",
//     },
//     {
//       title: "Total Jobs",
//       count: "92",
//       link: "/employer/jobs",
//     },
//     {
//       title: "Jobs by Employers",
//       count: "0",
//       link: "/employer",
//     },
//     {
//       title: "IT Solution Request",
//       count: "20",
//       link: "/employer",
//     },
//   ];
//   const data2 = [
//     {
//       title: "Database by Employers",
//       count: "23",
//       link: "/employer",
//     },
//     {
//       title: "Instant Hire Solution",
//       count: "7",
//       link: "/employer/instanthireby_employer",
//     },
//     {
//       title: "Employer KYC",
//       count: "0",
//       link: "/employer/kyc",
//     },
//     {
//       title: "Faculty Development",
//       count: "25",
//       link: "/employer",
//     },
//     {
//       title: "Join As A Expert Request",
//       count: "25",
//       link: "/employer",
//     },
//   ];
//   return (
//     <div className="flex w-screen mb-10 lg:mb-0 ">
//       <Sidebar />
//       <div className="w-full h-screen overflow-scroll">
//         <Navbar />

//         <div className=" ">
//           <section id="widget" className="lg:flex ">
//             <div className="lg:w-1/2">
//               {data1.map((data, index) => {
//                 // console.log(data);
//                 return <JobSeekerDashboardCard key={index} info={data} />;
//               })}
//             </div>
//             <div className="lg:w-1/2">
//               {data2.map((data, index) => {
//                 // console.log(data);
//                 return <JobSeekerDashboardCard key={index} info={data} />;
//               })}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSeekerDashboard;
