"use client"
import React, { useState } from 'react'
import FirstScreen from './firstScreen'
import Result from './result'
import Start from './start'

const CarouselC27L1AA = () => {
    const [isFristScreen,setIsFirstScreen]=useState("start")
  return (
    <div>
      {isFristScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
      {isFristScreen == "firstScreen" && <FirstScreen setIsFirstScreen={setIsFirstScreen}/>}
      {isFristScreen == "result" && <Result />}
    </div>
  )
}

export default CarouselC27L1AA
