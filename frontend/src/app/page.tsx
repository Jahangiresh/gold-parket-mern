import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import UpperHeader from "@/components/header/UpperHeader";
import AboutComponent from "@/components/home/AboutComponent";
import Countings from "@/components/home/Countings";
import Cover from "@/components/home/Cover";
import Features from "@/components/home/Features";
import PricingBanner from "@/components/home/PricingBanner";
import CurvaSlider from "@/components/slider/CurvaSlider";
import { gsap } from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Root() {
  return (
    <div>
      <UpperHeader />
      <Header />
      <Cover />
      <AboutComponent />
      <Countings />
      <CurvaSlider />
      <PricingBanner />
      <Features />
      <Footer />
    </div>
  );
}
