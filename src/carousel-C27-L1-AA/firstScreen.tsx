"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slideData from "@/carousel-C27-L1-AA/slideData.json";

const FirstScreen = ({
  setFirstScreen,
}: {
  setFirstScreen: (value: string) => void;
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [show, setShow] = useState(true);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [shuffle, setShuffle] = useState(slideData);
  const [input,setInput]=useState("")

  useEffect(() => {
    setShuffle([...slideData].sort(() => Math.random() - 0.5));
  }, []);
  const handleNext = () => {
    if (lastSlide > slideData.length - 1) {
      setFirstScreen("result");
    }
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
  setInput("")
    if (swiper.activeIndex != 0) {
      setShow(false);
    } else {
      setShow(true);
    }
    // setShow(false);
  };

  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center gap-5 items-center  flex-col p-5">
      <h4 className="text-xl font-medium text-center text-black">
        {lastSlide == 0
          ? " Class Prefect"
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
              <div className=" min-h-[300px] flex justify-center items-center flex-col gap-5    ">
                <h4 className="text-xl text-black font-bold">
                  Your class has nominated you to be class prefect.
                </h4>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl text-black ">
                    As a prefect, you have to ensure that:
                  </h3>
                  <ul className="list-disc">
                    <li className="text-black text-lg ">
                      Classmates are friendly to each other
                    </li>
                    <li className="text-black text-lg ">Classroom is tidy</li>
                    <li className="text-black text-lg ">
                      Teachers are not interrupted by chatty students
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center gap-3 p-2 min-h-[300px] ">
                  <h2 className="text-2xl font-bold text-center text-black">
                    {item.qustion}
                  </h2>
                  <textarea
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                    placeholder="Write here..."
                    className="min-h-[80px]  min-w-[500px] p-2 border border-gray-600 rounded-lg text-black placeholder:text-gray-400 placeholder:text-center text-center"
                  />
                  {show ? (
                    <p className="text-xl text-center w-[500px] text-violet-900">
                      {item.sugg}
                    </p>
                  ) : (
                    <button
                    disabled={input.length == 0}
                      onClick={() => setShow(true)}
                      className={`text-white bg-violet-900 px-8 py-2 rounded-lg  transition duration-150 ${input.length == 0 ? "cursor-not-allowed":"cursor-pointer active:scale-90"}`}
                    >
                      Check
                    </button>
                  )}
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
