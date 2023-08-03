import React from "react";
import PcHollowImg from "../../images/PCSheet1.png";
import PcSolidImg from "../../images/PCSheet2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../../components/Button";



const Section_2 = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <section>
        <div className="main-sec-2 h-[auto] w-[100%] md:h-[55rem] flex flex-col justify-center items-center px-10 py-11">
          <div className="heading-sec mb-10 md:text-center">
            <h1 className="text-3xl font-semibold mb-5">Our Product Range</h1>
            <p className="text-[#4D5053]">
              Here you can explore our range of high-quality poly-carbonate
              sheets designed for a wide range of applications and industries.
            </p>
          </div>
          <div className="img-sec md:flex text-center md:space-x-10">
                <div  data-aos ='fade-right'  className="img-box-1 my-10">
                    <img  className='mb-5 ' src={PcHollowImg} alt="" />
                    <span className='font-semibold '>PC Hollow Sheet</span>
        </div>
                <div  data-aos ='fade-left'  className="img-box-2 my-10">
                    <img className='mb-5' src={PcSolidImg} alt="" />
                    <span className='font-semibold'>PC Solid Sheet</span>
                </div>
            </div>
            <Button text='View Product'/>
        </div>
      </section>
    </div>
  );
};

export default Section_2;
