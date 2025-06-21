"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, {  useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import SecoundSlide from "./secoundSlide";
import ThirdSlide from "./thirdSlide";

const FirstScreen = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
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
      <h3 className="text-2xl font-medium text-black">Decode Speech</h3>
      <p className="text-lg text-black">
        Highlight the information in the following speech as must, should, and
        nice to know categories.
      </p>

      <div className="w-[950px] bg-white">
        <div className="rounded-lg border p-3 ">
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
              <div className="grid grid-cols-12 w-full ">
                <div className="col-span-6 w-full ">
                  <Image
                    src="/C27Images/communication_activity.png"
                    width={400}
                    height={100}
                    alt="communication_activity image"
                  />
                </div>

                <div className="col-span-6 w-full flex justify-center items-start gap-5 flex-col ">
                  <h3 className="text-black text-xl">
                    <span className="font-bold text-[#3674B5]">MUST </span> :
                    Information that is absolutely essential
                  </h3>
                  <h3 className="text-black text-xl">
                    <span className="font-bold text-[#06923E]">SHOULD </span> :
                    Information that is important, but not essential
                  </h3>
                  <h3 className="text-black text-xl">
                    <span className="font-bold text-[#890189] ">
                      NICE TO KNOW{" "}
                    </span>{" "}
                    : Information that is good to know but will not affect the
                    outcome
                  </h3>
                </div>
              </div>
            </SwiperSlide>
{/* select color slide  */}
             <SwiperSlide>
             <SecoundSlide/>
            </SwiperSlide>

            {/* select color slide  */}
            <SwiperSlide>
             <ThirdSlide/>
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
              lastSlide <2
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide <2 ? "block" : "hidden"
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
