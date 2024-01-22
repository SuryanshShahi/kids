import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { HiHomeModern } from 'react-icons/hi2';
import { FaFileInvoice } from 'react-icons/fa6';
const QuickActions = () => {
  return (
    <div className='flex items-center justify-center flex-wrap gap-x-10 gap-y-16 pt-10 px-5 pb-72'>
      <div className='sm:max-w-[303px] w-full min-h-[195px] p-[30px] space-y-3 border hover:border-black shadow-[8px_8px_0px_0px_#eee] hover:shadow-[10px_10px_0px_0px_#000] duration-500'>
        <FaQuestionCircle className='h-[55px] w-[55px]' />
        <div className='text-[26px] font-black text-secondary'>
          Any Questions?
        </div>
        <div className='font-bold text-primary'>Make an Enquiry</div>
      </div>
      <div className='sm:max-w-[303px] w-full min-h-[195px] p-[30px] space-y-3 border hover:border-black shadow-[8px_8px_0px_0px_#eee] hover:shadow-[10px_10px_0px_0px_#000] duration-500'>
        <HiHomeModern className='h-[55px] w-[55px]' />
        <div className='text-[26px] font-black text-secondary'>
          See it Yourself!
        </div>
        <div className='font-bold text-primary'>Book a visit</div>
      </div>
      <div className='sm:max-w-[303px] w-full min-h-[195px] p-[30px] space-y-3 border hover:border-black shadow-[8px_8px_0px_0px_#eee] hover:shadow-[10px_10px_0px_0px_#000] duration-500'>
        <FaFileInvoice className='h-[55px] w-[55px]' />
        <div className='text-[26px] font-black text-secondary'>
          Ready to Join?
        </div>
        <div className='font-bold text-primary'>Register here</div>
      </div>
    </div>
  );
};

export default QuickActions;
