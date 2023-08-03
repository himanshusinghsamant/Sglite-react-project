import React from "react";
import footerImg from "../images/sgl-ite.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-sec bg-[#F3FCFF] w-[100%] h-auto px-5 py-5 lg:flex pt-[7%] lg:pt-10 mt-0">
          <div className="footer-box-1 space-y-3 lg:px-10 lg:w-[20%]">
            <img className="mb-5" src={footerImg} alt="" />
            <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
          </div>
          <div className="footer-details flex flex-wrap md:space-x-[15%] lg:flex-nowrap lg:w-[80%]">
            <div className="footer-box-2 mt-7 ml-3 ">
              <h1 className="text-lg font-bold text-[#186899] mb-7">Pages</h1>
              <ul className="lg:space-y-3">
                <li>- Home</li>
                <li>- About Us</li>
                <li>- Products</li>
                <li>- Contact Us</li>
              </ul>
            </div>
            <div className="footer-box-3 mt-7 ml-3  ">
              <h1 className="text-lg font-bold text-[#186899] mb-7">PC Hollow Sheet</h1>
              <ul  className="lg:space-y-3">
                <li>- PC Hollow Sheet, Thickness 10mm</li>
                <li>- Pc Multiwall Sheet</li>
                <li>- 10 mm PC Multiwall sheet</li>
              </ul>
            </div>
            <div className="footer-box-4 mt-7 ml-3">
              <h1 className="text-lg font-bold text-[#186899] mb-7">PC Solid Sheet</h1>
              <ul  className="lg:space-y-3">
                <li>- Pc Embossed Sheet</li>
                <li>- Pc Solid Sheet</li>
                <li>- Pc Diamond Sheet</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-base bg-[#F3FCFF] text-center py-3 ">
          <span>Copyright 2023 © SGlite. All rights recived.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
