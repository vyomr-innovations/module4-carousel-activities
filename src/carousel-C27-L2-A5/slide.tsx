"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L1-A2/slideData.json";
import FirstSlide from "./firstSlide";

const Slide = ({
  setIsFirstScreen,
}: {
  setIsFirstScreen: (value: string) => void;
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    if (lastSlide > slideData.length - 1) {
      setIsFirstScreen("result");
    }
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);

    // if (swiper.activeIndex != 0) {
    //   setShow(false);
    // } else {
    //   setShow(true);
    // }
    // setShow(false);
  };

  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center  gap-5 items-center  flex-col p-8">
      <div className="w-[90%]  flex  justify-center items-center flex-col ">
        <div className="rounded-lg border p-3 flex  justify-center items-center w-full ">
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <FirstSlide />
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-full flex justify-center items-center min-h-[300px] ">
                <h3 className="text-black text-3xl fount-bold">How many YESSES do you have?</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="w-full flex justify-between items-center mt-5">
          <div
            className={`${
              lastSlide > 0
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowLeft
              className={`${
                lastSlide > 0 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handlePrev}
            />
          </div>

          <div
            className={`${
              lastSlide < 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 1 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
