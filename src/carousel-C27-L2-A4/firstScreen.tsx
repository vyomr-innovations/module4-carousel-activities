"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, {  useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L2-A4/slideData.json";
import Image from "next/image";
import finalSlideData from "@/carousel-C27-L2-A4/finalSlide.json";

const FirstScreen = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [lastSlide, setLastSlide] = useState<number>(0);
  

 
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
      <h4 className="text-xl font-bold text-center text-black">
       Picture Reading
      </h4>

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
           {slideData.map((item, index) => (
  <React.Fragment key={`pair-${index}`}>
    {/* Normal Slide */}
    <SwiperSlide key={`slide-${index}`}>
      <div className="flex justify-center items-center gap-3 flex-col">
        <h3 className="text-2xl font-bold text-black">
          Describe the following images
        </h3>
        <div className="grid grid-cols-12 w-full gap-5">
          <div className="col-span-6 relative w-full h-[400px] flex flex-col justify-end">
            <Image
              src={item.img}
              fill
              className="object-cover"
              alt="slide image"
            />
            {/* <h4 className="text-white z-30 text-2xl font-bold text-center w-full bg-violet-900">
              {item.imagTitle}
            </h4> */}
          </div>

          <div className="col-span-6 w-full flex flex-col justify-center items-center">
            <ul className="list-disc px-5">
              <li className="text-xl text-black">What is happening in the picture?</li>
              <li className="text-xl text-black">What led up to the event?</li>
              <li className="text-xl text-black">What are the characters thinking and feeling?</li>
              <li className="text-xl text-black">How will the story end?</li>
            </ul>
          </div>
        </div>
      </div>
    </SwiperSlide>

    {/* Suggestive Slide */}
    {finalSlideData[index] && (
      <SwiperSlide key={`suggest-${index}`}>
        <div className="grid grid-cols-12 w-full gap-5">
          <div className="col-span-12 text-2xl font-bold w-full text-center border-b text-black">
            Suggestive responses
          </div>
          <div className="col-span-6 relative w-full h-[400px] flex flex-col justify-end">
            <Image
              src={finalSlideData[index].img}
              fill
              className="object-cover"
              alt="slide image"
            />
          </div>

          <div className="col-span-6 flex flex-col w-full gap-8 justify-center items-center py-2">
            <h4 className="text-black text-xl font-bold">
              {finalSlideData[index].title}
            </h4>
            <div className="col-span-6 w-full flex flex-col justify-center items-center">
              {finalSlideData[index].sugge.map((item, sugIndex) => (
                <ul key={`sug-${index}-${sugIndex}`} className="list-disc px-5 space-x-2">
                  <li className="text-lg text-black">{item}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
    )}
  </React.Fragment>
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
              lastSlide < slideData.length + finalSlideData.length -1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < slideData.length + finalSlideData.length -1 ? "block" : "hidden"
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
