import React from "react";
import FbIcon from '../../images/facebook.png'
import LinkedinIcon from '../../images/linkedin.png'
import InstaIcon from '../../images/instagram.png'
import TwittIcon from '../../images/twitter.png'
import CallIcon from '../../images/phone.png'
import MailIcon from '../../images/mail.png'
import LocIcon from '../../images/location.png'
import Sec4Form from "./Sec4Form";

import Aos from 'aos'
import 'aos/dist/aos.css'; 
import { useEffect } from 'react'

import ImgBox from "../../components/Sec4ImgBox";


const Section_4 = () => {

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div>
      <section>
        <div className="main-sec-4 w-[100%] h-auto text-center px-5 py-10">
          <span className="text-4xl font-bold ">
            What the People Think About Us
          </span>
          <div className="pro-img-container flex flex-col items-center mt-10 space-y-6 md:flex-row md:justify-center md:space-x-[8%]">
            
            <ImgBox img={"https://img.freepik.com/premium-photo/joyful-man-optimistic-lifestyle-avatar-icon-face_279525-26570.jpg"} text1='Raymond Galario' text2="Sydney, Australia" detail=" Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been scrambled it to make a type book."/>

            {/* ------------------> */}

            <ImgBox img={"https://img.freepik.com/premium-photo/joyful-man-optimistic-lifestyle-avatar-icon-face_279525-26570.jpg"} text1='Raymond Galario' text2="Sydney, Australia" detail=" Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been scrambled it to make a type book."/>


            {/* ----------------------> */}

            <ImgBox img={"https://img.freepik.com/premium-photo/joyful-man-optimistic-lifestyle-avatar-icon-face_279525-26570.jpg"} text1='Raymond Galario' text2="Sydney, Australia" detail=" Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been scrambled it to make a type book."/>


            {/* --------------> */}
          </div>

      {/* ------------------------------------------------------> */}

          <div className="form-section mt-[10%] md:flex justify-center">
            <div className="social-sec bg-[#186899] text-white w-[100%] h-[100px]px-5 py-5 flex flex-col items-center md:w-[20%] md:ml-[12%]">
              <div className="soc-icon-box1 space-y-3 text-center  flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px] bg-slate-400 rounded-full"
                  src={CallIcon}
                  alt=""
                />
                <ul>
                  <li className="font-bold">Call</li>
                  <li>+91 1234567890</li>
                </ul>
              </div>
              <hr className="w-[80%] my-5 " />

              <div className="soc-icon-box2 space-y-3 text-center  flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px] bg-slate-400 rounded-full"
                  src={MailIcon}
                  alt=""
                />
                <ul>
                  <li className="font-bold">Email</li>
                  <li>xyzemail@gmail.com</li>
                </ul>
              </div>
              <hr className="w-[80%] my-5 " />

              <div className="soc-icon-box3 space-y-3 text-center  flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px] bg-white rounded-full "
                  src={LocIcon}
                  alt=""
                />
                <ul>
                  <li className="font-bold">Address</li>
                  <li className="w-[250px] md:w-[200px] md:px-4">Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                </ul>
              </div>
              <hr className="w-[80%] my-5 " />

              <div className="soc-icon-box4 space-y-3 text-center flex items-center">
                <ul className="flex space-x-5 pt-5 md:pt-10">
                  <li><img src={FbIcon} alt="" /></li>
                  <li><img src={LinkedinIcon} alt="" /></li>
                  <li><img src={InstaIcon} alt="" /></li>
                  <li><img src={TwittIcon} alt="" /></li>
               
                </ul>
              </div>
            </div>
           <Sec4Form/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_4;
