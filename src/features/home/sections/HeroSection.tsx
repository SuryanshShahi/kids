import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import { HeroVariants } from '@/utils/framerVariants';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const HeroSection = () => {
  const [value, setValue] = useState(false);
  const changeBackground = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 1400) {
        setValue(true);
      } else {
        setValue(false);
      }
    }
  };
  typeof window !== 'undefined' &&
    window?.addEventListener('scroll', changeBackground);

  const router = useRouter();
  return (
    <div className='-mt-6 overflow-hidden'>
      <div className="bg-[url('/images/heroBg2.png')] flex md:h-fit h-[480px] bg-no-repeat bg-cover sm:bg-[length:100%_900px] md:bg-[length:100%_100%] w-full relative">
        <div className='bg-[rgb(0,0,0,0.3)] w-full'>
          <div className="relative mx-auto mt-auto flex bg-[url('/images/heroLeaf.svg')] h-full w-full md:h-[690px] md:w-[900px] bg-bottom bg-contain bg-no-repeat">
            <div className='text-center flex flex-col items-center font-bold text-secondary mx-auto w-fit max-w-[500px] mt-auto sm:scale-100 scale-90 max-[425px]:scale-[0.6] max-[425px]:-bottom-24 max-[510px]:scale-75 max-[510px]:-bottom-[70px] max-[640px]:-bottom-12 relative'>
              <motion.div
                viewport={{ once: false }}
                variants={HeroVariants.BIRD}
                whileInView='show'
                initial='hidden'
              >
                <Img
                  src={'/images/bird.svg'}
                  alt='phone'
                  width={90}
                  height={69}
                  isLocal
                  className='mx-auto'
                />
              </motion.div>
              <div className='md:text-[40x] mt-5 md:leading-normal leading-[24px] duration-700'>
                <motion.div
                  viewport={{ once: false }}
                  variants={HeroVariants.TEXT}
                  whileInView='show'
                  initial='hidden'
                  className='mx-auto'
                >
                  Welcome to Kiddle Pre-School
                </motion.div>
                <motion.div
                  viewport={{ once: false }}
                  variants={HeroVariants.TEXT}
                  whileInView='show'
                  initial='hidden'
                  className='mx-auto'
                >
                  <div className='md:text-[50px] text-[36px] md:leading-normal leading-[50px]'>
                    Igniting Young Minds, Unleashing Futures.
                  </div>
                </motion.div>
                <motion.div
                  viewport={{ once: false }}
                  variants={HeroVariants.TEXT}
                  whileInView='show'
                  initial='hidden'
                  className='mx-auto'
                >
                  Admissions Open 2024-25 session
                </motion.div>
              </div>

              <div className='relative max-[640px]:scale-75'>
                <motion.div
                  viewport={{ once: false }}
                  variants={HeroVariants.BUTTON}
                  whileInView='show'
                  initial='hidden'
                >
                  <Button
                    onClick={() => router.push('/book-visit')}
                    className='rounded w-[123px] px-6 text-[13px] absolute top-10 z-10'
                  >
                    Apply Now
                  </Button>
                </motion.div>
                <motion.div
                  viewport={{ once: false }}
                  variants={HeroVariants.IMAGE}
                  whileInView='show'
                  initial='hidden'
                >
                  <Img
                    src={'/images/people.svg'}
                    alt='phone'
                    width={373}
                    height={192}
                    isLocal
                    className='mx-auto'
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Img
        src={'/images/navBottom.png'}
        alt='phone'
        width={1440}
        height={28}
        isLocal
        className='w-full h-7 -mt-6 rotate-180 object-cover'
      />
      <div className='fixed top-48 sm:flex w-full hidden justify-center'>
        <Img
          src={'/images/dots.svg'}
          alt='phone'
          width={771}
          height={445}
          isLocal
          className={`mx-auto !max-w-[771px] ${value && 'hidden'}`}
        />
      </div>
    </div>
  );
};

export default HeroSection;
