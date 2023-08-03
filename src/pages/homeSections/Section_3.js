import React from "react";
import ProData from '../../data/Sglitedata.js'
import BottomImg1 from '../../images/05.png'
import BottomImg2 from '../../images/01.png'
import BottomImg3 from '../../images/02.png'
import BottomImg4 from '../../images/03.png'
import BottomImg5 from '../../images/04.png'

import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'
// console.log(ProData)
const Section_3 = () => {
  useEffect(()=>{
    Aos.init()
  },[])


  return (
    <div>
      <section>
        <div className="main-sec-3 w-[100%] h-auto px-7 py-10 text-center md:h-[50rem]">
          <span className="text-4xl font-bold">Key Features Of Products</span>
          <div className="products-sec flex flex-wrap my-10 py-5  md:justify-center">
           
           {ProData && ProData.map(items =>{
            return( <div data-aos='zoom-in' className="pro-img-box space-y-3 bg-white w-[100%] px-10 md:px-2 h-[230px] flex flex-col items-center  my-2 mx-2 shadow-md md:h-[250px] md:w-[180px] lg:w-[200px] lg:h-[260px] lg:mx-10 lg:my-8 lg:shadow-none">
            <div className="image w-[60px] h-[60px]">
              <img src={items.image} alt="product-Img" />
            </div>
            <div className="title font-bold">{items.title}</div>
            <div className="detail text-xs">
              {items.detail}
            </div>
          </div>)
           })}            
          </div>
       
        </div>
        <div className="bottom-border w-[100%] h-[100px] bg-[#F3FCFF] flex justify-between items-center px-10 lg:justify-center space-x-[10%]">
            <img className="w-10 h-6 md:w-16 md:h-11 " src={BottomImg1} alt="" />
            <img className="w-10 h-6 md:w-16 md:h-11" src={BottomImg2} alt="" />
            <img className="w-10 h-6 md:w-16 md:h-11" src={BottomImg3} alt="" />
            <img className="w-10 h-6 md:w-16 md:h-11" src={BottomImg4} alt="" />
            <img className="w-10 h-6 md:w-16 md:h-11" src={BottomImg5} alt="" />
           
          </div>
      </section>
    </div>
  );
};

export default Section_3;
