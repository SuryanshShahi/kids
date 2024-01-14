import Img from '@/shared/Img';
import AgeCard from '@/shared/cards/AgeCard';
import { AgesVariants, HeadingVariants } from '@/utils/framerVariants';
import { motion } from 'framer-motion';
import React from 'react';

const Ages = () => {
  const data = [
    {
      title: 'Nursery',
      image: '/images/heroBg.webp',
      description:
        'Nurture the early years of learning in our Nursery Program.',
      bgColor: '#FFDBD2',
      textColor: '#E95D3A',
      duration: 'Ages 3-4 explore a world of curiosity and imagination',
    },
    {
      title: 'LKG / Prep1',
      image: '/images/heroBg.webp',
      description:
        'Begin the academic journey with our Kindergarten Program.',
      bgColor: '#DFF8FF',
      textColor: '#167287',
      duration: 'Ages 4-5 embark on an exciting adventure of foundational learning.',
    },
    {
      title: 'UKG / Prep 2',
      image: '/images/heroBg.webp',
      description:
        'Continue the educational voyage with our Upper KG Program',
      bgColor: '#FFEFDF',
      textColor: '#F68F29',
      duration: 'Ages 5-6 engage in interactive learning and social development.',
    },
    {
      title: 'Class 1 & 2 ',
      image: '/images/heroBg.webp',
      description:
        'Build a strong foundation for academics in our Pre-Primary',
      bgColor: '#E6F9E5',
      textColor: '#5E9F5A',
      duration: 'Ages 6-8 discover the joy of learning in a futuristic environment.',
    },
  ];
  return (
    <motion.div
      viewport={{ once: false }}
      variants={AgesVariants.CONTAINER}
      whileInView='show'
      initial='hidden'
      className='md:pb-36 pb-10 relative overflow-hidden'
    >
      <motion.div
        viewport={{ once: false }}
        variants={AgesVariants.RIGHT}
        className='min-w-[352px]'
      >
        <Img
          src='/images/rightCut.svg'
          alt='phone'
          width={278}
          height={973}
          isLocal
          className='absolute right-0 max-[1100px]:top-[32%] lg:mt-0 mt-[52%]'
        />
      </motion.div>
      <div className='max-w-[1200px] px-5 mx-auto space-y-16'>
        <div className='md:flex items-end gap-x-10 text-secondary'>
          <motion.div
            viewport={{ once: false }}
            variants={HeadingVariants.TEXT}
            whileInView='show'
            initial='hidden'
            className='md:text-[201px] text-[100px] font-sensei'
          >
            Ages
          </motion.div>
          <div className='text-5xl font-bold md:-ml-28'>
            we meet kids where they are.
          </div>
        </div>
        <div className='grid min-[1100px]:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center gap-y-16 gap-x-5'>
          {data?.map((item: any, idx: number) => (
            <AgeCard data={item} key={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Ages;
