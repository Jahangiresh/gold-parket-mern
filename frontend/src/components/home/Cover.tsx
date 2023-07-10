import Image from "next/image";
import React from "react";
import Coversvg from "../../assets/images/cover.svg";
const Cover = () => {
  return (
    <div className="h-[90vh]  w-full relative max-md:text-center">
      {" "}
      <Image className="object-cover h-full w-full" src={Coversvg} alt="Logo" />
      <div className="absolute w-full h-full top-0 left-0 z-10 flex items-center">
        <div className="my_container">
          <p className="text-yellow text-[20px] font-semibold">
            Biz ən yaxşısını təklif edirik!
          </p>
          <h1 className="font-bold max-md:text-[40px] text-[50px] text-white">
            Evinizin şəklini çəkərək məhsulun necə görünəcəyini 3D olaraq yoxla!
          </h1>
          <div className="btns flex gap-x-5 mt-5 max-md:justify-center">
            <button className="btn_yellow_main">3D olaraq yoxla</button>
            <button className="btn_yellow_secondary">Məhsullarımız</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
