import Socials from '@/shared/Socials';
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const Tags = ({ data }: { data: any }) => {
  return (
    <div className='flex sm:flex-row flex-col items-center gap-4 border-y !my-10 boder-y-[#fdf5ee] py-[30px]'>
      <div className='font-sensei text-xl'>Tags</div>
      {data?.tags?.map((item: string, idx: number) => (
        <div
          key={idx}
          className='font-semibold px-3 py-2 rounded-lg duration-500 cursor-pointer text-[#7e8185] bg-[#faf5f2] hover:bg-primary hover:text-white'
        >
          {item}
        </div>
      ))}
      <div className='sm:ml-auto flex gap-x-3'>
        <Socials>
          <FaFacebook className='group-hover:text-white duration-500' />
        </Socials>
        <Socials>
          <FaTwitter className='group-hover:text-white duration-500' />
        </Socials>
        <Socials>
          <FaPinterest className='group-hover:text-white duration-500' />
        </Socials>
        <Socials>
          <FaInstagram className='group-hover:text-white duration-500' />
        </Socials>
      </div>
    </div>
  );
};

export default Tags;
