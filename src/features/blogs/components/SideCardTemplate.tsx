import React from 'react';

const SideCardTemplate = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  return (
    <div className='bg-white p-10 rounded-[14px] shadow-[rgba(0,0,0,0.07)_0px_0px_60px_0px]'>
      <div className='text-2xl font-sensei font-extrabold border-b border-b-[#fbab9c] pb-5'>
        {title}
      </div>
      {children}
    </div>
  );
};

export default SideCardTemplate;
