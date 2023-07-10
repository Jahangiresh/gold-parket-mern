"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import logo from "../../assets/images/FooterLogo.svg";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  return (
    <>
      <div className="bg-black flex justify-center items-center  h-[192px]  border-b border-b-[#1d1d1d]">
        <div className="footerUpper h-full flex justify-center items-center flex-col  ">
          <Image src={logo} alt="jpg"></Image>
          <h1 className="text-white font-bold text-[20px] mt-3">GoldParket</h1>
        </div>
      </div>
      <div className="footer h-[475px] bg-black">
        <div className="my_container  grid grid-cols-3 items-center h-full">
          <div>
            <h2 className="self-stretch text-white text-[20px] font-semibold leading-loose mb-10">
              Ən son yeniliklərdən xəbərdar olmaq üçün abunə ol!
            </h2>

            <div className="flex">
              <div className="flex mt-3">
                <input
                  type="text"
                  className=" w-[368px] py-2  px-3 bg-neutral-800 rounded-3xl left-[16px]  outline-none  text-stone-300 text-[16px] font-normal leading-relaxed"
                  placeholder=" Email adresinizi daxil edin"
                />
                <button className="btn_yellow_main ml-2 ">Göndər</button>
              </div>
            </div>
          </div>
          <div className="text-white leading-loose  flex flex-col items-center text-left">
            <h3 className="mb-5 font-semibold text-[20px] ">Menu</h3>
            <ul>
              <li>Ana səhifə</li>
              <li>Haqqımızda</li>
              <li>Məhsullar</li>
              <li>Əlaqə</li>
            </ul>
          </div>
          <div className="text-white leading-loose  flex flex-col items-center text-left">
            <h3 className="mb-5 font-semibold text-[20px] ">
              Əlaqə vasitələrimiz
            </h3>
            <ul>
              <li>Telefon: 077 370 13 93</li>
              <li>Telefon: 050 320 04 24</li>
              <li>Email: info@goldparket.az</li>
              <li>
                Ünvan: Bakı Şəhəri, Nəriman Nərimanov rayonu, Həsən Əliyev
                küçəsi 87, Diamed klinikasının yanı.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copywrite h-10 w-full text-center flex items-center bg-black text-white justify-center border-t border-t-[#1d1d1d]">
        <h1>Copyright © - 2023. Weblash komandası tərəfindən hazırlanmışdır</h1>
      </div>
    </>
  );
};

export default Footer;
