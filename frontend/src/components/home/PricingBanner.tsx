import React from "react";
import cubicsbg from "../../assets/images/cubicsBG.svg";
import kerpic from "../../assets/images/kerpic.svg";
import Image from "next/image";
const PricingBanner = () => {
  return (
    <div className="h-[385px] bg-black w-full relative">
      <div className="my_container h-full w-full">
        <div className="flex items-center h-full relative z-20 max-md:flex-col max-md:justify-center">
          <h1 className="max-md:text-[38px] max-sm:text-[20px] text-[50px] text-white font-semibold max-md:text-center max-md:mb-3">
            Keyfiyyətli parketlərimizlə məkanınızı gözəlləşdirin
          </h1>
          <button className="btn_yellow_main px-6 min-w-max">
            Qiymət təklifi al
          </button>
        </div>
        <div className="absolute right-0 top-0 z-10 h-full ">
          <Image className="h-full " src={cubicsbg} alt="jpg" />
        </div>
        <div className="absolute right-0 top-0 z-0 h-full">
          <Image className="h-full " src={kerpic} alt="jpg" />
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
