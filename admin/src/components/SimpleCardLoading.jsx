import { Skeleton } from '@/components/ui/skeleton';

export default function SimpleCardLoadingLoading() {
  return (
    <div
      className={`flex justify-center items-center max-w-80 sm:min-w-80 cursor-pointer shadow-xl  rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out group h-56 w-full bg-gray-100 dark:bg-slate-900`}
    >
      <div className='flex flex-col items-center justify-between text-white h-full w-full'>
        <div className='flex justify-center items-center h-full'>
          <Skeleton className='h-28 w-28 rounded-full bg-gray-200' />
        </div>
        <div className='w-full pb-4 px-4'>
          <Skeleton className='h-8 w-full bg-gray-200' />
        </div>
      </div>
    </div>
  );
}
