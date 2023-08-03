const ImgDiv = ({anim, image="",style=''})=>{
    return(
        <div style={{style}}  data-aos={anim} className="img-box-2 md:w-[25rem] md:px-3 mdpy-3">
        <img src={image} alt="" />
      </div>
    )
}

export default ImgDiv;

