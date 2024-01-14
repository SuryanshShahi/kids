import Img from '@/shared/Img';
import { HeadingVariants } from '@/utils/framerVariants';
import { motion } from 'framer-motion';
import React from 'react';
import { BiAbacus } from 'react-icons/bi';
import { FaMicroscope } from 'react-icons/fa';
import { MdSportsMartialArts } from 'react-icons/md';
import { TbLanguage } from 'react-icons/tb';

const LearningEnvironment = () => {
  return (
    <div>
      <Img
        src={'/images/navBottom.png'}
        alt='phone'
        width={1440}
        height={28}
        isLocal
        className='w-full h-7 absolute -mt-[5px] z-10 object-cover'
      />
      <div className='bg-[#d5e5eb] py-24 relative'>
        <div className='max-w-[1160px] px-5 mx-auto'>
          <motion.div
            viewport={{ once: false }}
            variants={HeadingVariants.TEXT}
            whileInView='show'
            initial='hidden'
            className='md:text-[201px] text-[100px] leading-[264px] font-sensei text-secondary'
          >
            Our
          </motion.div>
          <div className='max-w-[666px] mx-auto'>
            <div className='text-5xl font-bold text-secondary'>
              unique learning environment
            </div>
            <p className='text-lg mt-5 line-clamp-5'>
              sparks physical growth and discovery while our creative
              curriculum, which combines the traditional and the progressive,
              supports each student’s growth.
            </p>
          </div>
          <div className='flex max-[1024px]:flex-wrap gap-10 justify-center text-center sm:mb-0 pb-36'>
            <div>
              <Img
                src='/images/01.svg'
                alt='phone'
                width={297}
                height={182}
                isLocal
              />
              <TbLanguage className='h-20 w-20 text-primary -mt-28 ml-28 animate-pulse' />
              <div className='text-[26px] font-black text-secondary mt-5'>
                Language Arts
              </div>
            </div>
            <div className='lg:mt-52'>
              <Img
                src='/images/02.svg'
                alt='phone'
                width={297}
                height={182}
                isLocal
              />
              <BiAbacus className='h-20 w-20 text-primary -mt-28 ml-28 animate-pulse' />
              <div className='text-[26px] font-black text-secondary mt-5'>
                Math
              </div>
            </div>
            <div>
              <Img
                src='/images/03.svg'
                alt='phone'
                width={297}
                height={182}
                isLocal
              />
              <FaMicroscope className='h-20 w-20 text-primary -mt-28 ml-28 animate-pulse' />
              <div className='text-[26px] font-black text-secondary mt-5'>
                Science
              </div>
            </div>
            <div className='lg:mt-52'>
              <Img
                src='/images/04.svg'
                alt='phone'
                width={297}
                height={182}
                isLocal
              />
              <MdSportsMartialArts className='h-20 w-20 text-primary -mt-28 ml-28 animate-pulse' />
              <div className='text-[26px] font-black text-secondary mt-5'>
                Sports
              </div>
            </div>
          </div>
        </div>
        <Img
          src='/images/people4.svg'
          alt='phone'
          width={397}
          height={282}
          isLocal
          className='absolute bottom-0 left-0'
        />
      </div>

      <Img
        src={'/images/navBottom.png'}
        alt='phone'
        width={1440}
        height={28}
        isLocal
        className='w-full h-7 -mt-6 -rotate-180 object-cover'
      />
    </div>
  );
};

export default LearningEnvironment;
