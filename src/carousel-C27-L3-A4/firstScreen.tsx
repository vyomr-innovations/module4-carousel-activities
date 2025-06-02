"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L3-A4/slideData.json";
import Image from "next/image";

const FirstScreen = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [lastSlide, setLastSlide] = useState<number>(0);
  const [shuffle, setShuffle] = useState(slideData);

  useEffect(() => {
    setShuffle([...slideData].sort(() => Math.random() - 0.5));
  }, []);
  const handleNext = () => {
    if (lastSlide === slideData.length - 1) {
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
      <h4 className="text-xl font-medium text-center text-black">
      Picture Reading
      </h4>

      <div className="w-[900px] bg-white">
        <div className="rounded-lg border p-5 ">
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
                <div className="flex justify-center items-center gap-8 px-5 flex-col ">
                  <h3 className="text-xl font-medium text-black text-center">
                   Here are a few pictures. Have a look and describe it by answering the following questions for each picture
                  </h3>
                  <div className="grid grid-cols-12 w-full gap-8">
                    <div className="col-span-6  flex flex-col ">
                      <Image
                        src={item.img}
                        width={350}
                        height={100}
                        alt="slide image"
                      />
                      <h3 className="text-black border border-gray-200  px-3 py-2  text-center text-xl">{item.text}</h3>
                    </div>

                    <div className="col-span-6 w-full flex flex-col justify-center gap-5 items-center ">
                      <ul className="list-disc px-5 space-y-2">
                        <li className="text-lg text-black ">What is happening in the picture?</li>
                        <li className="text-lg text-black ">What led up to the event?</li>
                        <li className="text-lg text-black ">What are the characters thinking and feeling?</li>
                        <li className="text-lg text-black ">How will the story end?</li>
                      </ul>

                     
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
              lastSlide < slideData.length-1 
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < slideData.length-1  ? "block" : "hidden"
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
