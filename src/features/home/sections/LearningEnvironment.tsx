import Img from "@/shared/Img";
import { HeadingVariants } from "@/utils/framerVariants";
import useWindowDimensions from "@/utils/useWindowDimension";
import { motion } from "framer-motion";
import React from "react";
import { BiAbacus } from "react-icons/bi";
import { FaMicroscope } from "react-icons/fa";
import { MdSportsMartialArts } from "react-icons/md";
import { TbLanguage } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";

const LearningEnvironment = () => {
  const { width } = useWindowDimensions();
  const data = [
    {
      image: "/images/01.svg",
      icon: (
        <TbLanguage
          className="text-primary -mt-[90px] animate-pulse"
          size={60}
        />
      ),
      title: "Comprehensive Education",
      description:
        "From Nursery to Grade 2, kiddle offers a well-rounded educational journey for academic and extracurricular enrichment",
    },
    {
      image: "/images/02.svg",
      icon: (
        <BiAbacus className="text-primary -mt-[90px] animate-pulse" size={60} />
      ),
      title: "Multifaceted Curriculam",
      description:
        "Our holistic approach integrates teaching method with a dierse range of activities, including arts, sports and charater-building programs",
    },
    {
      image: "/images/03.svg",
      icon: (
        <FaMicroscope
          className="text-primary -mt-[90px] animate-pulse"
          size={60}
        />
      ),
      title: "Hands-On Learing",
      description: "Students engage in immersive experiences that encourage exploration, critical thinking and creativity.",
    },
    {
      image: "/images/04.svg",
      icon: (
        <MdSportsMartialArts
          className="text-primary -mt-[90px] animate-pulse"
          size={60}
        />
      ),
      title: "Personalized Developent",
      description: "Each child reserves individualised attendtion and support, ensuting their unique talents and interest are nurtured to reach their full potential.",
    },
    {
      image: "/images/04.svg",
      icon: (
        <GiSkills className="text-primary -mt-[90px] animate-pulse" size={60} />
      ),
      title: "Lifelong Skills",
      description: "Beyond academic acheivment, our curriculum emphasises essential life life skills such as communiction, collaboration and resillence, preparing students for success in an ever-chnaging world.",
    },
  ];
  return (
    <div>
       
      <Img
        src={"/images/navBottom.png"}
        alt="phone"
        width={1440}
        height={28}
        isLocal
        className="w-full h-7 absolute -mt-[5px] z-10 object-cover"
      />
      <div className="bg-[#d5e5eb] py-24 relative">
        <div className="max-w-[1160px] px-5 mx-auto">
          <motion.div
            viewport={{ once: false }}
            variants={
              width && width > 768
                ? HeadingVariants.TEXT
                : HeadingVariants.NO_ANIMATION
            }
            whileInView="show"
            initial="hidden"
            className="lg:text-[201px] text-[80px] lg:leading-[264px] leading-[80px] font-sensei text-secondary"
          >
            Our
          </motion.div>
          <div className="max-w-[666px] mx-auto lg:mt-0 mt-5">
            <div className="lg:text-5xl text-[30px] lg:leading-normal leading-9 font-extrabold text-secondary">
              unique learning environment
            </div>
            <p className="lg:text-lg lg:mt-5 mt-3 line-clamp-5">
              sparks physical growth and discovery while our creative
              curriculum, which combines the traditional and the progressive,
              supports each student’s growth.
            </p>
          </div>
          <div className="flex max-[1024px]:flex-wrap lg:gap-5 gap-10 lg:justify-between justify-center text-center sm:mb-0 pb-40 mt-10">
            {data?.map((item: any, idx: number) => (
              <div
                className={`flex flex-col text-secondary text-center items-center w-full max-w-[250px] ${
                  idx % 2 !== 0 && "lg:mt-52"
                }`}
                key={idx}
              >
                <Img
                  src={item.image}
                  alt={item.image}
                  width={297}
                  height={182}
                  isLocal
                />
                {item.icon}
                <div className="text-[18px] font-black mt-8">{item.title}</div>
                <p className="text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Img
          src="/images/people4.svg"
          alt="phone"
          width={397}
          height={282}
          isLocal
          className="absolute bottom-0 left-0"
        />
      </div>
      <Img
        src={"/images/navBottom.png"}
        alt="phone"
        width={1440}
        height={28}
        isLocal
        className="w-full h-7 -mt-6 -rotate-180 object-cover"
      />
    </div>
  );
};

export default LearningEnvironment;
