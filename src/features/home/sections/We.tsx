import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { HeadingVariants, WeVariants } from '@/utils/framerVariants';

export const VERIFICATION_SLICK_SETTING: any = {
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
};
const We = () => {
  const sliderData = [
    '/images/slide1.webp',
    '/images/slide2.webp',
    '/images/slide3.jpg',
  ];
  const [isActive, setIsActive] = useState(0);

  return (
    <div className='max-w-[1200px] mx-auto px-5 space-y-20'>
      <div className='md:flex justify-center gap-x-10'>
        <motion.div
          viewport={{ once: false }}
          variants={HeadingVariants.TEXT}
          whileInView='show'
          initial='hidden'
          className='md:text-[184px] text-[100px] font-sensei text-secondary'
        >
          We
        </motion.div>
        <div className='max-w-[600px] md:mt-40'>
          <div className='text-5xl font-bold text-secondary'>
            are VR-Ahead Where Learning Takes a Virtual Leap.
          </div>
          <p className='text-lg mt-5'>
          Embark on a journey of knowledge and fun at Kiddle, where each day is a new discovery. Our curriculum is designed to foster holistic development, nurturing young minds for a bright future. At Kiddle, we're proud to be the first in Bhiwani, Haryana to introduce Virtual Reality (VR) classes, revolutionizing early education.
          </p>
        </div>
      </div>
      <div className='md:flex'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 w-full md:max-w-[1000px]'>
          <div className='relative mx-auto max-w-[450px] w-full '>
            <Img
              src={'/images/tvTop.svg'}
              alt='phone'
              width={265}
              height={129}
              isLocal
              className='mx-auto'
            />
            <div className='h-[292px] rounded-[36px] border-[20px] border-secondary -mt-[1px]'>
              <Slider {...VERIFICATION_SLICK_SETTING}>
                {sliderData?.map((e) => (
                  <Img
                    src={e}
                    alt='phone'
                    width={415}
                    height={192}
                    isLocal
                    className='mx-auto sm:w-full rounded-2xl h-[252px]'
                  />
                ))}
              </Slider>
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
          <div className='gap-y-10 flex flex-col justify-center'>
            {[
              'Home-like Environment',
              'Safety and Security',
              'Quality Educators',
              'Play to Learn',
            ]?.map((item: any, idx: number) => (
              <div
                className='flex items-center cursor-pointer font-bold gap-x-4 z-10 relative text-secondary text-lg'
                key={idx}
                onClick={() => setIsActive(idx)}
              >
                <div
                  className={`h-9 w-9 flex items-center justify-center font-sensei rounded-full ${
                    isActive === idx && 'bg-[#167287] text-white'
                  }`}
                >
                  {idx + 1}.
                </div>
                <div
                  className={
                    isActive === idx ? 'text-[#167287]' : 'text-secondary'
                  }
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-end justify-center mt-10 mx-auto w-[230px]'>
          <div>
            <motion.div
              viewport={{ once: false }}
              variants={WeVariants.RIGHT}
              whileInView='show'
              initial='hidden'
            >
              <Img
                src='/images/people1.svg'
                alt='phone'
                width={268}
                height={210}
                isLocal
              />
            </motion.div>
            <Button className='rounded p-2 z-10 w-32 relative bg-white hover:!text-white text-xs !text-primary border border-primary hover:border-secondary'>
              Learn More
            </Button>
          </div>
          <Img
            src='/images/tree1.svg'
            alt='phone'
            width={107}
            height={126}
            isLocal
          />
        </div>
      </div>
    </div>
  );
};

export default We;
