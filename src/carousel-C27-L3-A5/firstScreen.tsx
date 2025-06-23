"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import dynamic from "next/dynamic";
const ReactMediaRecorder = dynamic(
  () => import("react-media-recorder").then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
);
import sliderData from "@/carousel-C27-L3-A5/slider.json";

// ✅ Helper component to update height after <audio> appears
const AudioPlayerWithHeightUpdate = ({
  src,
  onHeightChange,
}: {
  src: string;
  onHeightChange: () => void;
}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHeightChange();
    }, 100); // give time to render audio

    return () => clearTimeout(timeout);
  }, [src]);

  return <audio src={src} controls />;
};

const FirstScreen = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [lastSlide, setLastSlide] = useState<number>(0);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setTimeout(() => {
      swiper.updateAutoHeight();
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center gap-5 items-center flex-col p-5">
      <div className="flex justify-center items-center gap-1 flex-col">
        <h3 className="text-2xl font-bold text-black">Oral Script</h3>
        <p className="text-black text-md font-normal text-center">
          Create a speech for your campaign as a youth leader.
        </p>
      </div>

      <div className="w-[800px] bg-white">
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
            {sliderData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="  p-3 flex justify-center items-start">
                  <ReactMediaRecorder
                    audio
                    render={({
                      status,
                      startRecording,
                      stopRecording,
                      mediaBlobUrl,
                    }) => (
                      <div className="flex justify-start items-center gap-5 flex-col w-full">
                        <div className="flex gap-6">
                          <button
                            onClick={startRecording}
                            className="bg-green-600 hover:bg-green-700 cursor-pointer px-5 py-2 rounded-lg text-white"
                          >
                            Start Recording
                          </button>

                          <button
                            onClick={stopRecording}
                            className={`${
                              status !== "recording"
                                ? "cursor-not-allowed bg-red-300"
                                : "cursor-pointer bg-red-500 hover:bg-red-600"
                            } px-5 py-2 rounded-lg text-white`}
                          >
                            Stop Recording
                          </button>

                          {mediaBlobUrl && (
                            <a
                              href={mediaBlobUrl}
                              download={`recording${index+1}.wav`}
                              className="bg-blue-500 px-4 py-2 rounded-lg text-white"
                            >
                              Download Recording
                            </a>
                          )}
                        </div>
                        <h3 className="text-black">
                          {status === "recording" ? "Recording..." : ""}
                        </h3>
                        {mediaBlobUrl && (
                          <AudioPlayerWithHeightUpdate
                            src={mediaBlobUrl}
                            onHeightChange={() =>
                              swiperRef.current?.updateAutoHeight()
                            }
                          />
                        )}

                        <div className="bg-gray-200 w-full p-5 rounded-lg mt-4">
                          <h4 className="text-xl font-bold text-center text-black">
                            {item}
                          </h4>
                        </div>
                      </div>
                    )}
                  />
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
              lastSlide < sliderData.length - 1
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < sliderData.length - 1 ? "block" : "hidden"
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
