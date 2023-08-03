import React from "react";
import Img from "../../images/poly3.png";
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'
import ImgDiv from "../../components/Images";


const Section_1 = () => {

  useEffect(()=>{
    Aos.init();
  },[])


  return (
    <div>
      <section>
        <div className="sec-1-container w-[100%] h-auto px-5 py-10 space-y-7 md:flex md:justify-center">
          <div className="inner-container md:w-[95%] md:grid md:grid-cols-2 gap-10 lg:w-[65%] lg:mt-7 ">
            <div className="text-box-1 md:w-[25rem] space-y-5 py-3 px-3">
              <h1 className="text-3xl font-bold">Who We Are</h1>
              <p>
                We are a company driven by a passion for excellence and a
                commitment to delivering high-quality products to our customers.
                Our state-of-the-art manufacturing facilities and cutting-edge
                technologies enable us to produce poly-carbonate sheets that are
                both durable and versatile. We are a company driven by a passion
                for excellence and a commitment to delivering high-quality
                products to our customers. Our state-of-the-art manufacturing
                facilities and cutting-edge technologies enable us to produce
                poly-carbonate sheets that are both durable and versatile.
              </p>
            </div>
          <ImgDiv anim='fade-left' image={Img}/>
         
         <div className="mt-16 lg:mt-0"> <ImgDiv anim='fade-right' image={Img}/></div>

            <div className="text-box-2 md:w-[25rem] space-y-5 py-3 px-3 ">
              <h1 className="text-3xl font-bold">Who We Are</h1>
              <p>
                We are a company driven by a passion for excellence and a
                commitment to delivering high-quality products to our customers.
                Our state-of-the-art manufacturing facilities and cutting-edge
                technologies enable us to produce poly-carbonate sheets that are
                both durable and versatile. We are a company driven by a passion
                for excellence and a commitment to delivering high-quality
                products to our customers. Our state-of-the-art manufacturing
                facilities and cutting-edge technologies enable us to produce
                poly-carbonate sheets that are both durable and versatile.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_1;
