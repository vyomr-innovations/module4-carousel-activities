"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, {  useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

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
      <h4 className="text-xl font-medium text-center text-black">
        Picture story
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
             <SwiperSlide>
                <div className="flex justify-center items-center gap-8 px-5 flex-col ">
                  <h3 className="text-xl font-medium text-black text-center">
                    Guess the response and complete the picture story
                  </h3>
                  <div className="grid grid-cols-12 w-full gap-8">
                    <div className="col-span-12 w-full  flex flex-col justify-center items-center ">
                     <div className="relative w-[450px] h-[400px] bg-amber-400">
                       <Image
                        src="/C27Images/1.png"
                        fill
                        // className="object-contain"
                        alt="slide image"
                      />
                        <div className="absolute top-4  right-7 min-h-[138px] w-[190px]  bg-white  text-center flex   justify-center items-center   border border-black">
                        <textarea
                          className="text-black px-2 placeholder:text-gray-400 w-full min-h-[80px] outline-none text-xl "
                          placeholder="write here..."
                        />
                      </div>
                     </div>
                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>

               <SwiperSlide>
                <div className="flex justify-center items-center gap-8 px-5 flex-col ">
                  <h3 className="text-xl font-medium text-black text-center">
                    Guess the response and complete the picture story
                  </h3>
                  <div className="grid grid-cols-12 w-full gap-8">
                    <div className="col-span-12 w-full  flex flex-col justify-center items-center ">
                     <div className="relative w-[450px] h-[400px] bg-amber-400">
                       <Image
                        src="/C27Images/2.png"
                        fill
                        // className="object-contain"
                        alt="slide image"
                      />
                        <div className="absolute top-2  right-4 min-h-[135px] w-[180px]  bg-white  text-center flex   justify-center items-center   border border-black">
                        <textarea
                          className="text-black px-2 placeholder:text-gray-400 w-full min-h-[80px] outline-none text-xl "
                          placeholder="write here..."
                        />
                      </div>
                     </div>
                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                 <SwiperSlide>
                <div className="flex justify-center items-center gap-8 px-5 flex-col ">
                  <h3 className="text-xl font-medium text-black text-center">
                    Guess the response and complete the picture story
                  </h3>
                  <div className="grid grid-cols-12 w-full gap-8">
                    <div className="col-span-12 w-full  flex flex-col justify-center items-center ">
                     <div className="relative w-[450px] h-[400px] bg-amber-400">
                       <Image
                        src="/C27Images/3.png"
                        fill
                        // className="object-contain"
                        alt="slide image"
                      />
                        <div className="absolute top-3  right-4 min-h-[163px] w-[172px]  bg-white  text-center flex   justify-center items-center   border border-black">
                        <textarea
                          className="text-black px-2 placeholder:text-gray-400 w-full min-h-[80px] outline-none text-xl "
                          placeholder="write here..."
                        />
                      </div>
                     </div>
                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
                 <SwiperSlide>
                <div className="flex justify-center items-center gap-8 px-5 flex-col ">
                  <h3 className="text-xl font-medium text-black text-center">
                    Guess the response and complete the picture story
                  </h3>
                  <div className="grid grid-cols-12 w-full gap-8">
                    <div className="col-span-12 w-full  flex flex-col justify-center items-center ">
                     <div className="relative w-[450px] h-[400px] bg-amber-400">
                       <Image
                        src="/C27Images/4.png"
                        fill
                        // className="object-contain"
                        alt="slide image"
                      />
                        <div className="absolute top-1  right-2 min-h-[140px] w-[190px]  bg-white  text-center flex   justify-center items-center   border border-black">
                        <textarea
                          className="text-black px-2 placeholder:text-gray-400 w-full min-h-[80px] outline-none text-xl "
                          placeholder="write here..."
                        />
                      </div>
                     </div>
                    
                    </div>
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
              lastSlide< 3 
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < 3 ? "block" : "hidden"
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
