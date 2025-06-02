"use client"
import React, { useState } from 'react'
import FirstScreen from './firstScreen'
import Start from './start'
import Result from './result'

const CarouselC27L3A1 = () => {
    const [isFristScreen,setIsFirstScreen]=useState("start")
  return (
    <div>
      {isFristScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
      {isFristScreen == "firstScreen" && <FirstScreen setIsFirstScreen={setIsFirstScreen} />}
      {isFristScreen == "result" && <Result />}

    </div>
  )
}

export default CarouselC27L3A1
