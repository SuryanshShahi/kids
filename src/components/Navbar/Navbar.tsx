import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import useNavbar from './views/useNavbar';

const Navbar = () => {
  const { router } = useNavbar();
  return (
    <div className='top-0 sticky w-full z-50' id='navbar'>
      <div className='bg-white h-20 flex justify-between md:px-8 px-5 items-center'>
        <div className='flex items-center gap-x-10'>
          <Img
            src={'/images/headerLogo.png'}
            alt='phone'
            width={150}
            height={45}
            isLocal
            className='cursor-pointer'
            onClick={() => router.push('/')}
          />
          {/* <div className='gap-x-10 lg:flex text-black font-extrabold hidden'>
            {[
              'Home',
              'About',
              'Programs',
              'Admissions',
              'Parents',
              'Location',
            ]?.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div> */}
        </div>
        <div className='flex items-center gap-x-4'>
          <div className='font-bold text-[#167287] gap-x-4 min-w-[172px] sm:flex items-center hidden'>
            <FaPhoneAlt />
            9100 7200 40
          </div>
          <Button
            onClick={() => router.push('/book-visit')}
            className='rounded p-2 w-36'
          >
            Book a Visit
          </Button>
        </div>
      </div>
      <Img
        src={'/images/navBottom.png'}
        alt='phone'
        width={1440}
        height={28}
        isLocal
        className='w-full h-7 -mt-[2px] object-cover'
      />
    </div>
  );
};

export default Navbar;
