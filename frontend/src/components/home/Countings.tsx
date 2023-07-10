"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "aos/dist/aos.css";
const Countings = () => {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(app.current, { rotate: 360, duration: 5 });
  }, []);
  return (
    <div
      // ref={app}
      className="bg-[#121212] flex items-center text-4xl font-bold md:h-[385px] py-10"
    >
      <div className="my_container grid grid-cols-3 px-[70px] max-md:px-7 mt-12 gap-6  max-md:grid-cols-2 max-sm:grid-cols-1 ">
        <div className="bg-[#191919] rounded-md text-center px-9 py-11 font-bold text-6xl text-white ">
          500+
          <p className="font-medium text-xl	mt-6 text-yellow"> Parket çeşidi</p>
        </div>
        <div className="bg-[#191919] rounded-md text-center px-9 py-11 font-bold text-6xl text-white">
          450+
          <p className="font-medium text-xl	mt-6 text-yellow">
            Tamamlanmış proyekt
          </p>
        </div>
        <div className="bg-[#191919] rounded-md text-center px-9 py-11 font-bold text-6xl text-white max-md:sm:col-span-2">
          20 il+
          <p className="font-medium text-xl	mt-6 text-yellow">
            Tamamlanmış proyekt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Countings;
