import Img from "@/shared/Img";
import React from "react";
import { FaCircleCheck, FaLocationDot, FaMobileScreen } from "react-icons/fa6";
import { BsAlarmFill } from "react-icons/bs";

const AboutUs = () => {
  const data = [
    {
      icon: "/images/facility1.png",
      title: "State-of-the-Art Building",
      description:
        "Enjoy learning in our modern, air-conditioned facility, fostering focus and exploration.",
    },
    {
      icon: "/images/facility2.png",
      title: "Secure Transport",
      description:
        "Travel safely in our air-conditioned school buses, ensuring a comfortable journey to and from school.",
    },
    {
      icon: "/images/facility3.png",
      title: "Door-to-Door Service",
      description:
        "Benefit from hassle-free pickup and drop-off at your doorstep for added convenience.",
    },
    {
      icon: "/images/facility4.png",
      title: "Spacious Play Areas",
      description:
        "Explore and play in our expansive outdoor and indoor spaces, promoting physical activity and socialisation.",
    },
  ];
  return (
    <div className="bg-[#f9f4f0] pb-32">
      <div className="bg-[url('/images/aboutHero.jpg')] bg-fixed justify-between text-white flex flex-col md:h-screen h-[580px] bg-no-repeat bg-cover sm:bg-[length:100%_900px] md:bg-[length:100%_100%] w-full relative">
        <div className="min-w-fit my-auto max-[768px]:mx-auto md:space-y-6 md:pl-28 lg:py-0 pt-16 md:text-start text-center">
          <div className="text-[#21ac94] text-xl font-semibold">
            LITTLE SOMETHING
          </div>
          <h1 className="font-black md:text-[85px] text-5xl leading-[85px]">
            About us
          </h1>
          <button className="bg-[#21ac94] px-8 cursor-pointer hover:bg-[#21ac94]/70 duration-500 font-bold text-xl py-3 h-fit min-w-fit rounded-full rounded-ss-none">
            Contact Us
          </button>
        </div>
        <Img
          src={"/images/aboutBottom.png"}
          alt="phone"
          width={1440}
          height={160}
          isLocal
          className="w-full h-[160px] object-cover z-40 relative mt-ato -mb-1"
        />
      </div>
      <div className="md:space-y-32 space-y-24 py-20">
        <div className="px-5 lg:flex-row flex-col flex items-center lg:gap-6 gap-10 justify-between container mx-auto">
          <div className="space-y-6">
            <div className="text-[#21ac94] text-xl font-semibold">
              LITTLE SOMETHING
            </div>
            <div className="font-black md:text-[54px] text-4xl md:leading-[64px]">
              Empowering Minds with<br></br>
              <span className="text-[#ffb129]">VR at kiddle Preschool</span>
            </div>
            <p className="text-sm leading-6">
              Ignite your child's imagination and curiosity with immersive
              experiences where virtual reality opens doors to limitless
              learning adventures.
            </p>
            <button className="bg-[#21ac94] hover:bg-[#21ac94]/70 duration-500 text-white px-8 font-bold text-xl py-3 h-fit min-w-fit rounded-full rounded-ss-none">
              Book Now
            </button>
          </div>
          <div className="bg-white p-8 rounded-3xl space-y-5 w-fit">
            <div className="text-2xl font-black leading-6 w-[320px]">
              Seamless Technology
            </div>
            {[
              "Bus-racking system for secure transportation.",
              "App-based assignment tracking for parental involvement.",
              "Dietary assistance ensuring holistic child development.",
            ]?.map((item: string, idx: number) => (
              <div className="flex gap-x-2" key={idx}>
                <FaCircleCheck color="#ffb129" className="mt-1" size={16} />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 container mx-auto px-5">
          {data?.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl space-y-3 lg:max-w-[300px] hover:shadow-xl duration-500"
            >
              <Img
                src={item?.icon}
                alt={item?.icon}
                width={64}
                height={64}
                isLocal
              />
              <div className="text-2xl font-black !mt-6">{item?.title}</div>
              <p className="text-sm leading-6">{item?.description}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 px-5 lg:pl-0 lg:pr-10 gap-10 items-center max-[1024px]:place-items-center">
          <Img
            src="/images/branches.png"
            alt="branches"
            width={594}
            height={413}
            isLocal
          />
          <div className="space-y-6">
            <div className="text-[#21ac94] text-xl font-semibold">
              KIDDLE PLAY
            </div>
            <div className="font-black md:text-[54px] text-4xl md:leading-[64px]">
              Why Choose Us
            </div>
            <p className="text-sm leading-6">
              At Kiddle, we pride ourselves on our commitment to excellence in
              early childhood education. Our team of dedicated educators,
              trained under the esteemed Sarwaswati Vidya Vihar banner, ensures
              that each child receives the highest standard of care and
              instruction. With our rich legacy and expertise, we guarantee a
              nurturing environment where every child thrives.
            </p>

            <button className="bg-[#21ac94] hover:bg-[#21ac94]/70 duration-500 text-white px-8 font-bold text-xl py-3 h-fit min-w-fit rounded-full rounded-ss-none">
              Meet the team
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:container md:pr-0 md:ml-auto pl-5 px-5 items-center place-items-center">
          <div className="space-y-8">
            <div className="font-black md:text-[54px] text-4xl md:leading-[64px] lg:max-w-md">
              <span className="text-[#ffb129]">Welcome</span> to our circle of
              friends
            </div>
            <div className="bg-white px-8 py-10 rounded-3xl text-[#282828] space-y-10 md:mx-0 mx-auto max-w-[320px]">
              <div className="flex gap-x-4 items-center">
                <FaLocationDot size={40} />
                <div>
                  <div className="text-[#21ac94] font-semibold">LOCATION</div>
                  <div className="text-sm">
                    108-48 Queens Blvd, Forest Hills, NY 11375
                  </div>
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <BsAlarmFill size={40} />
                <div>
                  <div className="text-[#21ac94] font-semibold">HOURS</div>
                  <div className="text-sm">
                    108-48 Queens Blvd, Forest Hills, NY 11375
                  </div>
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <FaMobileScreen size={40} />
                <div>
                  <div className="text-[#21ac94] font-semibold">CONTACT</div>
                  <div className="text-sm">
                    108-48 Queens Blvd, Forest Hills, NY 11375
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="/images/aboutLocation.jpg"
            alt="branches"
            width={594}
            height={413}
            isLocal
            className="max-[768px]:rounded-full md:ml-auto md:rounded-ss-full md:rounded-es-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
