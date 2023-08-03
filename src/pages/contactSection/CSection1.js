import React from 'react'
import Sec4Form from '../homeSections/Sec4Form'
import Facebook from '../../images/facebook.png'
import Linkedin from '../../images/linkedin.png'
import Insta from '../../images/instagram.png'
import Twitter from '../../images/twitter.png'
import CallIcon from '../../images/phone.png'
import MailIcon from '../../images/mail.png'
import LocIcon from '../../images/location.png'


const CSection1 = () => {


  return (
    <div>
       <div className="form-section mt-[10%] md:flex justify-center px-3">
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
              <hr className="w-[60%] my-5 " />

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
              <hr className="w-[60%] my-5 " />

              <div className="soc-icon-box3 space-y-3 text-center  flex flex-col items-center">
                <img
                  className="w-[50px] h-[50px] bg-white rounded-full"
                  src={LocIcon}
                  alt=""
                />
                <ul>
                  <li className="font-bold">Address</li>
                  <li className="w-[250px] md:w-[200px] md:px-4">Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                </ul>
              </div>
              <hr className="w-[60%] my-5 " />

              <div className="soc-icon-box4 space-y-3 text-center flex items-center">
                <ul className="flex space-x-5 pt-5 md:pt-10">
                  <li><img src={Facebook} alt="" /></li>
                  <li><img src={Linkedin} alt="" /></li>
                  <li><img src={Insta} alt="" /></li>
                  <li><img src={Twitter} alt="" /></li>
               
                </ul>
              </div>
            </div>
           <Sec4Form/>
          </div>
    </div>
  )
}

export default CSection1;
