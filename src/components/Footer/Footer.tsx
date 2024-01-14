import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import { footerVariants } from '@/utils/framerVariants';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  const router = useRouter();
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ once: false }}
      variants={footerVariants.CONTAINER}
      className='relative'
    >
      <div className='relative ml-20 z-10'>
        <motion.div variants={footerVariants.TREE} viewport={{ once: false }}>
          <Img
            src={'/images/tree2.svg'}
            alt='phone'
            width={60}
            height={83}
            isLocal
          />
        </motion.div>
        <motion.div
          variants={footerVariants.CAT}
          viewport={{ once: false }}
          className='left-40'
        >
          <Img
            src={'/images/fox.svg'}
            alt='phone'
            width={157}
            height={145}
            isLocal
            className='hover:scale-105 duration-1000'
          />
        </motion.div>
        <motion.div
          variants={footerVariants.TREE}
          viewport={{ once: false }}
          className='ml-auto absolute left-[calc(100%-100px)] max-[500px]:hidden'
        >
          <Img
            src={'/images/tree3.svg'}
            alt='phone'
            width={56}
            height={70}
            isLocal
          />
        </motion.div>
      </div>
      <div className="bg-[#FFF5DE] relative px-5 bg-[url('/images/footerBg.png')] bg-no-repeat bg-[length:100%_100%]">
        <div className='sm:flex max-[640px]:space-y-10 items-center justify-between lg:py-32 py-10 z-10 relative max-w-[1200px] mx-auto'>
          <div className='lg:flex max-[640px]:flex max-[640px]:space-y-0 items-center gap-x-28 max-[1024px]:space-y-10 sm:mt-0 mt-20'>
            <div className='font-bold space-y-2 sm:text-start text-center w-full'>
              <div>Admissions Open 2024</div>
              <div>Programs (Uploading soon)</div>
              <div>School Calendar (Uploading soon)</div>
            </div>
            {/* <div className='font-bold space-y-2 max-[640px]:ml-auto max-[640px]:text-right'>
              <div>Blog</div>
              <div>About </div>
              <div>Location</div>
            </div> */}
          </div>
          <Img
            src={'/images/logo.png'}
            alt='phone'
            width={150}
            height={45}
            isLocal
            className='lg:ml-36 mt-20 max-[1024px]:mx-auto'
          />
          <div className='lg:flex max-[640px]:text-center items-center max-[1024px]:space-y-10 gap-x-28'>
            <div className='font-bold'>
              <div>Bhiwani</div>
              <div>Haryana </div>
              <div className='text-primary'>
                <a href=''>📍 Corporate Office Location</a>
              </div>
              <div>
                Phone: <span className='text-primary'>(+91) 92530 45190</span>
              </div>
              <div className='text-primary'>info@kiddle.school</div>
            </div>
            <div className='space-y-10'>
              <Button
                onClick={() => router.push('/book-visit')}
                className='rounded p-2 w-36'
              >
                Book a Visit
              </Button>
              <div className='flex items-center md:justify-start justify-center gap-x-7'>
                <FaFacebook className='h-[26px] w-[26px]' />
                <FaYoutube className='h-[26px] w-[26px]' />
                <FaInstagram className='h-[26px] w-[26px]' />
              </div>
            </div>
          </div>
        </div>
        <div className='text-[#4A4A4A] text-sm md:flex max-[768px]:space-y-5 md:text-start text-center justify-between relative pb-10 max-w-[1200px] mx-auto'>
          <div>© 2024 Kiddle Pre-School</div>
          <div className='sm:flex gap-x-10 items-center justify-center max-[640px]:space-y-3'>
            <div>Admissions</div>
            <div>Programs</div>
            <div>School Calendar</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
