import Image from "next/image";
import React from "react";
import checkIcon from "../../assets/images/checkIcon.svg";
const Features = () => {
  return (
    <div className="my_container">
      <div className="title mb-5">
        <p className="text-[18px] text-yellow font-medium text-center mt-12">
          GoldParket
        </p>
        <h2 className="text-center text-neutral-900 max-md:text-[20px] text-[50px] font-semibold">
          Bizim parketlərin əsas üstünlükləri
        </h2>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 pt-4">
        <ul>
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
        </ul>
        <ul>
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
        </ul>
        <ul className="sm:max-md:col-span-3">
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
          <li className="list-none font-semibold leading-7 flex items-center gap-x-3 mb-5 ">
            <Image src={checkIcon} alt="jpg"></Image> Birbaşa beton səthə, isti
            döşəməyə və fanera döşəmə üzrə tətbiq edilə bilən
          </li>{" "}
        </ul>
      </div>
    </div>
  );
};

export default Features;
