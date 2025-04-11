import { motion } from 'framer-motion';
export default function TermsConditionsCard({ onClick, title, icon, bgColor, hoverColor }) {
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div variants={cardVariants} initial='hidden' animate='visible' transition={{ duration: 1 }} className='flex'>
      <div
        className={`flex justify-center items-center max-w-80 sm:min-w-80 cursor-pointer shadow-2xl rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out group h-56 w-full p-4 ${bgColor} ${hoverColor}`}
        onClick={onClick}
      >
        <div className='flex flex-col items-center justify-between text-white h-full'>
          <div className='flex justify-center items-center h-full'>{icon}</div>
          <div>
            <h1 className='text-x l font-bold text-center'>{title}</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
