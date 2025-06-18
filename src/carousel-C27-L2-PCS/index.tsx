"use client"
import React, { useState } from 'react'
import Result from './result'
import Start from './start'
import Slide from './slide'

const CarouselC27L2PCS = () => {
    const [isFristScreen,setIsFirstScreen]=useState("start")
  return (
    <div>
      {isFristScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
      {isFristScreen == "firstScreen" && <Slide />}
      {isFristScreen == "result" && <Result />}
    </div>
  )
}

export default CarouselC27L2PCS
