import React from 'react';

const HeroSection = () => {
  return (
    <div
      className='bg-[url("/images/blogsBg.jpg")] w-full h-[410px] bg-[length:100%_592px] -mt-6 flex items-end justify-between bg-no-repeat relative'
      style={{ backgroundPositionY: '-150px' }}
    >
      <div className='z-10 text-white m-auto text-center px-5'>
        <div className='text-[50px] leading-[53px] font-black font-sensei'>
          News details right sidebar
        </div>
        <div className='text-xl'>Home / Our News</div>
      </div>
      <div className='bg-[#0b203880] h-[410px] w-full absolute' />
    </div>
  );
};

export default HeroSection;
