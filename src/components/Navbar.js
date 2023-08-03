import React, { useState } from "react";
import SgLite from "../images/sgl-ite.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import MyModal from './Modal'



const Navbar = () => {
  const [change, setChange] = useState(false);
  const [ismodal, setisModal] = useState(false)

  function handleToggle() {
    setChange(!change);
  }

  function ShowModal(){
    setisModal(true)
  }
  function RemoveModal(){
    setisModal(false)
  }




  return (
    <div>
      {change ? (
        <div className="navbar-cmp w-[250px] h-[100vh] bg-[#e9f9ff]  px-5 pt-10 fixed top-0 flex flex-col items-center space-y-10 shadow-2xl z-50">
          <div className="nav-logo w-[150px]">
            <img src={SgLite} alt="" />
          </div>
          <div className="page-links">
            <ul className="">
              <NavLink to={'/'}>
                <li className="mt-4 font-semibold">Home</li>
              </NavLink>
              <NavLink to={'/about-us'}>
                <li className="mt-4 font-semibold">About Us</li>
              </NavLink>
              <NavLink to={'/products'}>
                <li className="mt-4 font-semibold">Products</li>
              </NavLink>
              <NavLink to={'/contact-us'}>
                <li className="mt-4 font-semibold">Contact Us</li>
              </NavLink>
            </ul>
          </div>
         <div onClick={ShowModal}>
         <Button text='Get Free Quote'/>
         </div>
        </div>
      ) : null}
      <div
        className="ham-toggle fixed z-[100] top-1 right-5 cursor-pointer lg:hidden"
        onClick={handleToggle}
      >
        <h1 className="text-3xl text-white ">{change ? (<i class="fa-solid fa-circle-xmark  animate-ping"></i>) : (<i class="fa-sharp fa-solid fa-bars"></i>)}</h1>
      </div>

      <div className="navbar-cmp hidden lg:w-[100%] lg:h-[7rem] bg-white lg:flex lg:items-center lg:justify-between lg:shadow-lg lg:fixed lg:top-[-.5%] lg:z-50 lg:mt-[3%]">
        <div className="nav-logo lg:w-[13.3125rem] lg:h-[5rem] lg:ml-[12.5%] ">
          <img src={SgLite} alt="" />
        </div>
        <div className="page-links lg:flex items-center lg:space-x-10 lg:mr-[13%]">
          <ul className="lg:flex items-center lg:space-x-6">
            <NavLink to={'/'}>
              <li className="font-semibold duration-1000">Home</li>
            </NavLink>
            <NavLink to={'/about-us'}>
              <li className=" font-semibold duration-1000">About Us</li>
            </NavLink>
            <NavLink to={'/products'}>
              <li className="font-semibold duration-1000">Products</li>
            </NavLink>
            <NavLink to={'contact-us'}>
              <li className="font-semibold duration-1000">Contact Us</li>
            </NavLink>
          </ul>
        <div onClick={ShowModal}> <Button text='Get Free Quote'/></div>
        </div>
      </div>
      {ismodal && <MyModal RemoveModal = {RemoveModal}/>}
    </div>
  );
};

export default Navbar;
