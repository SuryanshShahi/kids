import clsx from "clsx";

const styles = {
  backButton: (className?: string) =>
    clsx(
      `flex w-fit cursor-pointer items-center gap-1 font-medium md:text-xl relative`,
      className
    ),
  backButtonIcon: "text-xl md:text-2xl",
  buttonName: "absolute left-6",
  buttonWrapper:
    "absolute left-[-0.4rem] z-[1] w-20 transition-all duration-500 hover:left-[-15px]",
  buttonClass: (
    fullWidth?: boolean,
    size?: string,
    className?: string,
    isDisabled?: boolean,
    noHover?: boolean
  ) =>
    clsx(
      "h-max font-sensei rounded-full rounded-ss-none text-white bg-primary duration-500 p-2 px-5 text-base",
      fullWidth && "w-full",
      {
        "p-1 text-sm": size === "sm",
        "p-3 text-lg": size === "lg",
      },
      className,
      isDisabled && "cursor-not-allowed bg-gray-200 !text-[#A3A3A3]",
      noHover && "lg:hover:transition-none",
      !isDisabled && "hover:bg-[#0a303a] hover:scale-[1.18]"
    ),
  arrows: {
    next: "absolute -bottom-16 right-[35%] w-fit z-50 bg-sliderArrow p-2 lg:hover:bg-sliderArrow/70 min-[700px]:right-4",
    prev: "absolute -bottom-16 right-[55%] w-fit z-50 bg-sliderArrow p-2 lg:hover:bg-sliderArrow/70 min-[700px]:right-16",
  },
};

export default styles;
