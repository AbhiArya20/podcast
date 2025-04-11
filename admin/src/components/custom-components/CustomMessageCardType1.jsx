export const CustomMessageCardType1 = ({
  message = '404 Not Found',
  description = 'The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
  onBtnClick,
  btnText,
  icon
}) => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='flex items-center justify-center bg-gray-100 dark:bg-slate-900 rounded-lg'>
        <div className='relative max-w-md w-full mx-auto bg-white dark:bg-slate-900 shadow-lg rounded-lg overflow-hidden '>
          <div className='absolute inset-0 h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'></div>
          <div className='flex flex-col items-center p-6'>
            {icon && <div className='w-24 h-24 flex items-center justify-center bg-blue-100 rounded-full text-3xl'>{icon}</div>}
            {message && <h2 className='mt-6 text-3xl font-bold text-gray-600 dark:text-gray-400'>{message}</h2>}
            {description && <p className='mt-2 text-gray-600 text-center dark:text-gray-600'>{description}</p>}
            {onBtnClick && btnText && (
              <button
                onClick={onBtnClick}
                className='mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
              >
                {btnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
