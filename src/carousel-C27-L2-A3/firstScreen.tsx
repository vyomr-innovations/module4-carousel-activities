"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L2-A3/slideData.json";

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
      <h4 className="text-xl font-medium text-center text-black">
       Debate the score card
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
          

            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-between items-center gap-15 p-2 min-h-[150px] ">
                  <h3 className="text-2xl font-bold text-center text-black">Give reasons to justify your scorecard</h3>
               
                  <h2 className="text-2xl  text-center text-black">
                    {item.qustion}
                  </h2>
                  
                  
               
                </div>
              </SwiperSlide>
            ))}


              <SwiperSlide>
              <div className=" min-h-[300px] flex justify-center items-center flex-col gap-5    ">
               
                <div className="flex w-2/3 flex-col justify-center items-center gap-2">
                  <ul className="list-disc">
                    <li className="text-black text-lg ">
                    The speaker used verbal and non-verbal communication to present effectively.
                    </li>
                    <li className="text-black text-lg ">She uses appropriate examples to present and defend her ideas and opinions.</li>
                    <li className="text-black text-lg ">
                     She appeared confident and determined.
                    </li>
                    <li className="text-black text-lg ">
                   Her use of repetition along with a strong choice of words reflected the importance of the issues she addressed.
                    </li>
                  </ul>

                  <p className="text-lg text-black font-bold" >She can improve by giving more facts (correct/concrete) and also add more about the ways of fighting social problems. I’d give her a 10 in all except concrete, complete, and correct, which would get a 9 each.</p>
                </div>
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
                lastSlide < slideData.length  ? "block" : "hidden"
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
