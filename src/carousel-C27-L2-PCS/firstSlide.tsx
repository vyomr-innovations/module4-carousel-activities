import { RiArrowRightCircleLine } from "react-icons/ri";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const FirstSlide = () => {
  return (
    <div className="h-full  bg-[#404042] p-5 rounded-lg flex justify-center items-center w-full flex-col gap-1">
      <div className="min-h-[150px] flex justify-center items-center flex-col gap-1">
        <h4 className="text-5xl font-medium text-center text-white">
          Am I an Effective Communicator?
        </h4>
        <p className="text-lg text-center text-gray-100">
         Answer the questions to assess whether you’re assertive
        </p>
      </div>
      {/* first row ============== */}
      <div className="w-full flex  justify-center items-center  gap-1.5 ">
        <div className="box w-[220px] p-2 min-h-[200px] relative  flex justify-center items-center">
          {/* <span className=' bg-white rounded-full   text-black text-3xl absolute -right-3.5 top-[50%] '><RiArrowRightCircleLine/></span> */}
          <h4 className="text-center text-lg font-bold text-orange-300">
            Read the Qustions and keep track of how many times you answer yes.
          </h4>
        </div>

        <div className="box bg-[#ffff00] w-[220px] p-3 min-h-[200px]  relative  flex justify-center items-center">
          <span className="z-30 bg-[#404042] rounded-full   text-white text-3xl absolute -right-4 top-[50%] transform  translate-y-[-50%] ">
            <RiArrowRightCircleLine />
          </span>
          <h4 className="text-center text-lg font-medium text-black">
          Do I use short sentences in my speech?
          </h4>
        </div>

        <div className="box bg-[#ffff00] w-[220px] p-3 min-h-[200px]  relative  flex justify-center items-center">
          <span className="z-30 bg-[#404042] rounded-full   text-white text-3xl absolute -right-4 top-[50%] transform  translate-y-[-50%] ">
            <RiArrowRightCircleLine />
          </span>
          <h4 className="text-center text-lg font-medium text-black">
           Do I communicate what I want clearly and concisely?
          </h4>
        </div>

        <div className="box bg-[#91c47f] w-[220px] p-3 min-h-[200px]  relative  flex justify-center items-center rounded-tr-[130px]">
          <span className="z-30 bg-[#404042] rounded-full   text-white text-3xl absolute left-[45%]  -bottom-7 transform  translate-y-[-50%] ">
            <HiOutlineArrowCircleDown />
          </span>
          <h4 className="text-center text-lg font-medium text-black">
          Do I use hand gestures while speaking?
          </h4>
        </div>
      </div>
      {/* secound  row ============== */}
      <div className="w-full flex  justify-center items-center gap-1.5 ">
       

        <div className="box bg-[#01fffd] w-[220px] p-3 min-h-[200px]  relative  flex justify-center items-center rounded-tl-[130px]">
           <span className="z-30 bg-[#404042] rounded-full   text-white text-3xl absolute left-[45%]  -bottom-7 transform  translate-y-[-50%] ">
            <HiOutlineArrowCircleDown />
          </span>
          <h4 className="text-center text-lg font-medium text-black">
            {` Do I make eye contact with others?`}
          </h4>
        </div>

        <div className="box bg-[#01fffd] w-[220px] p-3 min-h-[200px]  relative  flex justify-center items-center   ">
          <span className="z-30 bg-[#404042] rounded-full   text-white text-3xl absolute -left-4.5 top-[50%] transform  translate-y-[-50%] ">
            <HiOutlineArrowCircleLeft />
          </span>
          <h4 className="text-center text-lg font-medium text-black">
          Am I polite?
          </h4>
        </div>

        <div className="box bg-[#91c47f] w-[220px] p-3 min-h-[200px]  relative  flex justify-center items-center   ">
          <span className="z-30 bg-[#404042] rounded-full   text-white text-3xl absolute -left-4 top-[50%] transform  translate-y-[-50%] ">
            <HiOutlineArrowCircleLeft />
          </span>
          
          <h4 className="text-center text-lg font-b-md text-black">
           Do I use active voice?
          </h4>
        </div>

         <div className="box bg-[#91c47f] w-[220px] p-3 min-h-[200px]  relative  flex justify-center items-center rounded-br-[130px] ">
          <span className="z-30 bg-[#404042] rounded-full   text-white text-3xl absolute -left-4 top-[50%] transform  translate-y-[-50%] ">
            <HiOutlineArrowCircleLeft />
          </span>

         
          <h4 className="text-center text-lg font-medium text-black">
            Do I show emotions during the presentation?
          </h4>
        </div>
      </div>

      {/* third row ============== */}
      <div className=" w-[82%]  flex justify-start   items-center gap-1.5 ">
        <div className="box bg-[#01fffd] w-[220px]  p-3 min-h-[200px]  relative  flex justify-center items-center  rounded-b-full">
          <h4 className="text-center text-lg font-medium text-black">
           Do I listen attentively?
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
