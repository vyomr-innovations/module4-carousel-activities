"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L1-A2/slideData.json";

const FirstScreen = ({
  setIsFirstScreen,
}: {
  setIsFirstScreen: (value: string) => void;
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [show, setShow] = useState(true);
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

    if (swiper.activeIndex != 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    // setShow(false);
  };

  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center gap-5 items-center  flex-col p-5">
      <h4 className="text-2xl font-medium text-center text-black">
        Comic reading
      </h4>

      <div className="w-[900px]">
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
            <SwiperSlide>
              <div className="  flex justify-center items-center flex-col gap-5    ">
                <div className=" text-black font-bold text-2xl py-2">
                  Read this comic and answer the following questions.
                </div>
                <Image
                  src="/C27Images/CB.png"
                  width={900}
                  height={100}
                  alt="four-c-of-communication image"
                />
              
              </div>
            </SwiperSlide>

            {slideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full h-full  place-items-center gap-3">
                  <div className="col-span-12 flex flex-col gap-5 min-h-[300px] items-center justify-center  ">
                    <h4 className="text-black text-3xl text-center font-medium">
                      {item.qustion}
                    </h4>
                    {show ? (
                    <div className="w-[80%]">
                       <p className=" text-2xl text-violet-800 text-center ">
                        {item.suggetion}
                      </p>
                    </div>
                    ) : (
                      <button
                        onClick={() => setShow(true)}
                        className={`
                        bg-violet-900
                             min-w-[100px] cursor-pointer hover:scale-102 transition duration-150 active:scale-90 active:shadow-md active:shadow-black text-white rounded-lg py-2 `}
                      >
                        Check
                      </button>
                    )}
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
              lastSlide < slideData.length + 1 && show
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < slideData.length + 1 && show ? "block" : "hidden"
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
