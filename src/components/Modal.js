import React from "react";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'; 
import Button from "./Button";
import Element from "./Element";

const Modal = ({ RemoveModal }) => {

  useEffect(()=>{
    Aos.init();
  },[])

    useEffect(() =>{
        document.body.style.overflowY = 'hidden';
        return ()=>{
            document.body.style.overflowY = 'scroll';
        }        
    },[])

  return (
    <div>
      <div className="modal-wrapper fixed top-0 left-0 bottom-0 right-0 bg-slate-600 z-[100] opacity-75" onClick={RemoveModal}>
      </div>
      <button
          className="text-2xl font-semibold px-2 rounded-full lg:font-extrabold float-right absolute top-5 right-[12%] z-[300] border-2 border-black  md:right-[20%] lg:right-[31%]"
          onClick={RemoveModal}
        >
          X
        </button>
      <div className="modal-form-container w-[80%] lg:h-[600px] fixed left-10 top-3 md:left-[18%] lg:left-[30%] lg:w-[50%] z-[200] ">
        <form
        data-aos='zoom-in'
          action=""
          className="py-5 px-5 space-y-10 md:space-y-2  bg-[#F3FCFF] md:w-[80%] md:h-[100%] md:px-8 md:rounded-lg lg:space-y-5"
        >
          <div className="form-heading text-center space-y-4">
            <span className="text-2xl font-bold md:text-xl lg:text-4xl">Get Free Quote</span>
            <p className="md:hidden lg:flex text-[#8A94A6] lg:w-[80%] lg:ml-11 ">
            Please fill below details and wait for our call.Our team will contact soon with best price and delivery time line.
            </p>
          </div>

          <div className="name-sec space-y-4 md:flex md:items-center md:space-y-0 md:justify-between">
           <Element type='input' label="First Name"/>
          <Element type='input' label="Contact Number"/>
          </div>
          {/* --------------------------------------> */}
          <div className="email-mob-sec space-y-4  md:flex  md:items-center md:space-y-0 md:justify-between">
          <Element type='input' label="Email Address"/>

          <Element type='input' label="Category"/>
           
          </div>

          {/* --------------------------------------------> */}

          <div className="message-sec">
          <Element type='textArea' label="Product Requirement" Pholder="Enter product requirement (Size, Quantity, etc) ..." rows="2"/>
          </div>
      <div className="lg:ml-[35%]">
      <Button text='Submit'/>
      </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
