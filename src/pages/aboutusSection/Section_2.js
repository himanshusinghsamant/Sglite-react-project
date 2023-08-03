import React from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'


const Section_2 = () => {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div>
    <div className="main-cont flex justify-center items-center bg-[#F2F2F2] h-[20rem] w-[100%] lg:mb-10">
    <div data-aos='fade-right' className="left-svg absolute left-9 md:left-[31%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="454"
          viewBox="0 0 202 454"
          fill="none"
        >
          <path
            d="M201.5 13H83C44.3401 13 13 44.3401 13 83V371C13 409.66 44.3401 441 83 441H201.5"
            stroke="#186899"
            stroke-width="25"
          />
        </svg>
      </div>

      <div className="text-content w-[250px] h-auto text-center py-2 space-y-3 px-2 lg:w-[400px]">
        <h1 className="text-[#186899] text-2xl lg:text-5xl">“</h1>
        <span><p className="text-xs font-bold text-gray-600 italic lg:text-xl">I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</p></span>
        <h2 className="text-xs lg:text-sm">-BUNNY WILLIAMS</h2>
      </div>

      <div data-aos='fade-left' className="rigth-svg absolute right-9 md:right-[31%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="454"
          viewBox="0 0 201 454"
          fill="none"
        >
          <path
            d="M3.74169e-05 441H118.5C157.16 441 188.5 409.66 188.5 371L188.5 83C188.5 44.34 157.16 13 118.5 13L0 13"
            stroke="#186899"
            stroke-width="25"
          />
        </svg>
      </div>
    </div>
    </div>
  );
};

export default Section_2;
