import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import { useRouter } from "next/router";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import useNavbar from "./views/useNavbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ navClass }: { navClass?: string }) => {
  const router = useRouter();
  const { navActive, isActive, setIsActive } = useNavbar();
  const routes = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Blog", route: "/blog" },
  ];

  return (
    <>
      <div className={`top-0 sticky w-full z-50 ${navClass}`} id="navbar">
        <div
          className={`${
            router.pathname === "/about" && !navActive ? "" : "bg-white"
          } sm:h-20 sm:flex justify-between md:px-8 pb-3 px-5 items-center`}
        >
          <div className="flex justify-between items-center">
            <Img
              src={"/images/logo.png"}
              alt="phone"
              width={150}
              height={45}
              isLocal
              className="cursor-pointer sm:max-w-[150px] max-w-[100px]"
              onClick={() => router.push("/")}
            />
            <GiHamburgerMenu
              className="sm:hidden"
              size={24}
              onClick={() => setIsActive(!isActive)}
            />
          </div>
          <div className="flex max-[640px]:justify-between items-center gap-x-4">
            <div
              className={`gap-x-10 lg:flex font-extrabold hidden mr-5 ${
                router.pathname === "/about" && !navActive ? "text-white" : ""
              }`}
            >
              {routes?.map((item, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer ${
                    router.pathname
                      ?.toLowerCase()
                      .includes(item?.name?.toLowerCase()) && "text-[#21ac94]"
                  }`}
                  onClick={() => router.push(item?.route)}
                >
                  {item?.name}
                </div>
              ))}
            </div>

            <a
              href="tel:9100 7200 40"
              className={
                router.pathname === "/about"
                  ? "bg-[#21ac94] sm:flex hidden items-center gap-x-2 hover:bg-[#21ac94]/70 duration-500 text-white px-5 font-bold py-2 h-fit min-w-fit rounded-full rounded-ss-none"
                  : "font-bold cursor-pointer text-[#167287] gap-x-2 min-w-[172px] flex items-center"
              }
            >
              <FaPhoneAlt size={12} />
              <span className="mt-1">|</span>
              <span>9100 7200 40</span>
            </a>
            {router.pathname !== "/about" && (
              <Button
                onClick={() => router.push("/book-visit")}
                className="rounded p-2 sm:text-base text-sm sm:w-36 min-w-fit"
              >
                Book a Visit
              </Button>
            )}
          </div>
        </div>

        <Img
          src={"/images/navBottom.png"}
          alt="phone"
          width={1440}
          height={28}
          isLocal
          className={`w-full h-7 -mt-[1px] object-cover sm:block hidden ${
            router.pathname === "/about" && !navActive && "!hidden"
          }`}
        />
      </div>
      {isActive && (
        <div
          className="bg-[rgb(0,0,0,0.6)] absolute h-full w-screen top-0 z-[999]"
          onClick={() => setIsActive(false)}
        />
      )}
      {isActive && (
        <div
          className="bg-white h-screen w-[300px] space-y-6 py-2 px-4 fixed top-0"
          id="sideBar"
        >
          <Img
            src={"/images/logo.png"}
            alt="phone"
            width={150}
            height={45}
            isLocal
            className="cursor-pointer sm:max-w-[150px] max-w-[100px]"
            onClick={() => router.push("/")}
          />
          <div className={`space-y-5 font-extrabold mr-5`}>
            {routes?.map((item, idx) => (
              <div
                key={idx}
                className={`cursor-pointer ${
                  router.pathname
                    ?.toLowerCase()
                    .includes(item?.name?.toLowerCase()) && "text-[#21ac94]"
                }`}
                onClick={() => {
                  router.push(item?.route);
                  setIsActive(false);
                }}
              >
                {item?.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 !mt-10">
            <a
              href="tel:9100 7200 40"
              className={
                "bg-[#21ac94] w-full justify-center flex items-center gap-x-2 hover:bg-[#21ac94]/70 duration-500 text-white px-5 font-bold py-2 h-fit min-w-fit rounded-full rounded-ss-none"
              }
            >
              <FaPhoneAlt size={12} />
              <span className="mt-1">|</span>
              <span>9100 7200 40</span>
            </a>
            <Button
              onClick={() => router.push("/book-visit")}
              className="p-2 w-full"
            >
              Book a Visit
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
