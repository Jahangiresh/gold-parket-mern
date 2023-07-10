import React from "react";
import Logo from "../../assets/images/Logo.svg";
import Image from "next/image";
import { FiGlobe, FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
const Header = () => {
  return (
    <div className="w-full h-20 text-[#121212] ">
      <div className="my_container flex items-center h-full max-lg:gap-x-7 gap-x-14 w-full  justify-between ">
        <div className="left flex gap-x-14 max-xl:gap-x-7">
          <div className="logo">
            <Image src={Logo} alt="Logo" />
          </div>
          <ul className="flex gap-x-8 max-xl:gap-x-3 items-center max-md:hidden">
            <li className=" relative  font-semibold cursor-pointer group">
              Ana səhifə <div className="li_after"></div>
            </li>
            <li className=" relative font-semibold cursor-pointer group">
              Haqqımızda <div className="li_after"></div>
            </li>
            <li className=" relative font-semibold cursor-pointer group">
              Məhsullar <div className="li_after"></div>
            </li>
            <li className=" relative font-semibold cursor-pointer group">
              Əlaqə <div className="li_after"></div>
            </li>
          </ul>
        </div>
        <div className="right ">
          <ul className="flex gap-x-8 max-xl:gap-x-3 items-center">
            <li className="flex gap-x-3 items-center font-semibold max-lg:hidden">
              <FiPhoneOutgoing />
              +994 77 370-13-93
            </li>
            <li className=" font-semibold">
              <button className="btn_black max-xl:px-2 max-md:px-10">
                Qiymət təklifi al
              </button>
            </li>
            <li className=" font-semibold">
              <FiGlobe className=" font-semibold max-md:hidden text-[22px]" />
              <MdOutlineMenu className=" font-semibold md:hidden text-[35px]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
