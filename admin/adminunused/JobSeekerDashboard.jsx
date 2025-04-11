// import Widget from '../src/components/custom-components/widget';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';

// import PersonOutlinedIcons from '@mui/icons-material/PersonOutlined';
// import { getJobseekerPercentCount } from '@/http/jobseeker-service';

// const JobSeekerDashboard = () => {
//   const JobseekerCallBack = async () => {
//     try {
//       const response = await getJobseekerPercentCount();
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const widgets = [
//     {
//       title: 'JOBSEEKERS',
//       linkTo: '/jobseeker/list',
//       linkTag: 'See All Jobseekers',
//       icon: <PersonOutlinedIcons className='text-base p-1 bg-opacity-40 rounded-md self-end' style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }} />,
//       callBack: JobseekerCallBack
//     }
//     // {
//     //   title: "Recruitment Plus",
//     //   count: "46",
//     //   link: "/jobseeker",
//     // },
//     // {
//     //   title: "Learning Courses",
//     //   count: "92",
//     //   link: "/jobseeker",
//     // },
//     // {
//     //   title: "Become Edudoor Ceritified",
//     //   count: "0",
//     //   link: "/jobseeker",
//     // },
//     // {
//     //   title: "Job Applied By Job Seekers",
//     //   count: "23",
//     //   link: "/jobseeker",
//     // },
//     // {
//     //   title: "Certified Job Seekers",
//     //   count: "7",
//     //   link: "/jobseeker",
//     // },
//     // {
//     //   title: "Resume Services",
//     //   count: "0",
//     //   link: "/jobseeker",
//     // },
//   ];
//   return (
//     <PrivatePageWrapper>
//       <>
//         <section id='widget' className='flex flex-wrap'>
//           {widgets.map((widget) => (
//             <div key={widget.linkTo} className='w-full md:w-1/2 lg:w-1/4 p-2'>
//               <Widget widgetValues={widget} />
//             </div>
//           ))}
//         </section>
//       </>
//     </PrivatePageWrapper>
//   );
// };

// export default JobSeekerDashboard;
