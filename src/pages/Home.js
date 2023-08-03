import React, { useEffect } from "react";
import PolyImg from "../images/polycarbonate.png";
import Section1 from "./homeSections/Section_1";
import Section2 from "./homeSections/Section_2";
import Section3 from "./homeSections/Section_3";
import Section4 from "./homeSections/Section_4";
import Button from "../components/Button";
import Aos from 'aos'

const Home = () => {

  useEffect(()=>{
    Aos.init();
  },[])


  return (
    <div>
      <main className="w-[100%] h-[55rem] md:h-[40.1875rem] bg-[#D8E8EE]  flex flex-col justify-center md:items-center md:flex-row lg:mt-[11%]">
        <div className="main-box-1 text-center space-y-8 py-5 md:w-[40%] md:ml-[13%] md:text-start">
          <span data-aos ='fade-right' className="">
            <p className="text-[2.0625rem]  md:text-[3rem] font-bold text-[#186899] font-['DM_Serif_Display'] md:text-start ">
              Let Your Home Decor with Polymer Sheet
            </p>
          </span>
          <p className="font-['Jost'] md:text-start md:w-[30rem] md:h-auto">
            We are a leading Indian manufacturer of high-quality poly-carbonate
            sheets that are suitable for a wide range of applications.
          </p>
        <Button text='View Products'/>
        </div>
        <div className="md:relative main-box-2 mt-5 md:mt-0 md:w-[55%] md:h-[40.1875rem]">
          <img className="md:absolute md:top-0" src={PolyImg} alt="" />
        </div>
      </main>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>

    </div>
  );
};

export default Home;
