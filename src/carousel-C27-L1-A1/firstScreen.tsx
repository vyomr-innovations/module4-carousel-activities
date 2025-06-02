"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L1-A1/slideData.json";

const FirstScreen = ({
  setIsFirstScreen,
}: {
  setIsFirstScreen: (value: string) => void;
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [show, setShow] = useState(true);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [btnIndex, setBtnIndex] = useState<number | null>();
  const [isCorrect, setIsCorrect] = useState<HTMLAudioElement | null>(null);
  const [shuffle, setShuffle] = useState(slideData);

  useEffect(() => {
    setIsCorrect(new Audio("/sound/correct.mp3"));
       setShuffle([...slideData].sort(()=> Math.random() - 0.5) )
  }, []);
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
    setBtnIndex(null);
    if (swiper.activeIndex != 0  ) {
      setShow(false);
    }else{
      setShow(true)
    }
    // setShow(false);
  };

  const handleCheck = (answerVal: string, option: string, index: number) => {
    setBtnIndex(index);
    if (answerVal === option) {
      isCorrect?.play();
      setShow(true);
    }
  };

  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center gap-5 items-center  flex-col p-5">
      <h4 className="text-xl font-medium text-center text-black">
        {lastSlide == 0
          ? "4 Cs of Communication"
          : "Identify the 4Cs in each of these speakers"}
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
                <Image
                  src="/C27Images/four-c-of-communication.png"
                  width={500}
                  height={100}
                  alt="four-c-of-communication image"
                />
                <h3 className="text-2xl font-medium text-center text-black w-full px-2 py-1 rounded-sm">
                  Can you take a guess about what these words might mean?
                </h3>
              </div>
            </SwiperSlide>

            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full h-full  place-items-center gap-3">
                  <div className="col-span-12 text-black font-bold text-2xl py-2">
                    Select one of the 4Cs for the following statements.
                  </div>
                  <div className="col-span-6 flex justify-center items-center w-full  ">
                    <Image
                      src="/C27Images/four-c-of-communication.png"
                      width={550}
                      height={100}
                      alt="four-c-of-communication image"
                    />
                  </div>

                  <div className="col-span-6 flex flex-col gap-5 min-h-[250px] items-center justify-center  ">
                    <h4 className="text-black text-xl text-center font-medium">
                      {item.qustion}
                    </h4>
                    <div className="flex justify-center items-center flex-wrap gap-2">
                      {item.ans.map((answer, index) => (
                        <button
                          onClick={() =>
                            handleCheck(item.val, answer.option, index)
                          }
                          key={index}
                          className={`
                            ${
                              btnIndex === index
                                ? item.val == answer.option
                                  ? "bg-green-400"
                                  : "bg-red-500"
                                : "bg-violet-900"
                            }
                            
                             min-w-[150px] cursor-pointer hover:scale-102 transition duration-150 active:scale-90 active:shadow-md active:shadow-black text-white rounded-lg py-2 `}
                        >
                          {answer.option}
                        </button>
                      ))}
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
