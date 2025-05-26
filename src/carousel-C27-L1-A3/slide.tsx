"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SituationData from "@/carousel-C27-L1-A3/situation.json";
import dropData from "@/carousel-C27-L1-A3/drop.json";
import Image from "next/image";
type OptionType = {
  option: string;
  val: string;
};

type SituationType = {
  Situation: string;
  option: OptionType[];
};

const SituationSlide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [show, setShow] = useState(false);
  const [lastSlide, setLastSlide] = useState<number>(0);
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>([]);
const [draggableData, setDraggableData] = useState<SituationType[]>(SituationData);

  const handleNext = () => {
    if (lastSlide > SituationData.length - 1) {
    }
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    if (lastSlide === 0) return;
    swiperRef.current?.slidePrev();
  };

  const handleChange = (swiper: SwiperClass) => {
    setLastSlide(swiper.activeIndex);
    setShow(false)

   
    // setShow(false);
  };

  const handleDrag = (e: React.DragEvent, item: { val: string }) => {
    e.dataTransfer.setData("drag", JSON.stringify(item));
  };
  const handleDrop = (e: React.DragEvent, value: string, index: number) => {
  const dropItem = JSON.parse(e.dataTransfer.getData("drag"));

  if (dropItem.val === value) {
    // ✅ Add item to drop area
    setDropItems((prev) => ({
      ...prev,
      [index]: prev[index]
        ? [...prev[index], dropItem.option]
        : [dropItem.option],
    }));

    // ✅ Remove the dragged item from the draggableData
   setDraggableData((prev) => {
  const updated = prev.map((item) => ({
    ...item,
    option: item.option.filter(
      (optn: OptionType) => optn.option !== dropItem.option
    ),
  }));

  // ✅ Check if all options are dropped
  const allDropped = updated.every((item) => item.option.length === 0);
  if (allDropped) {
    setTimeout(() => {
      setShow(true);
    }, 100); // show after DOM update
  }

  return updated;
});

  }
};


  return (
    <div className="min-h-screen  bg-[#F8FCFA] flex justify-center gap-5 items-center  flex-col p-5">
      <h4 className="text-2xl font-medium text-center text-black">
        Practise 4 Cs
      </h4>

      <div className="w-[100%] ">
        <div className="rounded-lg  border w-full  grid grid-cols-12 gap-2 ">

          <div className="col-span-4 w-full">
            <Swiper
              slidesPerView={1}
              loop={false}
              autoplay={false}
              allowTouchMove={false}
              modules={[Navigation]}
              onSlideChange={handleChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {draggableData.map((item, index) => (
                <SwiperSlide key={index}>
      {
        show ? 
  <div className="flex justify-center items-center flex-col">
    <Image src="/Well_Done.jpg" height={100} width={300} alt="well done" />
    <h2 className="text-black text-3xl font-bold">Well Done</h2>
  </div>
  :
                  <div className=" flex justify-center items-center flex-col gap-5">
                      <div className="border border-black p-1">
                      <ul className="list-disc space-y-2 px-5">
                        <li className="text-black text-md font-bold">
                          Mention what’s not alright.
                        </li>
                        <li className="text-black text-md font-bold">
                          Tell them why it’s not alright.
                        </li>
                        <li className="text-black text-md font-bold">
                          Share how you would like their behavior to change.
                        </li>
                        <li className="text-black text-md font-bold">
                          Suggest another approach to their behavior .
                        </li>
                      </ul>
                    </div>

  
  
                  <div className="flex flex-col gap-4 justify-center items-center  border  border-black min-h-[350px] p-2">
                    <h2 className="text-2xl font-medium text-center text-black">
                      {item.Situation}
                    </h2>
                    <div className="flex flex-col gap-1 justify-center items-center">
                      {item.option.map((optn, index) => (
                        <h4
                          key={index}
                          draggable
                          onDragStart={(e) => handleDrag(e, optn)}
                          className="text-md  active:cursor-grabbing hover:cursor-grab rounded-lg px-2 py-1 text-violet-900   w-full"
                        >
                          {optn.option}
                        </h4>
                      ))}
                    </div>

                    
                  </div>

                  </div>
      }            
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-span-8 w-full ">
            <div className="grid grid-cols-12 w-full h-full gap-1">
              {dropData.map((item, index) => (
                <div
                  onDrop={(e) => handleDrop(e, item.dropVale, index)}
                  onDragOver={(e) => e.preventDefault()}
                  key={index}
                  className="col-span-3 p-1 w-full border h-full  border-black flex justify-start items-center gap-5 flex-col"
                >
                  <h4 className="text-black font-medium text-xl w-full border-b text-center ">
                    {item.dropVale}
                  </h4>
                  {dropItems[index]?.map((item, index) => (
                    <h4
                      key={index}
                      className="text-md  min-h-[100px]  px-2 py-1 text-violet-900  w-full"
                    >
                      {item}
                    </h4>
                  ))}
                </div>
              ))}
            </div>
          </div>
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
              lastSlide < SituationData.length -1 
                ? "border border-black rounded-full p-3 shadow-inner shadow-[#000000b9] bg-yellow-400"
                : ""
            } hover:scale-90`}
          >
            <FaArrowRight
              className={`${
                lastSlide < SituationData.length -1 ? "block" : "hidden"
              } text-[40px] cursor-pointer text-black`}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SituationSlide;
