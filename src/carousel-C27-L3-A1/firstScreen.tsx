"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L3-A1/slideData.json";
import Image from "next/image";
type myProps = {
    setIsFirstScreen: (value: string) => void;
  };
const FirstScreen = ({setIsFirstScreen}:myProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [lastSlide, setLastSlide] = useState<number>(0);
  const [shuffle, setShuffle] = useState(slideData);
  const [isCorrect, setIsCorrect] = useState<HTMLAudioElement | null>(null);
  const [isWrong, setIsWrong] = useState<HTMLAudioElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [show, setShow] = useState(false);


  useEffect(() => {
    setIsCorrect(new Audio("/sound/correct.mp3"));
    setIsWrong(new Audio("/sound/wrong_buzzer.mp3"));
    setShuffle([...slideData].sort(() => Math.random() - 0.5));
  }, []);
  const handleNext = () => {
    if (lastSlide === slideData.length -1) {
 setIsFirstScreen("result")
    }
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setSelectedIndex(null);
    setShow(false);
    // setShow(false);
  };

  const handleCheck = (ans: string, selectedVal: string, index: number) => {
    setSelectedIndex(index);
    if (ans === selectedVal) {
      isCorrect?.play();
      setShow(true);
    } else {
      isWrong?.play();
    }
  };
  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center gap-5 items-center  flex-col p-5">
      <h4 className="text-xl font-medium text-center text-black">
        7 Cs of communication
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
            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center gap-3 flex-col ">
                  <h3 className="text-2xl font-medium text-black">
                    Read the sentence and say which of the 7Cs does it miss.
                  </h3>
                  <div className="grid grid-cols-12 w-full gap-1">
                    <div className="col-span-6  flex flex-col ">
                      <Image
                        src="/C27Images/7Cs-communication.png"
                        width={350}
                        height={100}
                        alt="slide image"
                      />
                    </div>

                    <div className="col-span-6 w-full flex flex-col justify-center gap-5 items-center ">
                      <h4 className="text-black text-xl  text-center w-full  ">
                        {item.text}
                      </h4>

                      <div className="flex justify-center items-center gap-2 flex-wrap">
                        {item.ans.map((i, index) => (
                          <button
                            onClick={() => handleCheck(item.val, i, index)}
                            key={index}
                            className={`${
                              selectedIndex == index
                                ? item.val == i
                                  ? "bg-green-500"
                                  : "bg-red-500"
                                : "bg-violet-900"
                            }  px-5 py-2 rounded-lg text-white cursor-pointer active:scale-95 transition-all duration-150`}
                          >
                            {i}
                          </button>
                        ))}
                      </div>
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
