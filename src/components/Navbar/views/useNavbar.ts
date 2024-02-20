import { useRouter } from "next/router";
import { useState } from "react";

const useNavbar = () => {
  const [navActive, setNavActive] = useState(false);
  const router = useRouter();
  const slideNav = () => {
    var x: any = document.getElementById("navbar");
    if (window.scrollY >= 100) {
      if (x.classList === "active") {
        setNavActive(false);
        x.classList.remove("active");
      } else {
        x.classList.add("active");
        setNavActive(true);
      }
    } else {
      x.classList.remove("active");
      setNavActive(false);
    }
  };
  typeof window !== "undefined" && window.addEventListener("scroll", slideNav);

  return { router, navActive };
};

export default useNavbar;
