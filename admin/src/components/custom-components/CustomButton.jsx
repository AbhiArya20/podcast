export default function CustomButton({ loading, btnText, handleSubmit, processTxt, className, ...rest }) {
  return (
    <button
      onClick={
        loading
          ? (e) => {
              e.preventDefault();
            }
          : handleSubmit
      }
      className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${loading ? 'text-indigo-700 bg-indigo-300 hover:bg-indigo-400 cursor-not-allowed' : 'text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-colors duration-300'} ${className}`}
      {...rest}
    >
      {loading ? processTxt ?? 'Processing...' : btnText}
    </button>
  );
}
