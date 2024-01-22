import Img from '@/shared/Img';
import { ComeOverVariants, HeadingVariants } from '@/utils/framerVariants';
import useWindowDimensions from '@/utils/useWindowDimension';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const ComeOver = () => {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    width && width > 768 ? setIsMobile(false) : setIsMobile(true);
  }, [width]);
  return (
    <div className=''>
      <div className='max-w-[1240px] px-5 mx-auto'>
        <motion.div
          viewport={{ once: false }}
          variants={
            width && width > 768
              ? HeadingVariants.TEXT
              : HeadingVariants.NO_ANIMATION
          }
          whileInView='show'
          initial='hidden'
          className='md:text-[201px] text-[80px] md:leading-[264px] leading-[80px] font-sensei lg:ml-48 text-secondary'
        >
          Come
        </motion.div>
        <div className='flex md:flex-row flex-col gap-y-10 w-fit mx-auto relative'>
          <div className='md:order-1 order-2'>
            <motion.div
              viewport={{ once: false }}
              variants={ComeOverVariants.PEOPLE}
              whileInView='show'
              initial='hidden'
              className='sm:min-w-[352px] w-fit'
            >
              <Img
                src='/images/people3.svg'
                alt='phone'
                width={227}
                height={400}
                isLocal
              />
            </motion.div>
            <Img
              src='/images/path.png'
              alt='phone'
              width={1240}
              height={263}
              isLocal
              className='-mt10 sm:hidden'
            />
          </div>
          <div className='md:max-w-[526px] md:order-2'>
            <div className='lg:text-5xl text-[30px] sm:leading-normal leading-9 font-extrabold text-secondary'>
              over and look around.
            </div>
            <p className='lg:text-lg lg:mt-5 mt-3 line-clamp-5'>
              We will explain everything you are interested. Join our new
              session. If you have any questions or enquiries please feel free
              to contact us on the following details provided below or
              alternatively you can complete our online enquiry form also
              located below and we will get back to you as soon as possible.
            </p>
          </div>
        </div>
        <Img
          src='/images/path.png'
          alt='phone'
          width={1240}
          height={263}
          isLocal
          className='-mt-24 sm:block hidden'
        />

        <div className='md:text-5xl text-[30px] font-bold text-secondary md:mt-0 mt-10'>
          We are spread across Haryana
        </div>

        <div className='grid place-items-center md:pt-40 pt-10 max-[640px]:text-center lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-y-10 text-xl text-secondary font-extrabold md:-mt-10'>
          <div className='max-w-[100px]'>
            Nimriwali<br></br>
          </div>
          <div className='max-w-[100px]'>
            Nandgaon<br></br>
          </div>
          <div className='max-w-[100px]'>
            Chhapar<br></br>
          </div>
          <div className='max-w-[100px]'>
            Dadri<br></br>
          </div>
          <div className='max-w-[100px]'>
            Dinod<br></br>
          </div>
          <div className='max-w-[100px]'>
            Devsar<br></br>
          </div>
          <div className='max-w-[100px]'>
            Jui<br></br>
          </div>
          <div className='max-w-[100px]'>
            Bhangarh<br></br>
          </div>
          <div className='max-w-[100px]'>
            Kairu<br></br>
          </div>
          <div className='max-w-[100px]'>
            Leghan<br></br>
          </div>
          {/* <div className='max-w-[200px]'>
            20 Manchester Square London W1U 360
          </div>
          <div className='max-w-[198px]'>
            Phone: <br></br>(+1) 541-754-3010
          </div>
          <div className='max-w-[198px]'>Email: hi@kindergarten.com</div> */}
        </div>

        <motion.div
          viewport={{ once: false }}
          variants={
            !isMobile ? ComeOverVariants.BEE : ComeOverVariants.NO_ANIMATION
          }
          whileInView='show'
          initial='hidden'
          className='w-fit mx-auto'
        >
          <Img
            src='/images/snail.svg'
            alt='phone'
            width={408}
            height={66}
            isLocal
            className='my-14 md:left-40 relative md:block hidden'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ComeOver;
