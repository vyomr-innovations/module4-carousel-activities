"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L3-warmup/slideData.json";
import Image from "next/image";

const FirstScreen = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [lastSlide, setLastSlide] = useState<number>(0);
  const [shuffle, setShuffle] = useState(slideData);

  useEffect(() => {
    setShuffle([...slideData].sort(() => Math.random() - 0.5));
  }, []);
  const handleNext = () => {
    if (lastSlide > slideData.length - 1) {
    }
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);

    // setShow(false);
  };

  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center gap-5 items-center  flex-col p-5">
     <h3 className="text-2xl font-medium text-black">
                    Unscramble words
                  </h3>

      <div className="w-[900px] bg-white">
        <div className="rounded-lg border p-3 ">
          <Swiper
            slidesPerView={1}
            loop={false}
            autoplay={false}
            allowTouchMove={false}
            modules={[Navigation]}
            onSlideChange={handleChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-3 flex-col ">
                  
                  <div className="grid grid-cols-12 w-full gap-1">
                    <div className="col-span-12 w-full flex justify-center items-center min-h-[200px] ">
                    
                      <h4 className="text-black text-4xl font-bold text-center w-full ">
                        {item.word}
                      </h4>
                    </div>

                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
<SwiperSlide>
  <div className="flex justify-center items-center">

<Image src="/C27Images/7Cs-communication.png" width={400} height={100} alt="final slide"/>
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
              lastSlide < slideData.length 
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                  lastSlide < slideData.length ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
