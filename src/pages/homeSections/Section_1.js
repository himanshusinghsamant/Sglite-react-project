import React from "react";
import PolyImg2 from "../../images/poly2.png";
import Button from "../../components/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpanDiv = ({num="", text=""})=>{
  return(
    <div className="w-[8rem] mt-5 mr-5 h-[8rem] font-['DM_Serif_Display] border-2 border-blue-200 shadow-md flex flex-col justify-center  text-center  md:m-0 md:w-[9rem] lg:w-[12rem] lg:shadow-none lg:border-none">
    <span className=" text-[#186899] text-3xl font-bold md:text-5xl">
      {num}
    </span>
    <span>{text}</span>
  </div>
  )
}

const Section_1 = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <section>
        <div className="sec-1-container bg-white w-[100%] h-[65rem] md:h-[45rem] px-6 py-6 space-y-5 flex flex-col-reverse md:flex-row md:items-center md:justify-center ">
          <div
            data-aos="fade-right"
            className="sec1-box1 h-[30rem] md:w-[30rem] lg:mr-10"
          >
            <img src={PolyImg2} alt="" />
          </div>
          <div className="sec1-box2 h-[30rem] md:w-[25rem] space-y-6 md:ml-7 md:pt-11 lg:ml-10 ">
            <h1 className="font-['DM_Serif_Display'] text-3xl font-semibold ">
              Who We Are
            </h1>
            <p className="font-['Jost']">
              We are a company driven by a passion for excellence and a
              commitment to delivering high-quality products to our customers.
              Our state-of-the-art manufacturing facilities and cutting-edge
              technologies enable us to produce poly-carbonate sheets that are
              both durable and versatile. <br className="md:mt-7" /> We take
              pride in our ability to meet the needs of a wide range of
              industries, including construction, agriculture, automotive, and
              more. Our poly-carbonate sheets are used in a variety of
              applications, from skylights and roofing to safety barriers and
              sound barriers.
            </p>
            <Button text='Read More' />
          </div>
        </div>
        <div className="exp-sec w-[100%]  bg-[#F3FCFF] flex items-center justify-center flex-wrap px-5 py-7 md:space-x-5 lg:relative">
          <SpanDiv num="12" text="Year Experiance"/>

          <hr className="bg-[#186899] lg:h-[80px] lg:w-[2px] lg:absolute lg:z-30 top-[55px] left-[33%]"/>
          <hr className="bg-[#186899] lg:h-[80px] lg:w-[2px] lg:absolute lg:z-30 top-[55px] left-[48.5%]"/>
          <hr className="bg-[#186899] lg:h-[80px] lg:w-[2px] lg:absolute lg:z-30 top-[55px] left-[64%]"/>

          <SpanDiv num="85" text="Success Project"/>
         
          <SpanDiv num="15" text="Active Project"/>
         
          <SpanDiv num="19" text="Happy Customers"/>
         
        </div>
      </section>
    </div>
  );
};

export default Section_1;
