import { FC, Fragment, PropsWithChildren, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoIosArrowUp } from "react-icons/io";
import Head from "next/head";
import { metaContent } from "@/utils/content";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
interface IPageWraps {
  wrapperClass?: string;
  isNavbar?: boolean;
  seo?: any;
  navClass?: string;
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
  isNavbar,
  seo,
  navClass,
}) => {
  const [isActive, setIsActive] = useState(false);
  const slideNav = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  typeof window !== "undefined" && window.addEventListener("scroll", slideNav);
  return (
    <Fragment>
      <ToastContainer />
      <Head>
        <title>{seo?.metaTitle ?? metaContent.TITLE}</title>
        <meta
          name="description"
          content={seo?.metaDescription ?? metaContent.DESCRIPTION}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href={metaContent.FAVICON} /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#FFC40D" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        {seo?.meta?.map((meta: any) => (
          <meta name={meta.name} key={meta.id} content={meta.content} />
        ))}
      </Head>
      <div className="animate-bottom">
        {isNavbar && <Navbar navClass={navClass} />}
        <div className={`bg-white ${wrapperClass}`}>{children}</div>
        {isActive && (
          <div
            className="z-10 w-12 h-8 hover:h-10 duration-300 bottom-0 right-10 rounded-t-md fixed cursor-pointer bg-primary flex items-center justify-center"
            onClick={() => window.scroll(0, 0)}
          >
            <IoIosArrowUp color="white" />
          </div>
        )}
        <Footer />
      </div>
    </Fragment>
  );
};

export default PageWrapper;