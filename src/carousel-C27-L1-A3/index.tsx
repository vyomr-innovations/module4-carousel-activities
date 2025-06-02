"use client";
import { useState } from "react";
// import React, { useState } from 'react'

import SituationSlide from "./slide";
import Start from "./start";

const CarouselC27L1A3 = () => {
  const [isFristScreen, setIsFirstScreen] = useState("start");
  return (
    <div>
      {isFristScreen == "start" && (
        <Start setIsFirstScreen={setIsFirstScreen} />
      )}
      {isFristScreen == "firstScreen" && <SituationSlide />}
    </div>
  );
};

export default CarouselC27L1A3;
