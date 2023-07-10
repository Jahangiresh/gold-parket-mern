"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";
const CurvaSlider = () => {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  var settings2 = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="title mb-5">
        <p className="text-[18px] text-yellow font-medium text-center mt-12">
          20 ildən artıq təcrübəmizlə xidmətinizdəyik.
        </p>
        <h2 className="text-center text-neutral-900 max-md:text-[20px] text-[50px] font-semibold">
          Keyfiyyətli parketlərimizlə məkanınızı <br /> gözəlləşdirin
        </h2>
      </div>
      <Slider {...settings}>
        <div className=" w-full h-[500px] px-2">
          <img
            className="object-cover h-full w-full"
            src="https://img.itinari.com/page/content/original/ce91dbc9-2437-471d-9ec2-0c2237974f70-baku-photo.jpg?ch=DPR&dpr=2.625&w=994&s=bfdd44533c4b117112817935e61dbe28"
            alt=""
          />
        </div>
        <div className="  h-[500px] px-2">
          <img
            className="object-cover h-full w-full"
            src="https://img.itinari.com/page/content/original/ce91dbc9-2437-471d-9ec2-0c2237974f70-baku-photo.jpg?ch=DPR&dpr=2.625&w=994&s=bfdd44533c4b117112817935e61dbe28"
            alt=""
          />
        </div>{" "}
        <div className="  h-[500px] px-2">
          <img
            className="object-cover h-full w-full"
            src="https://img.itinari.com/page/content/original/ce91dbc9-2437-471d-9ec2-0c2237974f70-baku-photo.jpg?ch=DPR&dpr=2.625&w=994&s=bfdd44533c4b117112817935e61dbe28"
            alt=""
          />
        </div>
        <div className="  h-[500px] px-2">
          <img
            className="object-cover h-full w-full"
            src="https://img.itinari.com/page/content/original/ce91dbc9-2437-471d-9ec2-0c2237974f70-baku-photo.jpg?ch=DPR&dpr=2.625&w=994&s=bfdd44533c4b117112817935e61dbe28"
            alt=""
          />
        </div>
        <div className="  h-[500px] px-2">
          <img
            className="object-cover h-full w-full"
            src="https://img.itinari.com/page/content/original/ce91dbc9-2437-471d-9ec2-0c2237974f70-baku-photo.jpg?ch=DPR&dpr=2.625&w=994&s=bfdd44533c4b117112817935e61dbe28"
            alt=""
          />
        </div>
        <div className="  h-[500px] px-2">
          <img
            className="object-cover h-full w-full"
            src="https://img.itinari.com/page/content/original/ce91dbc9-2437-471d-9ec2-0c2237974f70-baku-photo.jpg?ch=DPR&dpr=2.625&w=994&s=bfdd44533c4b117112817935e61dbe28"
            alt=""
          />
        </div>
      </Slider>
      <div className="title mb-5">
        <p className="text-[18px] text-yellow font-medium text-center mt-12">
          Məhsullarımız
        </p>
        <h2 className="text-center text-neutral-900 max-md:text-[20px] text-[50px] font-semibold">
          Döşəmən parketlərimiz
        </h2>
      </div>
      <div className="my_container">
        <Slider className="flex gap-x-3 overflow-hidden" {...settings2}>
          <div className=" w-full h-[500px] px-2 ">
            <img
              className="object-cover h-full w-full"
              src="https://algroup.az/wp-content/uploads/2023/03/artemis-1-600x600.jpg"
              alt=""
            />
          </div>

          <div className="  h-[500px] px-2">
            <img
              className="object-cover h-full w-full"
              src="https://www.floor-experts.rs/wp-content/uploads/products/Parketi-22991_artlou-ist300.jpg"
              alt=""
            />
          </div>
          <div className="  h-[500px] px-2">
            <img
              className="object-cover h-full w-full"
              src="https://www.mbkalbania.com/ngarkime/2022/02/csm_D4766_665_133_V4-Area_A2_CMYK_ECI.jpg_1ef44e0605-scaled.jpg"
              alt=""
            />
          </div>
          <div className="  h-[500px] px-2">
            <img
              className="object-cover h-full w-full"
              src="https://algroup.az/wp-content/uploads/2022/02/Antrasit-Macar-600x600.jpg"
              alt=""
            />
          </div>
          <div className="  h-[500px] px-2">
            <img
              className="object-cover h-full w-full"
              src="https://algroup.az/wp-content/uploads/2022/01/Lecce-600x600.jpg"
              alt=""
            />
          </div>
        </Slider>
        <div className="w-full flex justify-center">
          <button className="btn_black_secondary my-8">Hamısını gör</button>
        </div>
      </div>
    </div>
  );
};

export default CurvaSlider;
