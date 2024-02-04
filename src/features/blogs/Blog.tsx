import Img from '@/shared/Img';
import BlogCard from '@/shared/cards/BlogCard';
import { getBlogsData } from '@/utils/apis/api';
import React, { useEffect, useState } from 'react';
import useBlog from './views/useBlog';

const Blog = () => {
  const { data } = useBlog();
  return (
    <div className='pb-40'>
      <div
        className='bg-[url("/images/blogsBg.jpg")] w-full h-[410px] bg-[length:100%_592px] -mt-6 flex items-end justify-between bg-no-repeat relative'
        style={{ backgroundPositionY: '-150px' }}
      >
        <div className='z-10 text-white m-auto text-center'>
          <div className='text-[50px] leading-[53px] font-black'>News Grid</div>
          <div className='text-xl'>Home / Our News</div>
        </div>
        <div className='bg-[#0b203880] h-[410px] w-full absolute' />
      </div>

      <Img
        src={'/images/navBottom.png'}
        alt='phone'
        width={1440}
        height={28}
        isLocal
        className='w-full h-7 -mt-6 -rotate-180 object-cover'
      />
      <div className='bg-white py-20'>
        <div className='max-w-[1160px] px-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 place-items-center'>
          {data?.map((item: any, idx: number) => (
            <BlogCard data={item?.attributes} key={idx} idx={`${idx + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
