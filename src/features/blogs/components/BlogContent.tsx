import { convertDate } from '@/utils/constant';
import React from 'react';
import { IoMdTime } from 'react-icons/io';
import Markdown from 'react-markdown';

const BlogContent = ({ data }: { data: any }) => {
  return (
    <div className='space-y-6'>
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.images?.data?.[0]?.attributes?.url}`}
        className='rounded-3xl oject-fit w-full max-h-[450px]'
      />
      <div className='flex items-center gap-x-5'>
        <div
          className='text-white text-sm py-1 px-3 w-fit rounded-xl'
          style={{ backgroundColor: data?.color }}
        >
          {data?.type}
        </div>
        <div className='text-[#7e8185] font-medium flex items-center gap-x-2'>
          <IoMdTime style={{ color: data?.color }} />{' '}
          {convertDate(data?.createdAt?.split('T')[0])}
        </div>
      </div>
      <div className=''>
        <div className='text-[30px] font-sensei'>{data?.title}</div>
        <Markdown className='text-[#7e8185] leading-[30px] mt-5'>
          {data?.description}
        </Markdown>
      </div>
    </div>
  );
};

export default BlogContent;
