"use client"
import React, { useState } from 'react'
import FirstScreen from './firstScreen'
import Result from './result'

const CarouselC27L1A2 = () => {
    const [isFristScreen,setFirstScreen]=useState("firstScreen")
  return (
    <div>
      {isFristScreen == "firstScreen" && <FirstScreen setFirstScreen={setFirstScreen}/>}
      {isFristScreen == "result" && <Result />}
    </div>
  )
}

export default CarouselC27L1A2
