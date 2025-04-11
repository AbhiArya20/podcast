// import Chart from './components/Chart';
// import Featured from './components/Featured';
// import Widget from '../../components/custom-components/widget';
import PrivatePageWrapper from '../../wrappers/PrivatePageWrapper';
// import PersonOutlinedIcons from '@mui/icons-material/PersonOutlined';
// import AccountBalanceWaletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import { getEarnings } from '@/http';
// import { useEffect, useState } from 'react';
// import { getEmployerPercentCount } from '@/http/employer-service';
// import { getJobseekerPercentCount } from '@/http/jobseeker-service';

const Dashboard = () => {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // const EmployerCallBack = async () => {
  //   try {
  //     const response = await getEmployerPercentCount();
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const JobseekerCallBack = async () => {
  //   try {
  //     const response = await getJobseekerPercentCount();
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const JobsCallBack = async () => {
  //   try {
  //     //   const { currentMonthQuery, lastMonthQuery } = getQueries();
  //     //   const promises = [getJobsCount(), getJobsCount(currentMonthQuery), getJobsCount(lastMonthQuery)];
  //     //   const responses = await Promise.all(promises);
  //     //   const count = responses[0]?.data?.jobCount;
  //     //   const currentMonth = responses[1]?.data?.jobCount;
  //     //   const lastMonth = responses[2]?.data?.jobCount;
  //     //   if (lastMonth === 0) return { count, percent: 100 };
  //     //   const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
  //     return { count: 0, percent: 0 };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const EarningsCallBack = async () => {
  //   try {
  //     //   const { data } = await getEarnings();
  //     //   const currentMonth = data.earnings[0]?.amount ?? 0;
  //     //   const lastMonth = data.earnings[1]?.amount ?? 0;
  //     //   if (lastMonth === 0) return { count: currentMonth, percent: 100 };
  //     //   const percent = ((currentMonth - lastMonth) / lastMonth) * 100;
  //     return { count: 0, percent: 0 };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const widgets = [
  //   {
  //     title: 'EMPLOYERS',
  //     linkTo: '/employer/list',
  //     linkTag: 'See All Employers',
  //     icon: <PersonOutlinedIcons className='text-base p-1 bg-opacity-40 rounded-md self-end' style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }} />,
  //     callBack: EmployerCallBack
  //   },
  //   {
  //     title: 'JOBSEEKERS',
  //     linkTo: '/jobseeker/list',
  //     linkTag: 'See All Jobseekers',
  //     icon: <PersonOutlinedIcons className='text-base p-1 bg-opacity-40 rounded-md self-end' style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }} />,
  //     callBack: JobseekerCallBack
  //   },
  //   {
  //     title: 'JOBS',
  //     linkTo: '/employer/jobs',
  //     linkTag: 'See all Jobs',
  //     icon: <AccountBalanceWaletOutlinedIcon className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)' }} />,
  //     callBack: JobsCallBack
  //   },
  //   {
  //     title: 'EARNINGS',
  //     linkTo: '/earning/list',
  //     linkTag: 'Monthly Earnings',
  //     prefix: '₹ ',
  //     icon: <MonetizationOnOutlinedIcon className='text-base p-1 bg-purple-800 bg-opacity-40 rounded-md self-end' style={{ color: 'green', backgroundColor: 'rgba(0,128,0,0.2)' }} />,
  //     callBack: EarningsCallBack
  //   }
  // ];

  // const Earnings = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await getEarnings();
  //     setData(data.earnings ?? []);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   Earnings();
  // }, []);

  return (
    <PrivatePageWrapper>
      {/* <section id='widget' className='flex flex-wrap'>
        {widgets.map((widget) => (
          <div key={widget.linkTo} className='w-full md:w-1/2 lg:w-1/4 p-2'>
            <Widget widgetValues={widget} />
          </div>
        ))}
      </section>
      <section className='lg:flex '>
        <Featured data={data} />
        <Chart title='Last 6 Months (Revenue)' aspect={2 / 1} data={data} loading={loading} />
      </section> */}

      <div className='w-full h-full flex justify-center items-center'>Code commented</div>
    </PrivatePageWrapper>
  );
};

export default Dashboard;
