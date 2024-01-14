import Img from '@/shared/Img';
import { ComeOverVariants, HeadingVariants } from '@/utils/framerVariants';
import { motion } from 'framer-motion';
import React from 'react';

const ComeOver = () => {
  return (
    <div className=''>
      <div className='max-w-[1240px] px-5 mx-auto'>
        <motion.div
          viewport={{ once: false }}
          variants={HeadingVariants.TEXT}
          whileInView='show'
          initial='hidden'
          className='md:text-[201px] text-[100px] font-sensei md:ml-48 leading-[264px] text-secondary'
        >
          Come
        </motion.div>
        <div className='md:flex w-fit mx-auto mt-5 relative'>
          <div>
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
              className='-mt-10 sm:hidden'
            />
          </div>
          <div className='max-w-[526px] max-[768px]:mt-20'>
            <div className='text-5xl font-bold text-secondary'>
              over and look around.
            </div>
            <p className='text-lg mt-5 line-clamp-5'>
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

        <div className='text-5xl font-bold text-secondary'>
                We are spread across Haryana
            </div>

        <div className='grid place-items-center md:pt-40 pt-20 max-[640px]:text-center lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-y-10 text-xl text-secondary font-extrabold md:-mt-10'>
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
          </div><div className='max-w-[100px]'>
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
          variants={ComeOverVariants.BEE}
          whileInView='show'
          initial='hidden'
          className='w-fit md:block hidden'
        >
          <Img
            src='/images/snail.svg'
            alt='phone'
            width={408}
            height={66}
            isLocal
            className='my-14 left-40 relative'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ComeOver;
