import React from "react";
import Img from "../../images/poly3.png";
import Img2 from '../../images/poly4.png'
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'
import ImgDiv from "../../components/Images";
import DetailDiv from "../../components/ProductDtl";


const Section1 = () => {

  useEffect(()=>{
    Aos.init()
  },[])


  return (
    <div>
      <section>
        <div className="products-heading text-center space-y-6 px-5 py-10 flex flex-col items-center w-[100%] mt-10 ">
          <h1 className="text-4xl font-bold">PC Hollow Sheet</h1>
          <p
            className="md
                w-[80%] lg:w-[60%]"
          >
            Manufacturer of a wide range of products which include pc hollow
            sheet, thickness 10mm, pc multiwall sheet, 10 mm pc multiwall sheet,
            pc hollow sheet, pc hollow sheet, thickness 6mm and pc hollow sheet,
            thickness 4mm.
          </p>
        </div>
        <div className="sec-1-container w-[100%] h-auto px-5 py-10 space-y-7 md:flex md:justify-center">
          <div className="inner-container md:w-[95%] md:grid md:grid-cols-2 gap-10 lg:w-[65%] lg:mt-7 ">
           <DetailDiv text1="PC Hollow Sheet, Thickness 10mm"/>
          <ImgDiv anim='fade-right' image={Img} />
            {/* --------------------------> */}

         <div className="mt-10 lg:mt-0">
         <ImgDiv anim='fade-left' image={Img2}/>
         </div>
            
          <DetailDiv text1="PC Multiwall Sheet, Thickness 10mm"/>

            {/* -----------------------------> */}

           <div className="mt-10 lg:mt-0"> <DetailDiv text1="10 mm PC Multiwall Sheet"/></div>

            
          <ImgDiv anim='fade-right' image={Img} />
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
