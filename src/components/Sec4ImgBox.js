const ImgBox =({img='', text1='', text2='',detail=''})=>{
    return(
      <div data-aos='fade-right' className="profile-img-box bg-[#F2F2F2] w-[15rem] h-[15rem] rounded-3xl px-5 py-5 flex flex-col justify-center ">
                <div className="pro-img flex mb-4">
                  <img
                    className="bg-black rounded-full text-white w-16 h-11"
                    src={img}
                    alt=""
                  />
                  <div className="name">
                    <span className="font-semibold">{text1}</span>
                    <span> {text2}</span>
                  </div>
                </div>
                <p className="text-xs">
                {detail}
                </p>
              </div>
  
    )
  }

  export default ImgBox;