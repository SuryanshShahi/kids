import { getBlogsDetails } from '@/utils/apis/api';
import { convertDate } from '@/utils/constant';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import Comments from './components/Comments';
import Tags from './components/Tags';
import BlogContent from './components/BlogContent';
import SideCardTemplate from './components/SideCardTemplate';
import HeroSection from './components/HeroSection';
import Img from '@/shared/Img';
import useBlogDetail from './views/useBlogDetail';

const BlogDetail = () => {
  const { categories, data } = useBlogDetail();
  return (
    <div className='pb-40'>
      <HeroSection />

      <Img
        src={'/images/navBottom.png'}
        alt='phone'
        width={1440}
        height={28}
        isLocal
        className='w-full h-7 -mt-6 -rotate-180 object-cover'
      />

      <div className='max-w-[1160px] mx-auto grid lg:grid-cols-12 grid-cols-2 gap-10 bg-white py-28 px-5'>
        <div className='lg:col-span-8 col-span-2'>
          <BlogContent data={data} />
          <Tags data={data} />
          <Comments data={data} />
        </div>
        <div className='lg:col-span-4 col-span-2 space-y-10'>
          <div className='bg-white p-6 rounded-[14px] relative shadow-[rgba(0,0,0,0.07)_0px_0px_60px_0px]'>
            <input
              type='text'
              className='h-16 pl-8 pr-12 bg-[#faf5f2] border outline-none w-full border-[#fce9dc] rounded-xl'
              placeholder='Search Here...'
            />
            <IoSearchOutline className='absolute right-12 top-11 text-2xl' />
          </div>
          <SideCardTemplate title='Latest posts'>
            <div className='flex gap-x-4 mb-5 mt-8'>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.images?.data?.[0]?.attributes?.url}`}
                className='rounded-lg w-[70px] h-[70px]'
              />
              <div className=''>
                <div className='text-[#7e8185] font-medium flex items-center gap-x-2'>
                  <IoMdTime style={{ color: data?.color }} />{' '}
                  {convertDate(data?.createdAt?.split('T')[0])}
                </div>
                <div className='font-bold font-sensei'>asdadadadssad</div>
              </div>
            </div>
            <div className='bg-[#fdf5ee] h-[1px] w-full' />
          </SideCardTemplate>

          <SideCardTemplate title='Categories'>
            <div className='space-y-4 mt-8'>
              {categories?.map((item: string, idx: number) => (
                <div
                  className={`flex items-center gap-x-2 ${
                    idx + 1 === categories?.length
                      ? ''
                      : 'border-b border-b-[#fdf5ee]'
                  } pb-3 text-[#7e8185] font-medium hover:text-black duration-500 hover:ml-5 cursor-pointer`}
                  key={idx}
                >
                  <MdOutlineDoubleArrow className='text-primary' />
                  {item}
                </div>
              ))}
            </div>
          </SideCardTemplate>
          <SideCardTemplate title='Tags'>
            <div className='mt-8 flex flex-wrap gap-[10px]'>
              {[
                'Marketing',
                'Development',
                'Digital',
                'Design',
                'Solution',
              ]?.map((item: string, idx: number) => (
                <div
                  key={idx}
                  className='font-semibold px-4 py-2 w-fit rounded-lg duration-500 cursor-pointer text-[#7e8185] bg-[#faf5f2] hover:bg-primary hover:text-white'
                >
                  {item}
                </div>
              ))}
            </div>
          </SideCardTemplate>

          <SideCardTemplate title='Comments'>
            <div className='mt-8 flex gap-x-4 items-center'>
              <div className='bg-[#faf5f2] group hover:bg-primary cursor-pointer duration-500 h-11 min-w-11 flex justify-center items-center rounded-full'>
                <BsChatDots className='group-hover:text-white text-xl duration-500' />
              </div>
              <div className='text-[#7e8185] leading-[30px]'>
                asdsada a dasd sad asdsa d d asd asd as d ad
              </div>
            </div>
          </SideCardTemplate>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
