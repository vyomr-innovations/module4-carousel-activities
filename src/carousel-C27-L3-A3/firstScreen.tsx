"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L3-A3/slideData.json";
import Image from "next/image";

const FirstScreen = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [lastSlide, setLastSlide] = useState<number>(0);
  const [shuffle, setShuffle] = useState(slideData);
  const [show, setShow] = useState(false);

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
    setShow(false);
    // setShow(false);
  };

  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center gap-5 items-center  flex-col p-5">
      <h4 className="text-xl font-medium text-center text-black">
        What will you do?
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
            <SwiperSlide>
              <div className="flex justify-center items-center gap-3 flex-col ">
                <h3 className="text-xl font-medium text-black text-center">
                  Imagine you are in these situations and describe how you would
                  react. Convince why your choice is the best reaction in the
                  situation.
                </h3>
                <div className="grid grid-cols-12 w-full gap-1">
                  <div className="col-span-12  flex justify-center items-center">
                    <Image src="/C27Images/Girl_and_Mom_With_Cookies.jpg" width={350} height={100} alt="slide image" />
                  </div>

                  <div className="col-span-12 w-full flex flex-col justify-center gap-5 items-center ">
                    {show ? (
                      <div className="flex justify-center items-center flex-col gap-5">
                        <p className="text-center text-violet-800 font-medium text-xl px-5">
                        Your mom made only enough cookies for your sister’s
                        class. She tells the family not to eat any. You really
                        want a cookie, so you decide to take one. Mom notices a
                        cookie is gone. What will you do?
                      </p>

                      <ul className="list-decimal">
                      <li className="text-gray-600" >Tell mum you had the cookie OR</li>
                      <li className="text-gray-600">Pretend you know nothing about it.</li>
                      </ul>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShow(true)}
                        className={`bg-violet-900  px-5 py-2 rounded-lg text-white cursor-pointer active:scale-95 transition-all duration-150`}
                      >
                        Check
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-3 flex-col ">
                  <h3 className="text-xl font-medium text-black text-center">
                    Imagine you are in these situations and describe how you
                    would react. Convince why your choice is the best reaction
                    in the situation.
                  </h3>
                  <div className="grid grid-cols-12 w-full gap-1">
                    <div className="col-span-12  flex justify-center items-center">
                      <Image
                        src={item.img}
                        width={350}
                        height={100}
                        alt="slide image"
                      />
                    </div>

                    <div className="col-span-12 w-full flex flex-col justify-center gap-5 items-center ">
                      {show ? (
                        <p className="text-center text-violet-800 font-medium text-xl px-5">
                          {item.sugge}
                        </p>
                      ) : (
                        <button
                          onClick={() => setShow(true)}
                          className={`bg-violet-900  px-5 py-2 rounded-lg text-white cursor-pointer active:scale-95 transition-all duration-150`}
                        >
                          Check
                        </button>
                      )}
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
              lastSlide < slideData.length && show
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < slideData.length && show ? "block" : "hidden"
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
