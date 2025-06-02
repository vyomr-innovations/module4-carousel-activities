"use client"
import React, { useState } from 'react'
import FirstScreen from './firstScreen'
import Start from './start'

const CarouselC27L2A4 = () => {
    const [isFristScreen,setIsFirstScreen]=useState("start")
  return (
    <div>
      {isFristScreen == "start" && <Start setIsFirstScreen={setIsFirstScreen}/>}
      {isFristScreen == "firstScreen" && <FirstScreen />}

    </div>
  )
}

export default CarouselC27L2A4
