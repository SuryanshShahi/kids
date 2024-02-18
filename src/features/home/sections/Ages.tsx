import Img from '@/shared/Img';
import AgeCard from '@/shared/cards/AgeCard';
import { AgesVariants, HeadingVariants } from '@/utils/framerVariants';
import useWindowDimensions from '@/utils/useWindowDimension';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

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
      description: 'Begin the academic journey with our Kindergarten Program.',
      bgColor: '#DFF8FF',
      textColor: '#167287',
      duration:
        'Ages 4-5 embark on an exciting adventure of foundational learning.',
    },
    {
      title: 'UKG / Prep 2',
      image: '/images/heroBg.webp',
      description: 'Continue the educational voyage with our Upper KG Program',
      bgColor: '#FFEFDF',
      textColor: '#F68F29',
      duration:
        'Ages 5-6 engage in interactive learning and social development.',
    },
    {
      title: 'Class 1 & 2 ',
      image: '/images/heroBg.webp',
      description: 'Build a strong foundation for academics in our Pre-Primary',
      bgColor: '#E6F9E5',
      textColor: '#5E9F5A',
      duration:
        'Ages 6-8 discover the joy of learning in a futuristic environment.',
    },
  ];
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    width && width > 768 ? setIsMobile(false) : setIsMobile(true);
  }, [width]);
  return (
    <motion.div
      viewport={{ once: false }}
      variants={AgesVariants.CONTAINER}
      whileInView='show'
      initial='hidden'
      className='md:pb-36 pb-10 relative overflow-hidden sm:pt-0 pt-10'
    >
      <motion.div
        viewport={{ once: false }}
        variants={!isMobile ? AgesVariants.RIGHT : AgesVariants.NO_ANIMATION}
        className='min-w-[352px]'
      >
        <Img
          src='/images/rightCut.svg'
          alt='phone'
          width={278}
          height={973}
          isLocal
          className='absolute md:right-0 right-[105px] -mt-16 lg:mt-0 md:h-[873px] h-[573px]'
        />
      </motion.div>
      <div className='max-w-[1200px] px-5 mx-auto space-y-16'>
        <div className='lg:flex items-end gap-x-10 text-secondary'>
          <motion.div
            viewport={{ once: false }}
            variants={
              !isMobile ? HeadingVariants.TEXT : HeadingVariants.NO_ANIMATION
            }
            whileInView='show'
            initial='hidden'
            className='lg:text-[201px] text-[80px] lg:leading-normal leading-[80px] font-sensei'
          >
            Ages
          </motion.div>
          <div className='lg:text-5xl text-[30px] lg:leading-normal leading-9 lg:mt-0 mt-5 font-extrabold lg:-ml-28'>
            we meet kids where they are.
          </div>
        </div>
        <div className='grid min-[1100px]:grid-cols-4 sm:grid-cols-2 grid-cols-1 place-items-center md:gap-y-16 gap-y-8 gap-x-5'>
          {data?.map((item: any, idx: number) => (
            <AgeCard data={item} key={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Ages;
