import Button from '@/shared/Button/Button';
import React from 'react';

const Comments = ({ data }: { data: any }) => {
  return (
    <>
      <div className='space-y-10'>
        <div className='font-bold text-[30px] font-sensei'>2 Comments</div>
        <div className='flex sm:flex-row flex-col sm:items-center gap-5 !mt-7'>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.images?.data?.[0]?.attributes?.url}`}
            className='rounded-full object-fit max-w-[168px] w-full h-full max-h-[168px]'
          />
          <div className='space-y-3'>
            <div className='text-2xl font-bold font-sensei'>David</div>
            <p className='text-[#7e8185] leading-[30px]'>
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
              eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
              volutpat sit amet nec elit.
            </p>
          </div>
        </div>
        <div className='bg-[#fdf5ee] h-[1px] w-full' />
      </div>
      <div className='space-y-8 !mt-10'>
        <div className='font-bold text-[30px] font-sensei'>Leave a comment</div>
        <form className='grid grid-cols-12 gap-5'>
          <input
            type='text'
            placeholder='Your Name'
            className='bg-[#faf5f2] h-[60px] outline-none px-5 sm:col-span-6 col-span-12'
          />
          <input
            type='email'
            placeholder='Email Address'
            className='bg-[#faf5f2] h-[60px] outline-none px-5 sm:col-span-6 col-span-12'
          />
          <textarea
            className='col-span-12 bg-[#faf5f2] outline-none p-5'
            placeholder='Write a message'
            rows={5}
          />
          <Button className='col-span-12 w-fit mt-5 text-xl'>Submit</Button>
        </form>
      </div>
    </>
  );
};

export default Comments;
