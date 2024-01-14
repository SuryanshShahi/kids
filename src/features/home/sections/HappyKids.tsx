import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import { HeadingVariants } from '@/utils/framerVariants';
import { motion } from 'framer-motion';
import React from 'react';

const HappyKids = () => {
  return (
    <div>
      <div className='max-w-[1160px] px-5 mx-auto'>
        <motion.div
          viewport={{ once: false }}
          variants={HeadingVariants.TEXT}
          whileInView='show'
          initial='hidden'
          className='md:text-[201px] text-[100px] font-sensei leading-[264px] text-secondary md:ml-20'
        >
          Happy
        </motion.div>
        <div className='md:flex gap-x-16'>
          <div>
            <Img
              src={'/images/tvTop.svg'}
              alt='phone'
              width={265}
              height={129}
              isLocal
              className='mx-auto'
            />
            <div className='max-w-[475px] relative h-[292px] md:w-[400px] lg:w-[475px] w-full rounded-[36px] mx-auto border-[20px] border-secondary -mt-[1px]'>
              <Img
                src='/images/slide2.webp'
                alt='phone'
                width={475}
                height={292}
                isLocal
                className='w-full rounded-2xl h-[252px] animate-pulse'
              />
              <div className='bg-[rgb(0,0,0,0.3)] flex flex-col justify-end items-center gap-3 p-5 w-full top-0 z-40 absolute rounded-2xl h-[252px]'>
                <div className='text-xl font-bold text-white'>Megan TimberLand</div>
                <Button className='rounded p-2 z-10 relative bg-white hover:!text-white text-[15px] !text-primary'>
                  Watch
                </Button>
              </div>
            </div>

            <Img
              src={'/images/tvBottom.svg'}
              alt='phone'
              width={205}
              height={53}
              isLocal
              className='mx-auto'
            />
          </div>
          <div className='max-w-[490px] mt-20'>
            <div className='text-5xl font-bold text-secondary'>
              kids. Just watch what parents say.
            </div>
            <p className='text-lg my-5 line-clamp-5'>
              None bigger than early education. Parents know that at KinderCare
              we make it our passion to nurture a sense of discovery.
            </p>
            <Button className='rounded p-2 z-10 relative bg-white hover:!text-white text-[15px] !text-primary border border-primary hover:border-secondary'>
              Watch all testimonials
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyKids;
