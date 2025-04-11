export default function CustomSectionLoading() {
  return (
    <div className='flex justify-center items-center w-full h-full bg-gray-500 opacity-50' onClick={(e) => e.stopPropagation()}>
      <div className='border-b-4 border-t-4 rounded-full h-8 w-8 animate-spin'></div>
    </div>
  );
}
