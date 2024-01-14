import React from 'react';
import Img from '../Img';

const AgeCard = ({ data }: { data: any }) => {
  return (
    <div className='relative cursor-pointer'>
      <svg
        width='265'
        height='444'
        viewBox='0 0 265 444'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_1_321)'>
          <g clip-path='url(#clip1_1_321)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12.6063 26.5788C39.0868 -1.72188 255.938 -13.2992 255.938 26.5788C255.938 34.5751 258.732 98.8201 259.207 108.961C263.887 208.867 270.433 361.271 255.938 376.292C251.271 381.126 237.107 384.956 194.517 389.119C160.25 392.468 185.773 438.919 134.045 442.253C79.4999 445.767 109.857 394.176 62.8249 393.885C24.1362 393.645 13.8954 389.088 12.6063 376.292C10.0484 350.914 -2.36441 203.864 0.399138 108.131C0.557372 102.636 7.63859 31.8862 12.6063 26.5788Z'
              fill={data?.bgColor}
            />
          </g>
        </g>
        <defs>
          <clipPath id='clip0_1_321'>
            <rect
              width='265'
              height='442.45'
              fill='white'
              transform='translate(0 0.830078)'
            />
          </clipPath>
          <clipPath id='clip1_1_321'>
            <rect
              width='265.067'
              height='442.45'
              fill='white'
              transform='translate(0 0.830078)'
            />
          </clipPath>
        </defs>
      </svg>
      <div className='absolute top-7 max-w-[225px] text-center space-y-5 left-5'>
        <div
          className={`text-[26px] font-black`}
          style={{ color: data?.textColor }}
        >
          {data?.title}
        </div>
        <Img src={data?.image} alt='phone' width={225} height={138} isLocal className='shakeImage h-[138px] rounded-xl'/>
        <p className='text-secondary'>{data?.description}</p>
        <div className={`text-sm font-semibold ${data?.textColor}`}>
          {data?.duration}
        </div>
      </div>
      <div
        className={`rounded-full h-12 bg-white w-12 border-[10px] z-10 absolute bottom-3 left-[108px]`}
        style={{ borderColor: data?.textColor }}
      >
        <div className='h-2 w-2 rounded-full m-[5px] bg-black' />
      </div>
    </div>
  );
};

export default AgeCard;
