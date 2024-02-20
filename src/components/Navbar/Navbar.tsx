import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import { useRouter } from "next/router";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import useNavbar from "./views/useNavbar";
const Navbar = ({ navClass }: { navClass?: string }) => {
  const router = useRouter();
  const { navActive } = useNavbar();
  const routes = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Blog", route: "/blog" },
  ];
  return (
    <div className={`top-0 sticky w-full z-50 ${navClass}`} id="navbar">
      <div
        className={`${
          router.pathname === "/about" && !navActive ? "" : "bg-white"
        } h-20 flex justify-between md:px-8 px-5 items-center`}
      >
        <Img
          src={"/images/logo.png"}
          alt="phone"
          width={150}
          height={45}
          isLocal
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <div className="flex items-center gap-x-4">
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
                ? "bg-[#21ac94] flex items-center gap-x-2 hover:bg-[#21ac94]/70 duration-500 text-white px-5 font-bold py-2 h-fit min-w-fit rounded-full rounded-ss-none"
                : "font-bold cursor-pointer text-[#167287] gap-x-2 min-w-[172px] sm:flex items-center hidden"
            }
          >
            <FaPhoneAlt size={12} />
            <span className="mt-1">|</span>
            <span>9100 7200 40</span>
          </a>
          {router.pathname !== "/about" && (
            <Button
              onClick={() => router.push("/book-visit")}
              className="rounded p-2 w-36 min-w-fit"
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
        className={`w-full h-7 -mt-[1px] object-cover ${
          router.pathname === "/about" && !navActive && "hidden"
        }`}
      />
    </div>
  );
};

export default Navbar;
