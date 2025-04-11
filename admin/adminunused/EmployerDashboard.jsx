// import PersonOutlinedIcons from '@mui/icons-material/PersonOutlined';
// import Widget from '@/components/custom-components/widget';
// import PrivatePageWrapper from '@/wrappers/PrivatePageWrapper';

// import { getEmployerPercentCount } from '@/http/employer-service';

// const EmployerDashboard = () => {
//   const EmployerCallBack = async () => {
//     try {
//       const response = await getEmployerPercentCount();
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const JobsCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getJobsCount(), getJobsCount(currentMonthQuery), getJobsCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.jobCount;
//   //     const currentMonth = responses[1]?.data?.jobCount;
//   //     const lastMonth = responses[2]?.data?.jobCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const OrganizationCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getOrganizationCount(), getOrganizationCount(currentMonthQuery), getOrganizationCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.organizationCount;
//   //     const currentMonth = responses[1]?.data?.organizationCount;
//   //     const lastMonth = responses[2]?.data?.organizationCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // // const ihsCallBack = async () => {
//   // //   try {
//   // //       const { currentMonthQuery, lastMonthQuery } = getQueries();
//   // //       const promises = [getGeneralIhsCount(), getGeneralIhsCount(currentMonthQuery), getGeneralIhsCount(lastMonthQuery)];
//   // //       const responses = await Promise.all(promises);
//   // //       console.log(responses);
//   // //       const count = responses[0]?.data?.ihsCount;
//   // //       const currentMonth = responses[1]?.data?.ihsCount;
//   // //       const lastMonth = responses[2]?.data?.ihsCount;
//   // //       if (lastMonth === 0) return { count, percent: 100 };
//   // //       const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   // //       return { count, percent };
//   // //   } catch (error) {
//   // //       console.log(error);
//   // //   }
//   // // };

//   // const freeDatabaseCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getFreeDatabaseCount(), getFreeDatabaseCount(currentMonthQuery), getFreeDatabaseCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.freeDatabaseCount;
//   //     const currentMonth = responses[1]?.data?.freeDatabaseCount;
//   //     const lastMonth = responses[2]?.data?.freeDatabaseCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const individualDatabaseCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getIndividualDatabaseCount(), getIndividualDatabaseCount(currentMonthQuery), getIndividualDatabaseCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.individualDbCount;
//   //     const currentMonth = responses[1]?.data?.individualDbCount;
//   //     const lastMonth = responses[2]?.data?.individualDbCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const largeDatabaseCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getLargeDatabaseCount(), getLargeDatabaseCount(currentMonthQuery), getLargeDatabaseCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.largeDatabaseCount;
//   //     const currentMonth = responses[1]?.data?.largeDatabaseCount;
//   //     const lastMonth = responses[2]?.data?.largeDatabaseCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const smallDatabaseCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getSmallDatabaseCount(), getSmallDatabaseCount(currentMonthQuery), getSmallDatabaseCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.smallOrgDbCreditCount;
//   //     const currentMonth = responses[1]?.data?.smallOrgDbCreditCount;
//   //     const lastMonth = responses[2]?.data?.smallOrgDbCreditCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // // const purchaseFreeDatabaseCallBack = async () => {
//   // //   try {
//   // //       const { currentMonthQuery, lastMonthQuery } = getQueries();
//   // //       const promises = [getPurchaseFreeDatabaseCount(), getPurchaseFreeDatabaseCount(currentMonthQuery), getPurchaseFreeDatabaseCount(lastMonthQuery)];
//   // //       const responses = await Promise.all(promises);
//   // //       console.log(responses);
//   // //       const count = responses[0]?.data?.purchaseFreeDatabaseCount;
//   // //       const currentMonth = responses[1]?.data?.purchaseFreeDatabaseCount;
//   // //       const lastMonth = responses[2]?.data?.purchaseFreeDatabaseCount;
//   // //       if (lastMonth === 0) return { count, percent: 100 };
//   // //       const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   // //       return { count, percent };
//   // //   } catch (error) {
//   // //       console.log(error);
//   // //   }
//   // // };

//   // // const purchaseIndDatabaseCallBack = async () => {
//   // //   try {
//   // //       const { currentMonthQuery, lastMonthQuery } = getQueries();
//   // //       const promises = [getPurchaseIndDatabaseCount(), getPurchaseIndDatabaseCount(currentMonthQuery), getPurchaseIndDatabaseCount(lastMonthQuery)];
//   // //       const responses = await Promise.all(promises);
//   // //       console.log(responses);
//   // //       const count = responses[0]?.data?.purchaseIndDatabaseCount;
//   // //       const currentMonth = responses[1]?.data?.purchaseIndDatabaseCount;
//   // //       const lastMonth = responses[2]?.data?.purchaseIndDatabaseCount;
//   // //       if (lastMonth === 0) return { count, percent: 100 };
//   // //       const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   // //       return { count, percent };
//   // //   } catch (error) {
//   // //       console.log(error);
//   // //   }
//   // // };

//   // const specialDatabaseCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getSpecialDatabaseCount(), getSpecialDatabaseCount(currentMonthQuery), getSpecialDatabaseCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.specialDbCreditCount;
//   //     const currentMonth = responses[1]?.data?.specialDbCreditCount;
//   //     const lastMonth = responses[2]?.data?.specialDbCreditCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // const kycCallBack = async () => {
//   //   try {
//   //     const { currentMonthQuery, lastMonthQuery } = getQueries();
//   //     const promises = [getKycCount(), getKycCount(currentMonthQuery), getKycCount(lastMonthQuery)];
//   //     const responses = await Promise.all(promises);
//   //     console.log(responses);
//   //     const count = responses[0]?.data?.employerCount;
//   //     const currentMonth = responses[1]?.data?.employerCount;
//   //     const lastMonth = responses[2]?.data?.employerCount;
//   //     if (lastMonth === 0) return { count, percent: 100 };
//   //     const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
//   //     return { count, percent };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const widgets = [
//     {
//       title: 'Employers',
//       linkTag: 'See All Employers',
//       linkTo: '/employer/list',
//       icon: <PersonOutlinedIcons className='text-base p-1 bg-opacity-40 rounded-md self-end' style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }} />,
//       callBack: EmployerCallBack
//     }
//     // {
//     //   title: 'Organization Page',
//     //   linkTag: 'See All Organizations',
//     //   linkTo: '/employer/organization',
//     //   icon: <GrOrganization className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'black', backgroundColor: 'rgba(128,0,128,0.2)', fontSize: 23 }} />,
//     //   callBack: OrganizationCallBack
//     // },
//     // {
//     //   title: 'Total Jobs',
//     //   linkTag: 'See all Jobs',
//     //   linkTo: '/employer/jobs',
//     //   icon: <AccountBalanceWaletOutlinedIcon className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)' }} />,
//     //   callBack: JobsCallBack
//     // },
//     // {
//     //   title: 'Jobs by Employers',
//     //   linkTag: 'See all Jobs',
//     //   linkTo: '/employer/jobs',
//     //   icon: <AccountBalanceWaletOutlinedIcon className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)' }} />,
//     //   callBack: JobsCallBack
//     // },
//     // // {
//     // //   title: "IT Solution Request",
//     // //   linkTag: "20",
//     // //   linkTo: "/employer",
//     // // },
//     // {
//     //   title: 'Free Database by Employer',
//     //   linkTag: '23',
//     //   linkTo: '/employer',
//     //   icon: <FaDatabase className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'blue', backgroundColor: 'rgba(128,0,128,0.2)', fontSize: 23 }} />,
//     //   callBack: freeDatabaseCallBack
//     // },

//     // {
//     //   title: 'Individual Database',
//     //   linkTag: '23',
//     //   linkTo: '/employer',
//     //   icon: <FaDatabase className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'blue', backgroundColor: 'rgba(128,0,128,0.2)', fontSize: 23 }} />,
//     //   callBack: individualDatabaseCallBack
//     // },

//     // {
//     //   title: 'Large Organization Database',
//     //   linkTag: '23',
//     //   linkTo: '/employer',
//     //   icon: <FaDatabase className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'blue', backgroundColor: 'rgba(128,0,128,0.2)', fontSize: 23 }} />,
//     //   callBack: largeDatabaseCallBack
//     // },

//     // {
//     //   title: 'Small Organization Database',
//     //   linkTag: '23',
//     //   linkTo: '/employer',
//     //   icon: <FaDatabase className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'blue', backgroundColor: 'rgba(128,0,128,0.2)', fontSize: 23 }} />,
//     //   callBack: smallDatabaseCallBack
//     // },

//     //  {
//     //   title: "Purchase Free Database",
//     //   linkTag: "23",
//     //   linkTo: "/employer",
//     //   callBack: purchaseFreeDatabaseCallBack,
//     //    },

//     //  {
//     //   title: "Purchase Individual Database",
//     //   linkTag: "23",
//     //   linkTo: "/employer",
//     //   callBack: purchaseIndDatabaseCallBack,
//     //    },

//     // {
//     //   title: 'Special Database',
//     //   linkTag: '23',
//     //   linkTo: '/employer',
//     //   icon: <FaDatabase className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'blue', backgroundColor: 'rgba(128,0,128,0.2)', fontSize: 23 }} />,
//     //   callBack: specialDatabaseCallBack
//     // },
//     // {
//     //   title: "Instant Hire Solution",
//     //   linkTag: "Hire",
//     //   linkTo: "/employer/instanthireby_employer",
//     //   callBack:ihsCallBack,
//     // },
//     // {
//     //   title: 'Employer KYC',
//     //   linkTag: 'KYC',
//     //   linkTo: '/employer/kyc',
//     //   icon: <HiOutlineDocumentSearch className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'black', backgroundColor: 'rgba(128,0,128,0.2)', fontSize: 25 }} />,
//     //   callBack: kycCallBack
//     // }
//     // {
//     //   title: "Faculty Development",
//     //   linkTag: "25",
//     //   linkTo: "/employer",
//     // },
//     // {
//     //   title: "Join As An Expert Request",
//     //   linkTag: "25",
//     //   linkTo: "/employer",
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

// export default EmployerDashboard;
