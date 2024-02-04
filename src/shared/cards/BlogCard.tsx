import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoPlus } from 'react-icons/go';
import { convertDate } from '@/utils/constant';
import { useRouter } from 'next/router';

const BlogCard = ({ data, idx }: { data: any; idx: string }) => {
  const router = useRouter();
  return (
    <div
      className='bg-white relative group cursor-pointer rounded-3xl shadow-[rgba(0,0,0,0.08)_0px_14px_40px_0px] max-w-[370px]'
      onMouseOver={() =>
        (document.getElementById(idx).style.backgroundColor = data?.color)
      }
      onMouseOut={() =>
        (document.getElementById(idx).style.backgroundColor = '#faf5f2')
      }
      onClick={() => router.push(`/blog/${idx}`)}
    >
      <div className=''>
        <div className='group-hover:h-[232px] flex justify-center items-center group-hover:opacity-100 opacity-0 w-full h-[150px] duration-700 bg-[#0b203880] absolute rounded-t-3xl'>
          <GoPlus
            className='text-white group-hover:opacity-100 duration-1000 opacity-0'
            size={60}
          />
        </div>
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.images?.data?.[0]?.attributes?.url}`}
          className='rounded-t-3xl h-[232px] object-cover max-w-[370px] w-full'
        />
      </div>
      <div className='px-5 py-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <div
            className='text-white text-sm py-1 px-3 w-fit rounded-xl'
            style={{ backgroundColor: data?.color }}
          >
            {data?.type}
          </div>
          <div style={{ color: data?.color }}>
            {convertDate(data?.createdAt?.split('T')[0])}
          </div>
        </div>
        <div className='text-secondary text-2xl font-semibold'>
          {data?.title}
        </div>
        <div className='flex items-center gap-x-2'>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.authorImage?.data?.attributes?.url}`}
            className='rounded-t-3xl h-[45px] object-cover w-[45px]'
          />
          <div>
            <div className='text-secondary font-bold'>Suryansh Shahi</div>
            <div style={{ color: data?.color }}>CEO</div>
          </div>
          <div
            className='h-10 w-10 rounded-full duration-500 group cursor-pointer flex justify-center items-center bg-[#faf5f2] ml-auto'
            id={idx}
          >
            <FaArrowRightLong
              style={{ color: data?.color }}
              className='group-hover:!text-white duration-500'
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
