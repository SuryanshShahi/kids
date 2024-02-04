import React from 'react';

const Socials = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div
      className={`bg-[#faf5f2] group hover:bg-black cursor-pointer duration-500 h-10 w-10 flex justify-center items-center rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Socials;
