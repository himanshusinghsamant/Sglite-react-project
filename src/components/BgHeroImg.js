import BgImage from '../images/Background.png'

const BackgroundImg = ({text1='', text2=''})=>{
    return(
        <div className="bg-img-container w-[100%] h-auto relative z-10 md:mt-[11%]">
        <img src={BgImage} alt="" />
        <div className="about-box w-[8rem] h-auto bg-white absolute top-4 left-[33%]  text-center rounded-t-2xl px-1 py-1 md:top-[62%] md:left-[45%] lg:w-[15rem] lg:h-[7rem] lg:pt-4 lg:left-[43%]">
          <h1 className='text-2xl text-[#186899] font-bold lg:text-4xl'>About Us</h1>
          <span className='text-xs lg:text-base'>Home / About us</span>
        </div>
      </div>

    )
}


export default BackgroundImg;