import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { HeadingVariants, WeVariants } from '@/utils/framerVariants';
import useWindowDimensions from '@/utils/useWindowDimension';

const We = () => {
  const sliderData = [
    '/images/slide1.webp',
    '/images/slide2.webp',
    '/images/slide1.webp',
    '/images/slide3.jpg',
  ];
  const sliderRef = useRef<any>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const SLIDER_SETTING: any = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    afterChange: (current: number) => setCurrentSlide(current),
  };
  const { width } = useWindowDimensions();
  return (
    <div className='max-w-[1200px] mx-auto px-5 lg:space-y-0 space-y-10'>
      <div className='lg:flex justify-center gap-x-10'>
        <motion.div
          viewport={{ once: false }}
          variants={
            width && width > 768
              ? HeadingVariants.TEXT
              : HeadingVariants.NO_ANIMATION
          }
          whileInView='show'
          initial='hidden'
          className='lg:text-[184px] text-[80px] lg:leading-normal leading-[80px] font-sensei text-secondary'
        >
          We
        </motion.div>
        <div className='lg:max-w-[600px] lg:mt-40'>
          <div className='lg:text-5xl text-[30px] lg:leading-[57px] leading-9 font-extrabold text-secondary'>
            are VR-Ahead Where Learning Takes a Virtual Leap.
          </div>
          <p className='text-lg mt-5'>
            Embark on a journey of knowledge and fun at Kiddle, where each day
            is a new discovery. Our curriculum is designed to foster holistic
            development, nurturing young minds for a bright future. At Kiddle,
            we're proud to be the first in Bhiwani, Haryana to introduce Virtual
            Reality (VR) classes, revolutionizing early education.
          </p>
        </div>
      </div>
      <div className='md:flex'>
        <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 w-full md:max-w-[1000px]'>
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
              <Slider {...SLIDER_SETTING} ref={sliderRef}>
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
          <div className='lg:gap-y-10 gap-y-5 flex flex-col justify-center'>
            {[
              'Home-like Environment',
              'Safety and Security',
              'Quality Educators',
              'Play to Learn',
            ]?.map((item: any, idx: number) => (
              <div
                className='flex items-center cursor-pointer font-bold gap-x-4 z-10 relative text-secondary text-lg'
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  sliderRef?.current?.slickGoTo(idx);
                }}
              >
                <div
                  className={`h-9 w-9 flex items-center justify-center font-sensei rounded-full ${
                    currentSlide === idx && 'bg-[#167287] text-white'
                  }`}
                >
                  {idx + 1}.
                </div>
                <div
                  className={
                    currentSlide === idx ? 'text-[#167287]' : 'text-secondary'
                  }
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='lg:flex items-end justify-center mt-10 mx-auto w-[230px] hidden'>
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
