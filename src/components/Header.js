import React from 'react'
import FbIcon from '../images/facebook.png'
import LinkedinIcon from '../images/linkedin.png'
import InstaIcon from '../images/instagram.png'
import TwittIcon from '../images/twitter.png'

const Header = () => {
  return (
    <div>
      <header className='w-[100%] h-[7.69194rem] flex flex-col space-y-4 bg-[#186899] justify-center items-center md:flex-row md:justify-between md:h-[2.5rem] md:space-y-0 md:fixed md:top-0 md:z-50 '>
        <div className="social-icons-box flex space-x-4 md:ml-[13%] ">
            <img src={FbIcon} alt="facebook" />
            <img src={LinkedinIcon} alt="linkedin" />
            <img src={InstaIcon} alt="instagram" />
            <img src={TwittIcon} alt="twitter" />
        </div>
        <div className='flex space-x-2 md:mr-[13%]'>
            <span className='text-white'>+91 1234567890</span>
            <h1 className='text-white'>|</h1>
            <p className='text-white'>demoemail@gmail.com</p>
        </div>
      </header>
    </div>
  )
}

export default Header
